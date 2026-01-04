<script lang="ts">
    import { onMount } from 'svelte';
    import { _ } from 'svelte-i18n';

    let sectionRef: HTMLElement;

    onMount(async () => {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);
        
        const ctx = gsap.context(() => {
            gsap.to('.work-step', {
                scrollTrigger: {
                    trigger: sectionRef,
                    start: 'top 70%',
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    });
</script>

<section class="py-32 bg-dark-bg relative overflow-hidden" bind:this={sectionRef}>
    <div class="container space-y-20">

        <div class="text-center space-y-6 max-w-3xl mx-auto">
            <span class="text-brand-neon font-mono text-sm uppercase tracking-widest mb-2 block">{$_('howWeWork.label')}</span>
            <h2 class="text-4xl md:text-6xl font-bold leading-tight text-white">
                {$_('howWeWork.headline')}
            </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
            {#each $_('howWeWork.steps') as step, i}
                <div 
                    class="work-step opacity-0 translate-y-12 bg-dark-card p-10 min-h-75 relative flex flex-col justify-end group transition-all duration-500 hover:bg-white/5
                    {i < 3 ? 'md:col-span-2' : 'md:col-span-3'}"
                >
                    <span class="absolute top-6 right-8 text-7xl md:text-8xl font-bold text-white/5 group-hover:text-brand-neon/10 transition-colors duration-500 select-none">
                        {step.number}
                    </span>
                    
                    <div class="relative z-10 space-y-4">
                        <h3 class="text-2xl font-bold text-white group-hover:text-brand-neon transition-colors duration-300">
                            {step.title}
                        </h3>
                        <p class="text-white/60 text-sm leading-relaxed max-w-[90%]">
                            {step.desc}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>