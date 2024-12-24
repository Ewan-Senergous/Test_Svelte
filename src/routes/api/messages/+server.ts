import { json, error, type RequestEvent } from '@sveltejs/kit';

type Message = {
	id: number;
	text: string;
};

let messages: Message[] = [];

export function GET() {
	return json(messages);
}

export async function POST({ request }: RequestEvent) {
	const body = await request.json();

	if (!body.text) {
		throw error(400, 'Message text is required');
	}

	// Nouveau message
	const message: Message = { id: messages.length + 1, text: body.text };
	messages.push(message);

	console.log('Message added:', message);
	return json(message);
}
