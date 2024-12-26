<script lang="ts">
	import { page } from '$app/stores';
	import { emojis } from './emojis.js';
	import { get } from 'svelte/store';

	const status = get(page).status || 500;
	const errorMessage = get(page).error?.message || 'Une erreur inconnue est survenue.';
</script>

<h1>{status} {errorMessage}</h1>

<span class="center-emoji">
	{emojis[status as keyof typeof emojis] ?? emojis[500]}
</span>

<style>
	.center-emoji {
		font-size: 5rem;
		display: block;
		text-align: center;
	}
</style>
