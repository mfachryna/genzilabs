<script>
    // Simple pure CSS marquee
</script>

<div class="bg-brand-neon py-3 overflow-hidden whitespace-nowrap border-y-2 border-black">
    <div class="inline-flex animate-marquee">
        {#each Array(10) as _, i}
            <span class="text-black font-bold uppercase tracking-widest text-sm mx-4 flex items-center gap-4">
                Creative • Future • Innovation • Digital <span class="w-2 h-2 bg-black rounded-full"></span>
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
