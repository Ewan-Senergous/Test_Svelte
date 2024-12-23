<script lang="ts">
	let name = $state('');
	let email = $state('');

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		console.log('Formulaire soumis:', { name, email });
	}
</script>

<form method="POST" action="?/create">
	<label>
		Nom :
		<input type="text" name="name" bind:value={name} placeholder="Votre nom" required />
	</label>

	<label>
		Email :
		<input type="email" name="email" bind:value={email} placeholder="Votre email" required />
	</label>

	<button type="submit">Soumettre</button>
</form>
