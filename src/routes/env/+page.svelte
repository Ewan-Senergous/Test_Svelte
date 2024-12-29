<script lang="ts">
	import { onMount } from 'svelte';

	const apiUrl: string =
		import.meta.env.PUBLIC_API_URL || 'https://www.thecocktaildb.com/api/json/v1/1';

	interface Cocktail {
		strDrink: string; // Nom du cocktail
		strDrinkThumb: string; // URL de l'image
	}

	let cocktails: Cocktail[] = [];
	let error: string | null = null;

	onMount(async () => {
		try {
			const url = `${apiUrl}/filter.php?i=vodka`;
			console.log('Fetching URL:', url);

			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Erreur API : ${response.status}`);
			}

			const data: { drinks: Cocktail[] } = await response.json();
			cocktails = data.drinks;
		} catch (err: unknown) {
			error = err instanceof Error ? err.message : 'Erreur inconnue';
			console.error('Erreur lors de la récupération des cocktails :', err);
		}
	});
</script>

<h1>Liste des Cocktails contenant de la Vodka</h1>

{#if error}
	<p style="color: red;">Une erreur est survenue : {error}</p>
{:else if cocktails.length === 0}
	<p>Chargement des cocktails...</p>
{:else}
	<ul>
		{#each cocktails as cocktail}
			<li>
				<strong>{cocktail.strDrink}</strong>
				<img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width="100" />
			</li>
		{/each}
	</ul>
{/if}
