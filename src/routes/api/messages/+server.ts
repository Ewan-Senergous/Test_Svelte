import { json, error, type RequestEvent } from '@sveltejs/kit';

type Message = { id: number; text: string };
let messages: Message[] = [];

export function GET() {
	return json(messages);
} // Afficher les messages

export async function POST({ request }: RequestEvent) {
	const { text } = await request.json();
	if (!text) throw error(400, 'Message text is required');

	const message: Message = { id: messages.length + 1, text };
	messages.push(message);
	console.log('Message added:', message);
	return json(message);
}

export async function PUT({ request }: RequestEvent) {
	const { id, text } = await request.json();
	if (!id || !text) throw error(400, 'Both id and text are required');

	const message = messages.find((msg) => msg.id === id);
	if (!message) throw error(404, 'Message not found');

	message.text = text;
	console.log('Message updated:', messages);
	return json(message);
}

export async function DELETE({ request }: RequestEvent) {
	const { id } = await request.json();
	if (!id) throw error(400, 'Message id is required');

	const index = messages.findIndex((msg) => msg.id === id);
	if (index === -1) throw error(404, 'Message not found');

	const [deletedMessage] = messages.splice(index, 1);
	console.log('Message deleted:', deletedMessage);
	return json(deletedMessage);
}
