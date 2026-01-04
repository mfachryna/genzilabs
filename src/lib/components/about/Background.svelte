<script lang="ts">
    import { onMount } from 'svelte';
    import { _ } from 'svelte-i18n';
    import { slide } from 'svelte/transition';

    let sectionRef: HTMLElement;
    let isExpanded = $state(false);

    onMount(async () => {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);
        
        const ctx = gsap.context(() => {
            gsap.from('.bg-content', {
                scrollTrigger: {
                    trigger: sectionRef,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    });
</script>

<section class="py-20 md:py-32 relative overflow-hidden" bind:this={sectionRef}>
    <!-- Decoration -->
    <div class="absolute top-0 right-0 w-125 h-125 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

    <div class="container grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        <!-- Visual/Decoration Left -->
        <div class="md:col-span-5 relative md:sticky md:top-24">
            <div class="aspect-square bg-linear-to-br from-brand-purple/20 to-brand-neon/20 border-2 border-white/10 p-8 relative overflow-hidden group hover:border-brand-neon hover:shadow-[8px_8px_0px_#D9FF00] transition-all duration-300">
                <div class="absolute inset-0 bg-grid-white/[0.05] mask-[linear-gradient(to_bottom,transparent,black)]"></div>
                <div class="h-full flex flex-col justify-between relative z-10">
                    <div>
                        <div class="text-6xl font-black text-white mb-2">{$_('aboutPage.storyYear')}</div>
                        <div class="text-white/60 font-mono text-sm uppercase tracking-widest">{$_('aboutPage.storyYearLabel')}</div>
                    </div>
                    
                    <div class="text-white/40 text-xs font-mono border-t border-white/10 pt-4 mt-auto text-center">
                        {$_('aboutPage.storyDecoration')}
                    </div>
                </div>
            </div>
        </div>

        <!-- Text Content Right -->
        <div class="md:col-span-7 bg-content space-y-8">
            <div>
                <span class="text-brand-neon font-mono text-sm uppercase tracking-widest font-bold mb-4 block">{$_('aboutPage.storyLabel')}</span>
                <h2 class="text-4xl md:text-5xl font-black leading-tight">
                    {$_('aboutPage.storyHeadline1')} <br>
                    {$_('aboutPage.storyHeadline2')} <span class="text-transparent bg-clip-text bg-linear-to-r from-brand-neon to-brand-purple">{$_('aboutPage.storyHeadline3')}</span>
                </h2>
            </div>
            
            <div class="space-y-6 text-lg text-white/70 font-medium leading-relaxed">
                <p>
                    {$_('aboutPage.storyPara1')}
                </p>

                {#if isExpanded}
                    <div transition:slide={{ duration: 300 }}>
                        <p class="mb-6">
                            {$_('aboutPage.storyPara2')}
                        </p>
                        <p class="mb-6">
                            {$_('aboutPage.storyPara3')}
                        </p>
                        <p class="mb-6">
                            {$_('aboutPage.storyPara4')}
                        </p>
                        <p>
                            {$_('aboutPage.storyPara5')}
                        </p>
                    </div>
                {/if}

                <button 
                    onclick={() => isExpanded = !isExpanded}
                    class="text-brand-neon font-bold uppercase tracking-wider text-sm hover:underline underline-offset-4 decoration-brand-neon decoration-2 transition-all flex items-center gap-2"
                >
                    {isExpanded ? $_('aboutPage.readLess') : $_('aboutPage.readMore')}
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="w-4 h-4 transition-transform duration-300 {isExpanded ? 'rotate-180' : ''}" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        stroke-width="2"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</section>
