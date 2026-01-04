<script lang="ts">
	import '../app.css';
	import { isLocaleLoaded } from '$lib/i18n';
	import favicon from '$lib/assets/favicon.svg';
	import { _, locale, isLoading } from 'svelte-i18n';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{$isLoading ? 'Genzi Meraih Mimpi' : $_('seo.title')}</title>
	<meta name="description" content={$isLoading ? 'Tim digital yang berangkat dari keresahan sehari-hari buat bikin solusi yang nendang.' : $_('seo.description')} />
	<meta name="keywords" content={$isLoading ? 'digital agency, software house, tech startup, gen z, inovasi' : $_('seo.keywords')} />
	<meta name="theme-color" content="#000000" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={$isLoading ? 'Genzi Meraih Mimpi - Solusi Digital Nyata' : $_('seo.og_title')} />
	<meta property="og:description" content={$isLoading ? 'Tim digital yang berangkat dari keresahan sehari-hari buat bikin solusi yang nendang.' : $_('seo.og_description')} />
	<meta property="og:locale" content={$locale === 'en' ? 'en_US' : 'id_ID'} />
</svelte:head>

{#if $isLocaleLoaded}
	{@render children()}
{:else}
	<div class="min-h-screen bg-dark-bg"></div>
{/if}

