<script lang="ts">
	import { onMount } from 'svelte';

	let cookieName: string = 'myCookie'; // Type explicite string
	let cookieValue: string = '';
	let savedValue: string | null = null; // null est autorisé

	// Fonction pour définir un cookie
	function setCookie(name: string, value: string, days: number): void {
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		const expires = `expires=${date.toUTCString()}`;
		document.cookie = `${name}=${value};${expires};path=/`;
	}

	// Fonction pour lire un cookie
	function getCookie(name: string): string | null {
		const nameEQ = name + '=';
		const ca = document.cookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i].trim(); // Retirer les espaces superflus
			if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}

	// Sauvegarder le cookie et mettre à jour `savedValue`
	function saveCookie(): void {
		setCookie(cookieName, cookieValue, 7); // Expire dans 7 jours
		savedValue = getCookie(cookieName);
	}

	// Récupérer la valeur existante du cookie au chargement
	onMount(() => {
		savedValue = getCookie(cookieName);
	});
</script>

<div>
	<label>
		Nom du cookie :
		<input bind:value={cookieName} placeholder="Nom du cookie" />
	</label>
	<label>
		Valeur du cookie :
		<input bind:value={cookieValue} placeholder="Valeur du cookie" />
	</label>
	<button onclick={saveCookie}>Enregistrer le cookie</button>
	<p>
		Valeur actuelle du cookie "{cookieName}" : {savedValue || 'non défini'}
	</p>
</div>
