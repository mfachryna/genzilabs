<script>
    export let text;
    export let speed = 20;
    export let reverse = false;
    export let theme = "neon"; // neon, dark, light
    
    $: themeClass = theme === 'neon' ? 'bg-brand-neon text-black border-black' : 
                   theme === 'dark' ? 'bg-black text-white border-white/20' :
                   'bg-white text-black border-black';
    
    $: direction = reverse ? 'reverse' : 'normal';
</script>

<div class="{themeClass} py-3 overflow-hidden whitespace-nowrap border-y-2 select-none">
    <div class="inline-flex animate-marquee" style="animation-duration: {speed}s; animation-direction: {direction}">
        {#each Array(10) as _, i}
            <span class="font-bold uppercase tracking-widest text-sm mx-4 flex items-center gap-4">
                {@html text} <span class="w-1.5 h-1.5 bg-current rounded-full opacity-50"></span>
            </span>
        {/each}
    </div>
</div>

<style>
    .animate-marquee {
        animation: marquee 20s linear infinite;
    }
    @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }
</style>
