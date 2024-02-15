import * as dotenv from 'dotenv';
dotenv.config();

export const sendTelegramMessage = async (message) => {
	const response = await fetch(
		`https://api.telegram.org/${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				chat_id: process.env.TELEGRAM_CHAT_ID,
				text: message
			})
		}
	);
	if (!response.ok) {
		throw new Error('Failed to send message');
	}
	return response.json();
};
