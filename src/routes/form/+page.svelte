<script lang="ts">
	import { enhance } from '$app/forms';
	let creating = $state(false);
</script>

<form
	method="POST"
	action="?/create"
	use:enhance={() => {
		creating = true;

		return async ({ update }) => {
			await update();
			creating = false;
		};
	}}
>
	<label>
		Nom :
		<input
			disabled={creating}
			type="text"
			name="name"
			placeholder="Votre nom"
			required
			minlength="3"
		/>
	</label>

	<label>
		Email :
		<input type="email" name="email" placeholder="Votre email" required />
	</label>

	<button type="submit">Soumettre</button>
</form>

{#if creating}
	<span class="saving">saving...</span>
{/if}
