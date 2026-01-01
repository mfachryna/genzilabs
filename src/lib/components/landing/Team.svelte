<script>
    import { onMount } from 'svelte';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);
    
    // Team section
    const team = [
        { name: "Andi Pratama", role: "Tech Lead", img: "bg-neutral-800" },
        { name: "Siti Rahayu", role: "Product Manager", img: "bg-neutral-700" },
        { name: "Budi Santoso", role: "UI/UX Designer", img: "bg-neutral-600" },
        { name: "Dian Sastro", role: "Marketing", img: "bg-neutral-500" },
    ];

    let sectionRef;

    onMount(() => {
        const ctx = gsap.context(() => {
             gsap.from('.team-member', {
                scrollTrigger: {
                    trigger: sectionRef,
                    start: 'top 70%',
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    });
</script>

<section class="py-32 bg-dark-bg border-b border-white/5" id="team" bind:this={sectionRef}>
    <div class="container">
        <div class="mb-20">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">Tim di Balik Layar</h2>
            <p class="text-white/50 text-lg">The dreamers and doers behind the magic.</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            {#each team as member}
                <div class="team-member group">
                    <!-- Arched Image Frame -->
                    <div class="aspect-[3/4] rounded-t-[100px] rounded-b-none {member.img} mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                         <!-- Placeholder content -->
                        <div class="absolute inset-0 flex items-center justify-center opacity-30 text-4xl">
                            👤
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-bold group-hover:text-brand-neon transition-colors">{member.name}</h3>
                        <p class="text-sm text-brand-purple">{member.role}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
