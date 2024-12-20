<script>
	export let data;
</script>

<h1>Blog</h1>

{#if data.lastVisited}
	<p>
		<strong>Dernier article visité :</strong>
		<a href="/blog/{data.lastVisited}">{data.lastVisited}</a>
	</p>
{/if}

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/blog/{slug}">{title}</a></li>
	{/each}
</ul>
