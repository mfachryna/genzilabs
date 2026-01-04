<script lang="ts">
    import { onMount } from 'svelte';

    let sectionRef: HTMLElement;

    const items = [
        {
            title: "Produk Sendiri",
            desc: "Ide gila kita yang akhirnya kita jadiin bisnis beneran. Dari nol, kita urusin sampe jadi dan cuan.",
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" class="text-brand-neon" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>`
        },
        {
            title: "Bantu Temen",
            desc: "Buat lo yang punya ide tapi bingung cara bikinnya. Sini kita bantuin, kita bangun bareng-bareng.",
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" class="text-brand-neon" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`
        },
        {
            title: "Laboratorium Iseng",
            desc: "Tempat kita main-main eksperimen. Ga semua berhasil sih, tapi seru buat belajar dan kadang nemu berlian.",
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" class="text-brand-neon" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2h4"/><path d="M12 14v-4"/><path d="M4 13a6 6 0 0 1 3-5.94"/><path d="M20 13a6 6 0 0 0-3-5.94"/><path d="M12 14a4 4 0 1 0-7.25-2.25"/><path d="M12 14a4 4 0 1 1 7.25-2.25"/></svg>`
        }
    ];

    onMount(async () => {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);
        
        const ctx = gsap.context(() => {
            gsap.to('.build-item', {
                scrollTrigger: {
                    trigger: sectionRef,
                    start: 'top 80%',
                },
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    });
</script>

<section class="py-32 bg-dark-bg relative overflow-hidden" bind:this={sectionRef}>
    <div class="container space-y-20">
        <!-- Header -->
        <div class="text-center space-y-6 max-w-3xl mx-auto">
            <span class="text-brand-neon font-mono text-sm uppercase tracking-widest mb-2 block">APA YANG KITA BIKIN</span>
            <h2 class="text-4xl md:text-6xl font-bold leading-tight text-white">
                Produk Digital yang Ngga Cuma Keren, Tapi punya IMPACT!
            </h2>
        </div>

        <!-- Grid -->
        <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
            {#each items as item, i}
                <div class="build-item opacity-0 translate-y-10 group p-8 bg-dark-card border border-white/5 hover:border-brand-neon/50 transition-all duration-500 relative overflow-hidden">
                    <!-- Number Watermark -->
                    <div class="absolute -right-4 -top-6 text-[120px] font-bold text-white/2 font-mono select-none group-hover:text-brand-neon/5 transition-colors duration-500">
                        0{i + 1}
                    </div>

                    <div class="relative z-10 h-full flex flex-col">
                        <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-brand-neon transition-colors duration-300">
                            {item.title}
                        </h3>
                        <p class="text-white/60 leading-relaxed font-light">
                            {item.desc}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
