<script lang="ts">
    import { onMount } from 'svelte';
    import Button from '$lib/components/ui/Button.svelte';
    import gsap from 'gsap';
    
    let heroRef: HTMLElement;
    let titleRef: HTMLElement;
    let subRef: HTMLElement;
    let buttonRef: HTMLElement;
    let blob1Ref: HTMLElement;
    let blob2Ref: HTMLElement;

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
        }, "-=0.6");

        // Pulsing background animation
        gsap.to(blob1Ref, {
            scale: 1.2,
            opacity: 0.5,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        gsap.to(blob2Ref, {
            scale: 1.2,
            opacity: 0.3,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1
        });
    });
</script>

<section class="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden" bind:this={heroRef}>
    <!-- Background Glow -->
    <div bind:this={blob1Ref} class="absolute top-0 right-0 w-200 h-200 bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-30"></div>
    <div bind:this={blob2Ref} class="absolute bottom-0 left-0 w-150 h-150 bg-brand-purple/20 rounded-full blur-[100px] pointer-events-none opacity-20"></div>

    <div class="container items-center">
        <!-- Left Content -->
        <div class="space-y-10 z-10">
            <div class="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm text-brand-neon text-xs font-mono uppercase tracking-widest shadow-lg">
                <span class="w-2 h-2 rounded-full bg-brand-neon animate-pulse shadow-[0_0_10px_#D9FF00]"></span>
                Digital Product Team
            </div>
            
            <div bind:this={titleRef} class="space-y-0">
                <div class="overflow-hidden">
                    <h1 class="line text-6xl md:text-8xl font-black leading-[0.85] tracking-[-0.04em] text-white uppercase">
                        Nggak Cuma Mimpi.
                    </h1>
                </div>
                <div class="overflow-hidden">
                    <h1 class="line text-6xl md:text-8xl font-black leading-[0.85] tracking-[-0.04em] bg-linear-to-r from-brand-neon to-brand-purple bg-clip-text text-transparent uppercase pr-4 pb-2">
                        Kami Bangun <br> Solusi Digital
                    </h1>
                </div>
                
                <div class="overflow-hidden">
                    <h1 class="line text-6xl md:text-8xl font-black leading-[0.85] tracking-[-0.04em] text-white uppercase">
                        dari Masalah Nyata.
                    </h1>
                </div>
            </div>


            <p bind:this={subRef} class="text-xl text-white/60 max-w-lg leading-relaxed font-light">
                Kita berangkat dari keresahan sehari-hari, terus kita sulap jadi produk digital yang beneran dipake, diuji, dan jadi bisnis yang sustainable. Bukan cuma project iseng.
            </p>

            <div bind:this={buttonRef} class="flex flex-wrap gap-5">
                <Button variant="primary" size="lg" class="text-lg font-bold px-10">Curhat Masalah Lo</Button>
                <Button href="/products" variant="outline" size="lg" class="text-lg px-8 border-current hover:bg-white hover:text-black hover:border-transparent">
                    Liat Produk Kita
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 w-5 h-5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </Button>
            </div>
        </div>

    </div>
</section>



