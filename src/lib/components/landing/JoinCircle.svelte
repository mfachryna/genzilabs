<script>
    import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="py-20 bg-dark-bg text-white relative">
    <div class="container">
        <div class="relative border-2 border-dashed border-brand-neon px-8 py-20 text-center flex flex-col items-center justify-center">
            
            <!-- Floating Rocket Icon -->
            <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark-bg px-4">
                 <svg class="text-4xl text-brand-neon" fill="currentColor" height="1em" stroke="currentColor" stroke-width="0" viewBox="0 0 512 512" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M461.81 53.81a4.4 4.4 0 0 0-3.3-3.3c-54.81-12.75-121-9.2-176.35 29.53-32.31-16.72-73.94-17-109.84-2-11.12 4.63-35.39 12-42.53 15-43.73 18.29-63 57.37-63.58 58.72a4.48 4.48 0 0 0 2.51 5.72l40.11 13.56a172.68 172.68 0 0 1 29.53 14.47c-5.71 18.23-16.71 39.05-35.09 57.43-16.14 16.14-55.8 28.52-57.8 29.12a4.48 4.48 0 0 0-3 5.34l12.72 42.66c.26 1.09 23.95 91.28 126 137.47 4.19 1.9 8.79 1.25 12.54-1.2l91-59.5a160.84 160.84 0 0 1 11.23-24.1c11.09 11.09 25 18 36.6 22l14.16 41.56a4.5 4.5 0 0 0 5.67 2.76l.16-.06c1.35-.55 40.58-19.86 58.72-63.58 3-7.14 10.37-31.41 15-42.53 15-35.91 14.69-77.54-2.06-109.84 38.74-55.45 42.04-121.2 29.61-175.14zM169.58 386.41c-52-30.86-70.16-72.36-74.88-87.16l84.45 84.45zm17.65-177.34c-28.59-11.95-44.47-19.12-46.12-19.83l-20-6.75 36.19-27.46c24.23-7.53 50.85-4.49 71.95 6a319.22 319.22 0 0 0-42.02 48.04zm46.42 163.51l-4.5 13.91c-.55 2.1-7.73 23.36-19.83 46.12L182.88 284c17.14-12.75 58.77-38.39 96.06-25.06 10.46 3.74 39.81 12.71 49.33 21.36zm100-36.67c-11.12-4.63-35.39-12-42.53-15-43-18.17-62.24-55.9-63.35-58.11a5.6 5.6 0 0 0 0-.25c.19-.24.73-.83 1.54-1.64l1.39-1.39a135.29 135.29 0 0 1 13-11.45 220.06 220.06 0 0 1 54.06-28.71l28.75 9.77c1.36.21 28.59 11.95 44.47 19.12 1.69 4 8.79 27.27 12.27 41.53-15.35-2.2-39.06 13.62-49.6 46.13z"></path></svg>
            </div>

            <h2 class="text-4xl md:text-5xl font-bold mb-6">Mau Gabung Circle Kita?</h2>
            
            <p class="text-white/60 text-lg max-w-2xl mb-12">
                Pintu kami selalu terbuka buat kolaborator, klien, atau sekadar teman ngopi yang mau ngobrolin masa depan.
            </p>

            <Button class="bg-white text-black px-10 py-4 font-bold border-none shadow-[4px_4px_0px_0px_#CCFF00] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-white transition-all duration-300">
                Say Hello
            </Button>
        </div>
    </div>
</section>
