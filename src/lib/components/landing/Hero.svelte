<script>
    import { onMount } from 'svelte';
    import Button from '$lib/components/ui/Button.svelte';
    import gsap from 'gsap';
    
    let heroRef;
    let titleRef;
    let subRef;
    let buttonRef;
    let imageRef;

    onMount(() => {
        const tl = gsap.timeline();

        tl.from(titleRef.querySelectorAll('.line'), {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power4.out',
            delay: 0.2
        })
        .from(subRef, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, "-=0.5")
        .from(buttonRef, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, "-=0.6")
        .from(imageRef, {
            x: 50,
            opacity: 0,
            duration: 1.2,
            ease: 'expo.out'
        }, "-=0.8");
    });
</script>

<section class="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden" bind:this={heroRef}>
    <!-- Background Glow -->
    <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
    <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-neon/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-10 z-10">
            <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-brand-neon text-xs font-mono uppercase tracking-widest shadow-lg">
                <span class="w-2 h-2 rounded-full bg-brand-neon animate-pulse shadow-[0_0_10px_#D9FF00]"></span>
                Creative Digital Agency
            </div>
            
            <div bind:this={titleRef} class="space-y-0">
                <div class="overflow-hidden">
                    <h1 class="line text-6xl md:text-8xl font-[900] leading-[0.85] tracking-[-0.04em] text-white uppercase">
                        Nggak Cuma
                    </h1>
                </div>
                <div class="overflow-hidden">
                    <h1 class="line text-6xl md:text-8xl font-[900] leading-[0.85] tracking-[-0.04em] text-brand-neon drop-shadow-[0_0_15px_rgba(217,255,0,0.5)] uppercase">
                        Mimpi.
                    </h1>
                </div>
                <div class="overflow-hidden">
                    <h1 class="line text-6xl md:text-8xl font-[900] leading-[0.85] tracking-[-0.04em] text-white uppercase">
                        Kita Bikin
                    </h1>
                </div>
                <div class="overflow-hidden">
                    <h1 class="line text-6xl md:text-8xl font-[900] leading-[0.85] tracking-[-0.04em] text-white uppercase">
                        Nyata.
                    </h1>
                </div>
            </div>


            <p bind:this={subRef} class="text-xl text-white/60 max-w-lg leading-relaxed font-light">
                Genzi transforms abstract ideas into high-impact digital realities. We don't just dream; we engineer the future of your brand.
            </p>

            <div bind:this={buttonRef} class="flex flex-wrap gap-5">
                <Button variant="primary" size="lg" class="text-lg font-bold px-10">Start Project</Button>
                <Button variant="outline" size="lg" class="text-lg px-8 border-current hover:bg-white hover:text-black hover:border-transparent">Explore Work</Button>
            </div>
        </div>

        <!-- Right Visual -->
        <div bind:this={imageRef} class="relative z-10 lg:h-[700px] flex items-center justify-center lg:justify-end perspective-[1000px]">
             <!-- Tilted Container -->
             <div class="relative w-full max-w-md md:max-w-lg aspect-[4/5] transform rotate-[-2deg] transition-transform duration-500 hover:rotate-0">
                
                <!-- Main Image Frame -->
                <div class="absolute inset-0 bg-neutral-900 border-[1px] border-white/10 overflow-hidden shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-700 ease-out">
                     <!-- Placeholder for Image - Using a gradient or actual image would be better -->
                     <!-- Emulating the BW portrait vibe -->
                     <div class="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-600 via-neutral-900 to-black opacity-80 mix-blend-overlay"></div>
                     <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
                </div>

                <!-- Back Frame (The offset border) -->
                <div class="absolute inset-0 border-[1px] border-white/5 z-0 translate-x-4 translate-y-4 rounded-sm"></div>
                <div class="absolute inset-0 border-[1px] border-brand-purple/20 z-0 -translate-x-3 -translate-y-3 rounded-sm"></div>

                <!-- Floating Badge -->
                <div class="absolute bottom-[-10px] left-[-20px] z-20 bg-dark-bg border border-brand-purple p-5 shadow-[0_10px_40px_rgba(0,0,0,0.8)] min-w-[240px]">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="w-2 h-2 rounded-full bg-brand-neon animate-pulse"></span>
                        <div class="text-brand-neon text-[10px] font-bold uppercase tracking-widest">Status: Online</div>
                    </div>
                    <div class="text-white text-lg font-bold leading-none mb-1">Creativity Level:</div>
                    <div class="text-white text-4xl font-black tracking-tighter">100%</div>
                </div>
             </div>
        </div>
    </div>
</section>



