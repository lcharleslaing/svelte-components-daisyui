// hooks.ts

import type { Handle } from '@sveltejs/kit';
import settings from '$lib/settings/settings';

export const handle: Handle = async ({ event, resolve }) => {
	// Access the request from the event object
	const { request } = event;
	const url = new URL(request.url);
	const path = url.pathname;

	try {
		const response = await resolve(event);

		// Check if the response status is 404
		if (response.status === 404) {
			// Send message to Discord webhook if response status is 404
			await sendMessageToDiscord(path);
		}

		return response;
	} catch (error) {
		// Handle errors
		console.error('Error handling request:', error);
		throw error;
	}
};

// Function to send message to Discord webhook with timestamp
async function sendMessageToDiscord(path: string) {
	try {
		// Get the current date and time
		const timestamp = new Date().toLocaleString();

		// Construct payload for the webhook with timestamp
		const payload = {
			content: `**__${settings.businessName.toUpperCase()}__** Website\nERROR: 404 Page not found: **${settings.businessWebsite}${path}**\n${timestamp}.`
		};

		// Send POST request to Discord webhook URL with the payload
		await fetch(import.meta.env.VITE_ERROR_DISCORD_WEBHOOK_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		});
	} catch (error) {
		console.error('Error sending message to Discord:', error);
	}
}
