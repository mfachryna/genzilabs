<script>
    import Button from '$lib/components/ui/Button.svelte';
    import { page } from '$app/stores';

    const links = [
        { href: '#philosophy', label: 'Philosophy' },
        { href: '#services', label: 'Services' },
        { href: '#team', label: 'Team' },
    ];
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-lg border-b border-white/5">
    <div class="container mx-auto flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-2 group">
            <div class="w-8 h-8 bg-brand-neon rounded flex items-center justify-center text-black font-bold text-xl group-hover:rotate-12 transition-transform">
                ⚡
            </div>
            <span class="font-bold text-xl tracking-tight">Genzi Meraih Mimpi</span>
        </a>

        <!-- Desktop Links -->
        <div class="hidden md:flex items-center gap-8">
            {#each links as link}
                <a href={link.href} class="text-sm font-medium text-white/70 hover:text-brand-neon transition-colors">
                    {link.label}
                </a>
            {/each}
        </div>

        <!-- CTA -->
        <div class="flex items-center gap-4">
            <Button variant="primary" size="sm" class="hidden sm:inline-flex">
                Let's Collaborate
            </Button>
            
            <!-- Mobile Menu Toggle (Visual Only for MVP) -->
            <button class="md:hidden text-white p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
        </div>
    </div>
</nav>
