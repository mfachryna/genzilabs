<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Genzi Meraih Mimpi</title>
	<meta name="description" content="Genzi Meraih Mimpi - Tim digital yang berangkat dari keresahan sehari-hari buat bikin solusi yang nendang." />
	<meta name="keywords" content="digital agency, software house, tech startup, gen z, inovasi" />
	<meta name="theme-color" content="#000000" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Genzi Meraih Mimpi - Solusi Digital Nyata" />
	<meta property="og:description" content="Tim digital yang berangkat dari keresahan sehari-hari buat bikin solusi yang nendang." />
</svelte:head>
{@render children()}
