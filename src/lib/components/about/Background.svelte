<script lang="ts">
    import { onMount } from 'svelte';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
    import { slide } from 'svelte/transition';

    gsap.registerPlugin(ScrollTrigger);

    let sectionRef: HTMLElement;
    let isExpanded = false;

    function toggleExpand() {
        isExpanded = !isExpanded;
    }

    onMount(() => {
        const ctx = gsap.context(() => {
            gsap.from('.bg-content', {
                scrollTrigger: {
                    trigger: sectionRef,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    });
</script>

<section class="py-20 md:py-32 relative overflow-hidden" bind:this={sectionRef}>
    <!-- Decoration -->
    <div class="absolute top-0 right-0 w-125 h-125 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

    <div class="container grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        <!-- Visual/Decoration Left -->
        <div class="md:col-span-5 relative md:sticky md:top-24">
            <div class="aspect-square bg-linear-to-br from-brand-purple/20 to-brand-neon/20 border-2 border-white/10 p-8 relative overflow-hidden group hover:border-brand-neon hover:shadow-[8px_8px_0px_#D9FF00] transition-all duration-300">
                <div class="absolute inset-0 bg-grid-white/[0.05] mask-[linear-gradient(to_bottom,transparent,black)]"></div>
                <div class="h-full flex flex-col justify-between relative z-10">
                    <div>
                        <div class="text-6xl font-black text-white mb-2">2025</div>
                        <div class="text-white/60 font-mono text-sm uppercase tracking-widest">Team Ini Kebentuk</div>
                    </div>
                    
                    <div class="text-white/40 text-xs font-mono border-t border-white/10 pt-4 mt-auto text-center">
                        Bukan Space Kosong Buat Iklan. Space Ini Dekorasi Aja Soalnya Bingung Mau Diisi Apa.
                    </div>
                </div>
            </div>
        </div>

        <!-- Text Content Right -->
        <div class="md:col-span-7 bg-content space-y-8">
            <div>
                <span class="text-brand-neon font-mono text-sm uppercase tracking-widest font-bold mb-4 block">Alkisah Kita</span>
                <h2 class="text-4xl md:text-5xl font-black leading-tight">
                    Berawal dari Keresahan, <br>
                    Bergerak Sesuai <span class="text-transparent bg-clip-text bg-linear-to-r from-brand-neon to-brand-purple">Kata Hati.</span>
                </h2>
            </div>
            
            <div class="space-y-6 text-lg text-white/70 font-medium leading-relaxed">
                <p>
                    Jadi alkisahnya tuh gini kakak-kakak semuah. Dulu pas jaman kuliah, kita tu sering banget ngide bareng buat bikin usaha sendiri biar bisa nambah duit jajan, sekalian ngasah skill plus nambah pengalaman hidup. Awalnya tuh yang jalan service gadget, terus nyambi ambil proyek web sama design yang ditawarin orang. Bisa dibilang job mahasiswa IT pada umumnya lah ya. Hasilnya? Lumayan lah bakal ngopi, nongkrong, ama kita dapet rasa kek "wah, gue bisa hasilkan duit sendiri!"
                </p>

                {#if isExpanded}
                    <div transition:slide={{ duration: 300 }}>
                        <p class="mb-6">
                            Nah pas uda mau deket ama lulus, kita sempet kepincut buat mimpi kerja di startup gitu. Tau sendiri benefitnya kan wah banget tuh kek dari gaji yang oke banget, culture keren, stock option, dll. Beberapa uda coba buat apply, tapi berujung nice try aja dan kayaknya belum rejeki juga. Dari situ muncul tuh ide "Gimana kalo kita bikin startup sendiri aja?" Awalnya excited banget, banyak ide kurang lebih kek gini "produk kita harus bisa ini itu, kalo jadi yakin deh bisa meledak". Tapi kita ketampar realita ujungnya dan sadar diri, pengalaman bisnis kita waktu itu masih ngga ada sama sekali. Akhirnya mimpi itu sempet tenggelam dulu, kita milih kerja sesuai passion biar bisa ngumpulin pengalaman dan stabilitas.
                        </p>
                        <p class="mb-6">
                            Waktu berlalu, "Dewasa Ini" mulai kerasa banget nih. Harapan-harapan dulu waktu muda yang keliatannya indah mulai mulai realitanya kek gimana. banyak hal yang bikin kita mikir lagi kek takut banget duit bulanan abis sebelum gajian, takut nggak bisa beli rumah karena harga properti gila-gilaan, takut nggak punya tabungan buat nikah(optional si ini sebenernya, mending keliling dunia ngga si?) atau bantu orang tua, takut kena PHK tiba-tiba kaya gelombang yang sering kejadian belakangan ini. Apalagi di era Gen Z dewasa ini, kita tuh dihantui ama banyak hal yak, kek anxiety soal job security, side hustle yang nggak kunjung cuan, inflasi yang bikin harga kopi aja naik terus, sampe burnout karena kerja 24/7. Kondisi negara juga nambah beban pikiran ntah kebijakan pemerintah yang kadang bikin bingung, pajak baru yang numpuk, sampe isu ekonomi yang naik-turun bikin susah prediksi masa depan.
                        </p>
                        <p class="mb-6">
                            Tapi justru berkat adanya pikiran itu, ide lama yang pernah tenggelam sebelumnya muncul lagi. Sekarang kita udah punya pengalaman kerja yang lebih mateng, skill yang terasah, plus beberapa faktor pendukung lain yang pas waktunya kek ngasi tau "saatnya test ilmu kita ngga si?". Akhirnya, Genzi Meraih Mimpi pun lahir!
                        </p>
                        <p>
                            TBH kita pengen nambah pendapatan dan hidup lebih nyaman. TAPI lebih dari itu, ada rasa "apa sih yang bisa kita lakuin buat masyarakat?" ditengah kondisi negara kita yang kek gini. Kita resah waktu liat ide keren anak muda di Indonesia ini cuma lewat obrolan ditongkrongan doang. Kita yakin, potensi Gen Z itu gede banget kalo disalurin bener, bisa meledak!
                        </p>
                    </div>
                {/if}

                <button 
                    on:click={() => isExpanded = !isExpanded}
                    class="text-brand-neon font-bold uppercase tracking-wider text-sm hover:underline underline-offset-4 decoration-brand-neon decoration-2 transition-all flex items-center gap-2"
                >
                    {isExpanded ? 'Lebih Dikit Aja' : 'Baca Selengkapnya'}
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="w-4 h-4 transition-transform duration-300 {isExpanded ? 'rotate-180' : ''}" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        stroke-width="2"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</section>
