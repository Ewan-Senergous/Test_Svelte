<script>
	let { data } = $props();
</script>

<article>
	<header>
		<h1>{data.post.title}</h1>
	</header>
	<section>
		{@html data.post.content}
	</section>
</article>
<a href="/blog">Retour au blog</a>
