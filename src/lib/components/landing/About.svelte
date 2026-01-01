<script>
    import { onMount } from 'svelte';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
    
    gsap.registerPlugin(ScrollTrigger);
    
    let sectionRef;
    
    onMount(() => {
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
                Ngebangun Masa Depan <br>
                <span class="text-white/30">Digital Bareng</span>
            </h2>
        </div>

        <!-- Content Grid -->
        <div class="grid md:grid-cols-12 gap-6 lg:gap-8 h-auto md:h-[600px]">
            <!-- Large Image Area -->
            <div class="md:col-span-8 relative rounded-[2rem] overflow-hidden group bg-dark-card border border-white/5 anim-scale">
                 <!-- Placeholder for Image -->
                 <div class="absolute inset-0 bg-neutral-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-1000">
                    <div class="w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-700 to-black"></div>
                </div>
                
                <div class="absolute bottom-0 left-0 p-10 w-full bg-gradient-to-t from-black via-black/50 to-transparent">
                    <h3 class="text-3xl font-bold mb-3">Kolaborasi Tanpa Batas</h3>
                    <p class="text-white/60 text-lg">Where technology meets creativity.</p>
                </div>
            </div>

            <!-- Side Cards -->
            <div class="md:col-span-4 flex flex-col gap-6">
                <!-- Card 1 -->
                <div class="flex-1 rounded-[2rem] bg-dark-card border border-white/5 p-10 hover:bg-white/5 transition-colors group anim-fade-up">
                    <div class="text-brand-neon mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20"></path></svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">Dari Ide Kecil Jadi Solusi Nyata</h3>
                    <p class="text-white/50 leading-relaxed font-light">
                        Every big thing starts small. We nurture your ideas.
                    </p>
                </div>

                <!-- Card 2 (Purple) -->
                <div class="flex-1 rounded-[2rem] bg-brand-purple p-10 text-white relative overflow-hidden group anim-fade-up">
                     <div class="absolute -right-8 -bottom-8 opacity-20 text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                     </div>
                    <h3 class="text-2xl font-bold mb-3">Filosofi Kami</h3>
                    <p class="text-white/80 leading-relaxed font-light">
                        Learn, Create, and Share. Innovation is our DNA.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

