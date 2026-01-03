<script>
    import Navbar from '$lib/components/landing/Navbar.svelte';
    import Hero from '$lib/components/landing/Hero.svelte';
    import Marquee from '$lib/components/landing/Marquee.svelte';
    import ProblemStatement from '$lib/components/landing/ProblemStatement.svelte';
    import About from '$lib/components/landing/About.svelte';
    import WhatWeBuild from '$lib/components/landing/WhatWeBuild.svelte';
    import HowWeWork from '$lib/components/landing/HowWeWork.svelte';
    import Quote from '$lib/components/landing/Quote.svelte';
    import Pillars from '$lib/components/landing/Pillars.svelte';
    import IdeaCTA from '$lib/components/landing/IdeaCTA.svelte';
    import Team from '$lib/components/landing/Team.svelte';
    import JoinCircle from '$lib/components/landing/JoinCircle.svelte';
    import Footer from '$lib/components/landing/Footer.svelte';
</script>

<div class="min-h-screen bg-dark-bg text-white selection:bg-brand-neon selection:text-black font-sans">
    <Navbar />
    
    <main>
        <section id="home">
            <Hero />
        </section>
        
        <Marquee text="CREATIVE • FUTURE • INNOVATION • DIGITAL" theme="neon"/>
        
        <section id="about">
            <ProblemStatement />
        </section>
        
        <HowWeWork />
        
        <section id="products">
            <WhatWeBuild /> 
        </section>
        
        <Marquee text="COLLABORATION • IMPACT • GROWTH • COMMUNITY" theme="light"/>
        
        <About />
        <IdeaCTA />
    </main>
    
    <Footer />
</div>
