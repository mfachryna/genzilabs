<script lang="ts">
    import { onMount } from 'svelte';
    import { _, json } from 'svelte-i18n';

    const icons = [
        `<svg class="text-5xl text-[#CCFF00] mb-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" height="1em" stroke="currentColor" stroke-width="0" viewBox="0 0 320 512" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"></path></svg>`,
        `<svg class="text-5xl text-[#CCFF00] mb-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" height="1em" stroke="currentColor" stroke-width="0" viewBox="0 0 448 512" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z"></path></svg>`,
        `<svg class="text-5xl text-[#CCFF00] mb-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" height="1em" stroke="currentColor" stroke-width="0" viewBox="0 0 640 512" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path></svg>`
    ];

    let sectionRef: HTMLElement;

    onMount(async () => {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);
        
        const ctx = gsap.context(() => {
            gsap.from('.pillar-card', {
                scrollTrigger: {
                    trigger: sectionRef,
                    start: 'top 75%',
                },
                y: 100,
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
        <div class="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <span class="inline-block px-4 py-1.5 border border-white/10 bg-white/5 text-white/80 text-xs font-mono uppercase tracking-wider mb-4">{$_('aboutPage.pillarsLabel')}</span>
                <h2 class="text-4xl md:text-5xl font-black">{$_('aboutPage.pillarsHeadline')}</h2>
            </div>
            <p class="text-white/60 text-lg max-w-md md:text-right font-medium">
                {$_('aboutPage.pillarsSubtitle')}
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
            {#each $json('aboutPage.pillars') as pillar, i}
                <div class="pillar-card group p-8 lg:p-10 bg-dark-card border-[3px] border-white/5 hover:border-brand-neon hover:shadow-[8px_8px_0px_#D9FF00] transition-all duration-300 relative overflow-hidden flex flex-col items-start h-full">
                    <div class="mb-6 relative z-10">
                        {@html icons[i]}
                    </div>
                    
                    <h3 class="text-2xl font-bold mb-4 relative z-10">{pillar.title}</h3>
                    <p class="text-white/60 text-base leading-relaxed mb-8 grow relative z-10 font-medium">
                        {pillar.desc}
                    </p>

                    <div class="mt-auto w-12 h-1.5 bg-brand-neon relative z-10 group-hover:w-full transition-all duration-300"></div>
                </div>
            {/each}
        </div>
    </div>
</section>
