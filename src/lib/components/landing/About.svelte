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
            
            gsap.from('.anim-scale', {
                 scrollTrigger: {
                    trigger: sectionRef,
                    start: 'top 70%',
                },
                scale: 0.9,
                opacity: 0,
                duration: 1.2,
                ease: 'expo.out'
            });
        }, sectionRef);
        
        return () => ctx.revert();
    });
</script>

<section class="py-32 bg-dark-bg relative overflow-hidden" id="philosophy" bind:this={sectionRef}>
    <div class="container space-y-20">
        <!-- Header -->
        <div class="text-center space-y-6 anim-fade-up">
            <h2 class="text-4xl md:text-6xl font-bold leading-tight">
                {$_('about.headline')}
            </h2>
        </div>

        <!-- Content Grid -->
        <div class="grid md:grid-cols-12 gap-6 lg:gap-8 h-auto md:h-150">
            <!-- Large Image Area -->
            <div class="md:col-span-8 relative overflow-hidden group bg-dark-card border border-white/5 anim-scale transition-colors duration-300 hover:border-brand-neon">
                 <!-- Placeholder for Image -->
                 <div class="absolute inset-0 bg-neutral-900 group-hover:scale-105 transition-transform duration-1000">
                    <img alt="Team Working" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&amp;h=800&amp;fit=crop&amp;dpr=3">
                    <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-neutral-700 to-black"></div>
                </div>
                
                <div class="absolute bottom-0 left-0 p-10 w-full bg-linear-to-t from-black via-black/50 to-transparent">
                    <h3 class="text-3xl font-bold mb-3">{$_('about.imageTitle')}</h3>
                    <p class="text-white/60 text-lg">{$_('about.imageDesc')}</p>
                </div>
            </div>

            <!-- Side Cards -->
            <div class="md:col-span-4 flex flex-col gap-6">
                <!-- Card 1 -->
                <div class="flex-1 bg-dark-card border border-white/5 p-10 hover:bg-white/5 transition-colors group anim-fade-up">
                    <div class="text-brand-neon mb-6">
                        <svg 
                            class="text-4xl text-[#CCFF00] mb-4" 
                            fill="currentColor" 
                            height="1em" 
                            stroke="currentColor" 
                            stroke-width="0" 
                            viewBox="0 0 352 512" 
                            width="1em" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">{$_('about.card1Title')}</h3>
                    <p class="text-white/50 leading-relaxed font-light">
                        {$_('about.card1Desc')}
                    </p>
                </div>

                <!-- Card 2 (Purple) -->
                <div class="flex-1 bg-brand-purple p-10 text-white relative overflow-hidden group anim-fade-up">
                     <div class="absolute -right-8 -bottom-8 opacity-20 text-black">
                        <svg 
                            class="text-9xl" 
                            fill="currentColor" 
                            height="1em" 
                            stroke="currentColor" 
                            stroke-width="0" 
                            viewBox="0 0 448 512" 
                            width="1em" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z"></path>
                        </svg>
                     </div>
                    <h3 class="text-2xl font-bold mb-3">{$_('about.card2Title')}</h3>
                    <p class="text-white/80 leading-relaxed font-light">
                        {$_('about.card2Desc')}
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
