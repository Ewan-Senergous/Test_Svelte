<script lang="ts">
	let name = '';
	let email = '';

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		console.log('Formulaire soumis:', { name, email });
	}
</script>

<form onsubmit={handleSubmit}>
	<label>
		Nom :
		<input type="text" bind:value={name} placeholder="Votre nom" required />
	</label>

	<label>
		Email :
		<input type="email" bind:value={email} placeholder="Votre email" required />
	</label>

	<button type="submit">Soumettre</button>
</form>
