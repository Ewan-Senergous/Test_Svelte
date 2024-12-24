<script lang="ts">
	import { onMount } from 'svelte';

	type Message = {
		id: number;
		text: string;
	};

	let messages: Message[] = [];
	let newMessage = '';

	// Récupère les messages
	async function fetchMessages() {
		const response = await fetch('/api/messages');
		messages = await response.json();
	}

	onMount(() => {
		fetchMessages();
	});

	async function addMessage() {
		if (!newMessage) return;

		await fetch('/api/messages', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ text: newMessage })
		});

		newMessage = '';
		await fetchMessages(); // Met à jour les messages
	}
</script>

<h1>Messages</h1>
<ul>
	{#each messages as message}
		<li>{message.text}</li>
	{/each}
</ul>

<input type="text" bind:value={newMessage} placeholder="Type your message..." />
<button on:click={addMessage}>Add Message</button>
