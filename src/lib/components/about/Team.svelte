<script lang="ts">
    import { onMount } from 'svelte';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);
    
    // Team section
    const team = [
        { name: "Ananda Wijaya", role: "Product Lead", image: "/images/team/ananda.webp", color: "bg-neutral-800" },
        { name: "Devina Dwi", role: "UI/UX Designer", image: "/images/team/devina.webp", color: "bg-neutral-700" },
        { name: "Muhammad Fachry", role: "Tech Lead", image: "/images/team/fachry.webp", color: "bg-neutral-600" },
        { name: "Shafa Al Afghany", role: "Backend Developer", image: "/images/team/shafa.webp", color: "bg-neutral-500" },
    ];

    let sectionRef: HTMLElement;

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
            <h2 class="text-4xl md:text-5xl font-black mb-4">Kenalan dulu ngga si?</h2>
            <p class="text-white/50 text-lg font-medium">Ini nih manusia-manusia yang (akhirnya ngga wancana doang) ngebikin Genzi Meraih Mimpi berdiri dan jalan.</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            {#each team as member}
                <div class="team-member group">
                    <!-- Frame -->
                    <div class="aspect-4/5 {member.color} mb-6 relative overflow-hidden transition-all duration-300 border-[3px] border-transparent group-hover:border-brand-neon group-hover:shadow-[6px_6px_0px_#D9FF00]">
                         <!-- Image (if available) -->
                        <img 
                            src={member.image} 
                            alt={member.name}
                            class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                            on:error={(e) => (e.currentTarget as HTMLImageElement).style.display = 'none'} 
                        />
                        
                         <!-- Placeholder Fallback (shown if image fails or loading) -->
                        <div class="absolute inset-0 flex items-center justify-center opacity-30 text-white -z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-bold uppercase tracking-wider group-hover:text-brand-neon transition-colors">{member.name}</h3>
                        <p class="text-sm text-brand-purple font-mono">{member.role}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
