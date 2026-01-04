<script lang="ts">
    import Button from '$lib/components/ui/Button.svelte';
    import { page } from '$app/stores';
    import { _, locale, locales } from 'svelte-i18n';

    let isMobileMenuOpen = $state(false);
    
    function toggleLocale() {
        locale.set($locale === 'id' ? 'en' : 'id');
    }

    const links = $derived([
        { href: '/about', label: $_('nav.about') },
        { href: '/products', label: $_('nav.products') },
        { href: '/contact', label: $_('nav.contact') },
    ]);
</script>

<div class="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
    <nav class="bg-dark-card/80 backdrop-blur-md border border-white/10 px-2 py-2 pl-6 flex items-center justify-between w-full max-w-4xl relative">
        
        <!-- Logo -->
        <a href="/" class="flex items-center gap-3 group mr-8">
            <div class="text-brand-neon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="none"/>
                </svg>
            </div>
            <span class="font-bold text-lg tracking-tight text-white group-hover:text-brand-neon transition-colors">Genzi Meraih Mimpi</span>
        </a>

        <!-- Desktop Links -->
        <div class="hidden md:flex items-center gap-8 mx-auto">
            {#each links as link}
                <a href={link.href} class="text-[11px] font-bold tracking-widest text-white/60 hover:text-brand-neon transition-colors uppercase">
                    {link.label}
                </a>
            {/each}
        </div>

        <!-- Language Switcher & CTA & Mobile Toggle -->
        <div class="flex items-center gap-2 pl-8">
            <!-- Language Toggle -->
            <button 
                onclick={toggleLocale}
                class="px-3 py-2 text-xs font-bold border border-white/20 text-white/70 hover:text-brand-neon hover:border-brand-neon transition-all uppercase tracking-wider"
            >
                {$locale === 'id' ? 'EN' : 'ID'}
            </button>
            
            <a href="/contact" class="hidden sm:inline-flex bg-brand-neon text-black font-bold text-xs px-6 py-3 hover:bg-white hover:scale-105 transition-all duration-300">
                {$_('nav.cta')}
            </a>

            <!-- Mobile Menu Toggle -->
            <button 
                class="md:hidden p-2 text-white/70 hover:text-white"
                onclick={() => isMobileMenuOpen = !isMobileMenuOpen}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    {#if isMobileMenuOpen}
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    {:else}
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    {/if}
                </svg>
            </button>
        </div>

        <!-- Mobile Menu Dropdown -->
        {#if isMobileMenuOpen}
            <div class="absolute top-full left-0 right-0 mt-2 bg-dark-card border border-white/10 p-4 flex flex-col gap-2 md:hidden overflow-hidden">
                {#each links as link}
                    <a 
                        href={link.href} 
                        class="px-4 py-3 rounded-lg hover:bg-white/5 text-sm font-bold text-white/80 hover:text-brand-neon transition-colors"
                        onclick={() => isMobileMenuOpen = false}
                    >
                        {link.label}
                    </a>
                {/each}
                <div class="h-px bg-white/10 my-1"></div>
                
                <!-- Mobile Language Toggle -->
                <button 
                    onclick={() => { toggleLocale(); isMobileMenuOpen = false; }}
                    class="px-4 py-3 rounded-lg hover:bg-white/5 text-sm font-bold text-white/80 hover:text-brand-neon transition-colors text-left"
                >
                    🌐 {$locale === 'id' ? 'Switch to English' : 'Ganti ke Indonesia'}
                </button>
                
                <a 
                    href="/contact" 
                    class="w-full text-center bg-brand-neon text-black font-bold text-sm px-6 py-3 hover:bg-white transition-all"
                    onclick={() => isMobileMenuOpen = false}
                >
                    {$_('nav.cta')}
                </a>
            </div>
        {/if}
    </nav>
</div>
