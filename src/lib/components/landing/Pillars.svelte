<script>
    import { onMount } from 'svelte';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    const pillars = [
        {
            title: "Inovasi dari Masalah Nyata",
            desc: "Focus on solving real-world problems with cutting-edge tech.",
            icon: "⚡"
        },
        {
            title: "User-Centric Banget",
            desc: "We put users first. Always. Empathy driven design.",
            icon: "👤"
        },
        {
            title: "Kolaborasi adalah Kunci",
            desc: "We work WITH you, not just FOR you. Together we grow.",
            icon: "🤝"
        }
    ];

    let sectionRef;

    onMount(() => {
        const ctx = gsap.context(() => {
            gsap.from('.pillar-card', {
                scrollTrigger: {
                    trigger: sectionRef,
                    start: 'top 75%',
                },
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    });
</script>

<section class="py-32 bg-dark-bg" id="services" bind:this={sectionRef}>
    <div class="container">
        <div class="mb-20">
            <span class="text-brand-neon text-sm font-mono uppercase tracking-wider mb-2 block">Our DNA</span>
            <h2 class="text-4xl md:text-5xl font-bold">Tiga Pilar Kreasi Kita</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
            {#each pillars as pillar}
                <div class="pillar-card group p-10 rounded-[2rem] bg-dark-card border border-white/5 hover:border-brand-neon/50 transition-colors relative overflow-hidden">
                   <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-neon to-brand-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    
                    <div class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-brand-neon group-hover:text-black transition-all duration-300">
                        {pillar.icon}
                    </div>
                    
                    <h3 class="text-2xl font-bold mb-4">{pillar.title}</h3>
                    <p class="text-white/60 text-base leading-relaxed">
                        {pillar.desc}
                    </p>

                    <div class="mt-10 w-8 h-1 bg-white/10 rounded-full group-hover:w-16 group-hover:bg-brand-neon transition-all duration-300"></div>
                </div>
            {/each}
        </div>
    </div>
</section>

