<script lang="ts">
    import { _ } from 'svelte-i18n';
</script>

<section class="py-32 flex items-center justify-center bg-transparent relative">
    <div class="container text-center relative z-10">
        <div class="bg-dark-card border-[3px] border-white/10 p-12 md:p-16 relative hover:border-brand-neon hover:shadow-[12px_12px_0px_#9D00FF] transition-all duration-300 group">
             <!-- Quote Icon -->
             <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-neon px-4 py-2 border-[3px] border-black shadow-[4px_4px_0px_#000]">
                <svg 
                    class="text-4xl text-black" 
                    fill="currentColor" 
                    height="1em" 
                    stroke="currentColor" 
                    stroke-width="0" 
                    viewBox="0 0 512 512" 
                    width="1em" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                </svg>
             </div>

            <blockquote class="text-3xl md:text-5xl font-black leading-tight mb-8 text-white relative z-10">
                {$_('aboutPage.quote')}
            </blockquote>
            <cite class="inline-block bg-white/5 border border-white/10 px-6 py-2 rounded-none text-brand-neon not-italic tracking-widest uppercase text-sm font-bold group-hover:bg-brand-neon group-hover:text-black transition-colors duration-300">{$_('aboutPage.quoteAuthor')}</cite>
        </div>
    </div>
</section>

