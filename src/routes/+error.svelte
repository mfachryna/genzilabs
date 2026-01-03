<script>
    import { page } from '$app/stores';
    import Button from '$lib/components/ui/Button.svelte';
</script>

<div class="min-h-screen bg-dark-bg text-white font-sans selection:bg-brand-neon selection:text-black flex flex-col">

    <main class="grow flex items-center justify-center relative overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-neon/5 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none animate-pulse delay-75"></div>

        <div class="container text-center relative z-10 space-y-8">
            <!-- Glitch Text Wrapper -->
            <div class="relative inline-block" style="font-size: 20vw; line-height: 1;">
                <h1 class="font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-brand-neon to-brand-purple glitch-text whitespace-nowrap" data-text="404">
                    404
                </h1>
                
                <!-- Glitch Layers -->
                <span class="absolute top-0 left-0 -z-10 w-full h-full font-black tracking-tighter text-brand-neon opacity-50 animate-glitch-1 whitespace-nowrap">404</span>
                <span class="absolute top-0 left-0 -z-10 w-full h-full font-black tracking-tighter text-brand-purple opacity-50 animate-glitch-2 whitespace-nowrap">404</span>
            </div>

            <div class="space-y-4 max-w-2xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold">
                    halaman yang lo tuju not found nih
                </h2>
                <p class="text-white/60 text-lg font-light leading-relaxed">
                    Lo mungkin kesasar, ato linknya lagi cuti. But dont worry, jalan pulang selalu ada kok.
                </p>
            </div>

            <div class="pt-8">
                <Button href="/" variant="primary" size="lg">
                    Kembali ke jalan yang lurus
                </Button>
            </div>
        </div>
    </main>
</div>

<style>
    .glitch-text {
        position: relative;
    }

    @keyframes glitch-1 {
        0% { clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); transform: translate(0); }
        20% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); transform: translate(-2px, 2px); }
        40% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); transform: translate(-2px, -2px); }
        60% { clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%); transform: translate(2px, 2px); }
        80% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); transform: translate(2px, -2px); }
        100% { clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); transform: translate(0); }
    }

    @keyframes glitch-2 {
        0% { clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%); transform: translate(0); }
        20% { clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%); transform: translate(2px, -2px); }
        40% { clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%); transform: translate(-2px, 2px); }
        60% { clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%); transform: translate(2px, 2px); }
        80% { clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%); transform: translate(-2px, -2px); }
        100% { clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%); transform: translate(0); }
    }

    .animate-glitch-1 {
        animation: glitch-1 2.5s infinite linear alternate-reverse;
    }

    .animate-glitch-2 {
        animation: glitch-2 3s infinite linear alternate-reverse;
    }
</style>
