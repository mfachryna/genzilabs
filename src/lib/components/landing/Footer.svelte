<script>
    import Button from '$lib/components/ui/Button.svelte';
</script>

<footer class="bg-dark-bg pt-24 pb-12">
    <div class="container grid md:grid-cols-2 gap-16 mb-20">
        <!-- Left: Big CTA -->
        <div class="space-y-8">
            <h2 class="text-5xl md:text-6xl font-bold leading-tight">
                Yuk, Ikut <br>
                <span class="text-brand-purple">Ngebangun</span> <br>
                Cerita Ini.
            </h2>
            <Button variant="outline" class="rounded-full px-8 border-white/30 hover:border-white">
                Mulai Kolaborasi ->
            </Button>
        </div>

        <!-- Right: Links -->
        <div class="grid grid-cols-2 gap-8 md:pl-20 py-4">
            <div class="space-y-4">
                <h4 class="text-brand-neon font-bold text-sm uppercase tracking-wider">Explore</h4>
                <ul class="space-y-3 text-white/60">
                    <li><a href="#" class="hover:text-white">Work</a></li>
                    <li><a href="#" class="hover:text-white">Services</a></li>
                    <li><a href="#" class="hover:text-white">About</a></li>
                </ul>
            </div>
            <div class="space-y-4">
                 <h4 class="text-brand-neon font-bold text-sm uppercase tracking-wider">Follow</h4>
                 <div class="flex gap-4">
                    {#each ['IG', 'TW', 'LI'] as social}
                        <a href="#" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                            {social}
                        </a>
                    {/each}
                 </div>
            </div>
        </div>
    </div>

    <!-- Bottom -->
    <div class="container border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
        <p>© 2025 Genzi Meraih Mimpi. All rights reserved.</p>
        <div class="flex gap-6 mt-4 md:mt-0">
            <a href="#" class="hover:text-white">Privacy Policy</a>
            <a href="#" class="hover:text-white">Terms of Service</a>
        </div>
    </div>
</footer>
