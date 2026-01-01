<script>
    import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="py-32 bg-brand-neon text-black">
    <div class="container text-center mb-16">
        <h2 class="text-5xl font-extrabold mb-4">Lagi Matangin Ide?</h2>
        <p class="text-lg max-w-2xl mx-auto opacity-80 font-medium">
            Yuk, obrolin bareng! Kita bantu validasi dan eksekusi ide liarmu jadi produk digital yang keren.
        </p>
    </div>

    <div class="container grid md:grid-cols-2 gap-8 max-w-5xl">
        <!-- Card 1 -->
        <div class="bg-white p-10 rounded-3xl shadow-xl flex flex-col items-start text-left relative overflow-hidden group hover:scale-[1.02] transition-transform">
             <div class="absolute top-6 right-6 text-3xl">📍</div>
            <h3 class="text-2xl font-bold mb-4">Punya Ide?</h3>
            <p class="text-gray-600 mb-8 leading-relaxed">
                Udah punya konsep kasar? Mantap! Langsung gas diskusikan detailnya biar makin tajem.
            </p>
            <Button variant="outline" class="mt-auto !border-black !text-black hover:!bg-black hover:!text-white w-full md:w-auto">
                Gas Diskusi
            </Button>
        </div>

        <!-- Card 2 -->
        <div class="bg-white p-10 rounded-3xl shadow-xl flex flex-col items-start text-left relative overflow-hidden group hover:scale-[1.02] transition-transform">
            <div class="absolute top-6 right-6 text-3xl opacity-50">👤</div>
            <h3 class="text-2xl font-bold mb-4">Belum Ada Ide?</h3>
            <p class="text-gray-600 mb-8 leading-relaxed">
                Bingung mulai dari mana? Santai, kita brainstorming bareng cari solusi yang pas buat bisnismu.
            </p>
             <!-- Mock Form -->
             <div class="w-full mt-auto flex gap-2">
                <input type="email" placeholder="Email kamu..." class="flex-1 bg-gray-100 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-black">
                <button class="bg-black text-white px-6 py-3 rounded-lg font-bold text-sm hover:opacity-80">Pasti!</button>
             </div>
        </div>
    </div>
</section>
