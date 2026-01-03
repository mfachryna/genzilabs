<script lang="ts">
    import Navbar from '$lib/components/landing/Navbar.svelte';
    import Footer from '$lib/components/landing/Footer.svelte';
    import Button from '$lib/components/ui/Button.svelte';

    // Mock data - Uncomment to test the card interaction/layout
    // const products = [
    //     { title: "Genzi Starter", desc: "Template SvelteKit production-ready dengan style Neo-Brutalist.", link: "#" },
    //     { title: "Neon UI", desc: "Library komponen UI yang bold dan playful untuk developer kreatif.", link: "#" }
    // ];
    
    interface Product {
        title: string;
        desc: string;
        link: string;
    }

    let products: Product[] = [];
</script>

<div class="min-h-screen bg-dark-bg text-white font-sans selection:bg-brand-neon selection:text-black flex flex-col">
    <Navbar />

    <main class="grow pt-32 pb-20 container mx-auto px-4 flex flex-col">
        {#if products.length > 0}
            <div class="text-center mb-16 space-y-4">
                <span class="text-brand-neon font-mono text-sm uppercase tracking-widest font-bold">PRODUK KAMI</span>
                <h1 class="text-4xl md:text-5xl font-bold tracking-tight">Karya Digital <br> Berdampak Nyata</h1>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each products as product}
                    <div class="group bg-dark-card border-2 border-white/10 p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:translate-x-1 hover:border-brand-neon hover:shadow-[8px_8px_0px_#9D00FF]">
                        <div class="mb-6">
                            <div class="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-neon group-hover:text-black transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                            </div>
                            <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-brand-neon transition-colors">{product.title}</h3>
                            <p class="text-white/60 leading-relaxed font-light">{product.desc}</p>
                        </div>
                        <div class="mt-auto">
                            <Button href={product.link} class="w-full">
                                Lihat Produk
                            </Button>
                        </div>
                    </div>
                {/each}
            </div>
        {:else}
            <div class="grow flex flex-col items-center justify-center min-h-[50vh] text-center space-y-8 animate-fade-in py-20">
                <div class="relative group">
                    <div class="absolute -inset-8 bg-brand-neon/10 rounded-full blur-2xl group-hover:bg-brand-neon/20 transition-all duration-500 animate-pulse"></div>
                    <!-- Construction Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-32 h-32 text-white/20 group-hover:text-brand-neon transition-colors duration-500 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="12" y1="18" x2="12" y2="12"></line>
                        <line x1="9" y1="15" x2="15" y2="15"></line>
                    </svg>
                </div>
                
                <div class="space-y-4 max-w-2xl mx-auto">
                    <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Lagi <span class="text-brand-neon inline-block hover:scale-105 transition-transform cursor-default">Masak</span> App Nih!
                    </h1>
                    
                    <p class="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto">
                        Punten banget nih kakak-kakak semuah, kita lagi nyiapin app pertama kita yang cocok ama kalian ntar. Kindly wait ya kakak-kakak semuah!
                    </p>
                </div>

                <div class="pt-8">
                    <Button href="/" variant="primary" class="min-w-50">
                        Balik ke Home
                    </Button>
                </div>
            </div>
        {/if}
    </main>

    <Footer />
</div>

<style>
    @keyframes fade-in {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
        animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
</style>
