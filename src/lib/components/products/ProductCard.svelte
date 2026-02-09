<script lang="ts">
    import { _ } from 'svelte-i18n';
    import { cn } from '$lib/utils';
    import Button from '$lib/components/ui/Button.svelte';
    import type { Product } from '$lib/data/products';

    let { product, class: className = '' }: { product: Product; class?: string } = $props();
</script>

<div class={cn(
    "group bg-dark-card border-2 border-white/10 p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:translate-x-1 hover:border-brand-neon hover:shadow-[8px_8px_0px_#9D00FF]",
    className
)}>
    <div class="mb-6">
        <!-- Logo Container -->
        <div class="w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-neon/10 transition-colors duration-300 overflow-hidden p-2">
            <img 
                src={product.logoPath} 
                alt={$_(product.titleKey)} 
                class="w-full h-full object-contain"
            />
        </div>
        
        <!-- Title -->
        <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-brand-neon transition-colors">
            {$_(product.titleKey)}
        </h3>
        
        <!-- Description -->
        <p class="text-white/60 leading-relaxed font-light">
            {$_(product.descKey)}
        </p>

        <!-- Status Badge -->
        {#if product.status === 'coming-soon'}
            <span class="inline-block mt-4 px-3 py-1 text-xs font-mono uppercase tracking-wider bg-brand-purple/20 text-brand-neon border border-brand-purple/30 rounded-sm">
                {$_('productsPage.comingSoon') ?? 'Coming Soon'}
            </span>
        {/if}
    </div>
    
    <div class="mt-auto">
        <Button 
            href={product.link} 
            class="w-full"
            target="_blank"
            rel="noopener noreferrer"
        >
            {$_('productsPage.viewProduct')}
        </Button>
    </div>
</div>
