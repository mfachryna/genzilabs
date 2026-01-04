<script lang="ts">
	import '../app.css';
	import '$lib/i18n';
	import favicon from '$lib/assets/favicon.svg';
	import { _, locale } from 'svelte-i18n';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{$_('seo.title')}</title>
	<meta name="description" content={$_('seo.description')} />
	<meta name="keywords" content={$_('seo.keywords')} />
	<meta name="theme-color" content="#000000" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={$_('seo.og_title')} />
	<meta property="og:description" content={$_('seo.og_description')} />
	<meta property="og:locale" content={$locale === 'en' ? 'en_US' : 'id_ID'} />
</svelte:head>
{@render children()}
