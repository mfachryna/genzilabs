<script>
    import Navbar from '$lib/components/landing/Navbar.svelte';
    import Hero from '$lib/components/landing/Hero.svelte';
    import Marquee from '$lib/components/landing/Marquee.svelte';
    import ProblemStatement from '$lib/components/landing/ProblemStatement.svelte';
    import About from '$lib/components/landing/About.svelte';
    import WhatWeBuild from '$lib/components/landing/WhatWeBuild.svelte';
    import HowWeWork from '$lib/components/landing/HowWeWork.svelte';
    import IdeaCTA from '$lib/components/landing/IdeaCTA.svelte';
    import Footer from '$lib/components/landing/Footer.svelte';
</script>

<div class="min-h-screen bg-dark-bg text-white selection:bg-brand-neon selection:text-black font-sans">
    <Navbar />
    
    <main>
        <section id="home">
            <Hero />
        </section>
        
        <Marquee rotate={-2} text="CREATIVE • FUTURE • INNOVATION • DIGITAL" theme="neon"/>
        
        <section id="about">
            <ProblemStatement />
        </section>
        
        <HowWeWork />
        
        <section id="products">
            <WhatWeBuild /> 
        </section>
        
        <Marquee rotate={2} text="COLLABORATION • IMPACT • GROWTH • COMMUNITY" theme="light" reverse={true}/>
        
        <About />
        <IdeaCTA />
    </main>
    
    <Footer />
</div>
