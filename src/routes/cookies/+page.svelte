<script>
	let username = '';
</script>

<form method="POST" action="?/setCookie">
	<label for="username">Nom d'utilisateur :</label>
	<input name="username" bind:value={username} />
	<button type="submit">Définir Cookie</button>
</form>

<form method="POST" action="?/clearCookie">
	<button type="submit">Supprimer Cookie</button>
</form>

<p>Nom d'utilisateur actuel : {username}</p>
