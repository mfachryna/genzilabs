<script lang="ts">
    import { _ } from 'svelte-i18n';
    import Navbar from '$lib/components/landing/Navbar.svelte';
    import Footer from '$lib/components/landing/Footer.svelte';
    import Team from '$lib/components/about/Team.svelte';
    import Quote from '$lib/components/about/Quote.svelte';
    import Pillars from '$lib/components/about/Pillars.svelte';
    import Background from '$lib/components/about/Background.svelte';
</script>

<div class="min-h-screen bg-dark-bg text-white font-sans selection:bg-brand-neon selection:text-black">
    <Navbar />

    <main class="pt-20">
        <!-- Hero Section -->
        <section class="py-20 md:py-32 container text-center relative z-10">
             <div class="space-y-6 max-w-4xl mx-auto">
                <span class="text-brand-neon font-mono text-sm uppercase tracking-widest mb-2 block animate-fade-in">{$_('aboutPage.heroLabel')}</span>
                <h1 class="text-5xl md:text-7xl font-black leading-tight text-white animate-fade-in-up">
                    {$_('aboutPage.heroHeadline1')}<br> <span class="text-transparent bg-clip-text bg-linear-to-r from-brand-neon to-brand-purple">{$_('aboutPage.heroHeadline2')}</span>
                </h1>
                <p class="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-100">
                    {$_('aboutPage.heroDesc')}
                </p>
            </div>
        </section>

        <Background />
        <Team />
        <Pillars />
        <Quote />
    </main>

    <Footer />
</div>

<style>
    @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
        animation: fade-in 1s ease-out forwards;
    }
    .animate-fade-in-up {
        animation: fade-in-up 1s ease-out forwards;
    }
    .delay-100 {
        animation-delay: 0.2s;
    }
</style>
