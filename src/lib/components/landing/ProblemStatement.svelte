<script lang="ts">
    import { onMount } from 'svelte';
    import { _ } from 'svelte-i18n';

    let sectionRef: HTMLElement;

    onMount(async () => {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);
        
        const ctx = gsap.context(() => {
            gsap.from('.anim-fade-up', {
                scrollTrigger: {
                    trigger: sectionRef,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    });
</script>

<section class="py-40 bg-dark-bg relative overflow-hidden" bind:this={sectionRef}>
    <!-- Decorative huge text background -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.03]">
        <h2 class="text-[20vw] font-black leading-none text-white whitespace-nowrap">MASALAH = KUNCI</h2>
    </div>

    <div class="container relative z-10">
        <div class="mx-auto">
            <div class="grid md:grid-cols-12 gap-12 items-center">
                 <!-- Main Headline Area -->
                <div class="md:col-span-7 space-y-2">
                    <span class="text-brand-neon font-mono text-sm tracking-widest uppercase mb-4 block anim-fade-up">{$_('philosophy.label')}</span>
                    <h2 class="text-5xl md:text-7xl font-black leading-[0.9] text-white uppercase tracking-tighter anim-fade-up">
                        {$_('philosophy.headline1')} <br>
                        <span class="text-transparent bg-clip-text bg-linear-to-r from-white to-white/50">{$_('philosophy.headline2')}</span>
                    </h2>
                </div>

                 <!-- Supporting Text Area -->
                <div class="md:col-span-5 space-y-8 anim-fade-up pt-8 md:pt-0">
                    <p class="text-white/80 text-xl md:text-2xl font-light leading-relaxed border-l-2 border-brand-neon pl-6">
                        {$_('philosophy.quote1')} <br>
                        <span class="text-white/40">{$_('philosophy.quote2')}</span>
                    </p>
                    <p class="text-white/50 text-base leading-relaxed pl-6">
                        {$_('philosophy.description')}
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
