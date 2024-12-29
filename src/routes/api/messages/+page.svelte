<script lang="ts">
	import { onMount } from 'svelte';

	type Message = { id: number; text: string };

	let messages: Message[] = [];
	let newMessage = '';
	let editMessage: Message | null = null;

	const fetchMessages = async () => {
		messages = await (await fetch('/api/messages')).json();
	}; // Récupérer les messages

	const saveMessage = async () => {
		if (!newMessage) return;

		await fetch('/api/messages', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ text: newMessage })
		});

		newMessage = '';
		await fetchMessages();
	};

	const updateMessage = async () => {
		if (!editMessage) return;

		await fetch('/api/messages', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(editMessage)
		});

		editMessage = null;
		await fetchMessages();
	};

	const deleteMessage = async (id: number) => {
		await fetch('/api/messages', {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id })
		});

		await fetchMessages();
	};

	onMount(fetchMessages);
</script>

<h1>Messages</h1>

<ul>
	{#each messages as { id, text }}
		<li>
			{text}
			<button on:click={() => (editMessage = { id, text })}>Edit</button>
			<button on:click={() => deleteMessage(id)}>Delete</button>
		</li>
	{/each}
</ul>

{#if editMessage}
	<div>
		<input type="text" bind:value={editMessage.text} />
		<button on:click={updateMessage}>Update</button>
		<button on:click={() => (editMessage = null)}>Cancel</button>
	</div>
{/if}

<div>
	<input type="text" bind:value={newMessage} placeholder="Type your message..." />
	<button on:click={saveMessage}>Add Message</button>
</div>
