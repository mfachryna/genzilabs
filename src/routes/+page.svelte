<script>
    import Navbar from '$lib/components/landing/Navbar.svelte';
    import Hero from '$lib/components/landing/Hero.svelte';
    import Marquee from '$lib/components/landing/Marquee.svelte';
    import About from '$lib/components/landing/About.svelte';
    import Quote from '$lib/components/landing/Quote.svelte';
    import Pillars from '$lib/components/landing/Pillars.svelte';
    import IdeaCTA from '$lib/components/landing/IdeaCTA.svelte';
    import Team from '$lib/components/landing/Team.svelte';
    import Footer from '$lib/components/landing/Footer.svelte';
</script>

<div class="min-h-screen bg-dark-bg text-white selection:bg-brand-neon selection:text-black font-sans">
    <Navbar />
    
    <main>
        <Hero />
        <Marquee />
        <About />
        <Quote />
        <Pillars />
        <IdeaCTA />
        <Team />
    </main>
    
    <Footer />
</div>
