<script lang="ts">
    import { _ } from 'svelte-i18n';
    import Navbar from '$lib/components/landing/Navbar.svelte';
    import Footer from '$lib/components/landing/Footer.svelte';
    import Button from '$lib/components/ui/Button.svelte';
    import ProductCard from '$lib/components/products/ProductCard.svelte';
    import { products } from '$lib/data/products';
</script>

<div class="min-h-screen bg-dark-bg text-white font-sans selection:bg-brand-neon selection:text-black flex flex-col">
    <Navbar />

    <main class="grow pt-32 pb-20 container mx-auto px-4 flex flex-col">
        {#if products.length > 0}
            <div class="text-center mb-16 space-y-4">
                <span class="text-brand-neon font-mono text-sm uppercase tracking-widest font-bold">{$_('productsPage.label')}</span>
                <h1 class="text-4xl md:text-5xl font-bold tracking-tight">{$_('productsPage.headline')}</h1>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each products as product}
                    <ProductCard {product} />
                {/each}
            </div>

            <!-- More Coming Section -->
            <div class="mt-24 flex justify-center">
                <div class="relative group max-w-lg w-full text-center p-10 bg-dark-card border-2 border-white/10 hover:border-brand-neon/50 transition-all duration-500">
                    <!-- Decorative corner accent -->
                    <div class="absolute -top-3 -right-3 w-6 h-6 bg-brand-neon"></div>
                    
                    <!-- Animated pulse background -->
                    <div class="absolute inset-0 bg-brand-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <!-- Content -->
                    <div class="relative z-10 space-y-4">
                        <!-- Sparkle Icon -->
                        <div class="inline-flex items-center justify-center w-14 h-14 bg-white/5 rounded-full mb-2 group-hover:bg-brand-neon/10 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-brand-neon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                            </svg>
                        </div>
                        
                        <h2 class="text-2xl md:text-3xl font-bold text-white group-hover:text-brand-neon transition-colors duration-300">
                            {$_('products.moreComingTitle')}
                        </h2>
                        <p class="text-white/60 text-lg font-light leading-relaxed">
                            {$_('products.moreComingDesc')}
                        </p>
                    </div>
                </div>
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
                        {$_('productsPage.comingSoonTitle')}
                    </h1>
                    
                    <p class="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto">
                        {$_('productsPage.comingSoonDesc')}
                    </p>
                </div>

                <div class="pt-8">
                    <Button href="/" variant="primary" class="min-w-50">
                        {$_('productsPage.backHome')}
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
