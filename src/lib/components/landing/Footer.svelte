<script lang="ts">
    import { _ } from 'svelte-i18n';
    import Button from '$lib/components/ui/Button.svelte';
</script>

<footer class="bg-dark-bg pt-24 pb-12">
    <div class="container grid md:grid-cols-2 gap-16 mb-20">
        <!-- Left: Big CTA -->
        <div class="space-y-8">
            <h2 class="text-5xl md:text-6xl font-bold leading-tight">
                {$_('ideaCta.headline')}
            </h2>
            <p class="text-white/60 text-lg max-w-md">{$_('ideaCta.description')}</p>
            <Button href="/contact" variant="primary" size="lg" class="px-8 gap-2">
                {$_('ideaCta.cta')}
                <svg class="group-hover:translate-x-1 transition-transform" fill="currentColor" height="1em" stroke="currentColor" stroke-width="0" viewBox="0 0 512 512" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M48 448l416-192L48 64v149.333L346 256 48 298.667z"></path></svg>
            </Button>
        </div>

        <!-- Right: Links -->
        <div class="grid grid-cols-2 gap-8 md:pl-20 py-4">
            <div class="space-y-4">
                <h4 class="text-brand-neon font-bold text-sm uppercase tracking-wider">{$_('footer.navigation')}</h4>
                <ul class="space-y-3 text-white/60">
                    <li><a href="/about" class="hover:text-white transition-colors">{$_('nav.about')}</a></li>
                    <li><a href="/products" class="hover:text-white transition-colors">{$_('nav.products')}</a></li>
                    <li><a href="/contact" class="hover:text-white transition-colors">{$_('nav.contact')}</a></li>
                </ul>
            </div>
            <div class="space-y-4">
                 <h4 class="text-brand-neon font-bold text-sm uppercase tracking-wider">{$_('footer.social')}</h4>
                 <div class="flex gap-4">
                    <!-- Instagram -->
                    <a href="https://www.instagram.com/genzilabs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <!-- Twitter / X -->
                    <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <!-- LinkedIn -->
                    <a href="/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                 </div>
            </div>
        </div>
    </div>

    <!-- Bottom -->
    <div class="container border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
        <p>{$_('footer.copyright')}</p>
    </div>
</footer>
