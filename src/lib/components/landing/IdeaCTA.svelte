<script lang="ts">
    import { enhance } from '$app/forms';
    import { _ } from 'svelte-i18n';
    import Button from '$lib/components/ui/Button.svelte';

    let { form = null }: { form?: { waitlistSuccess?: boolean; waitlistError?: string; waitlistEmail?: string } | null } = $props();
    
    let loading = $state(false);
    let showSuccess = $state(false);
</script>

<section class="py-32 bg-brand-neon text-black">
    <div class="container text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4">{$_('ideaCta.headline')}</h2>
        <p class="text-lg max-w-2xl mx-auto opacity-80 font-medium leading-relaxed">
            {$_('ideaCta.description')}
        </p>
    </div>

    <div class="container grid md:grid-cols-2 gap-8">
        <!-- Card 1 -->
        <div class="bg-white p-10 border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-start text-left relative overflow-hidden group hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200">
            <div class="absolute top-8 right-8 text-black">
                 <svg class="text-4xl" fill="currentColor" height="1em" stroke="currentColor" stroke-width="0" viewBox="0 0 352 512" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path>
                </svg>
            </div>
           
            <h3 class="text-2xl font-bold mb-4 mt-2">{$_('ideaCta.card1Title')}</h3>
            <p class="text-gray-600 mb-8 leading-relaxed font-medium">
               {$_('ideaCta.card1Desc')}
            </p>
            <Button href="/contact" class="bg-white w-full h-12 rounded-none border-[3px] shadow-none border-black text-black font-bold uppercase tracking-wider hover:bg-black! hover:text-white! transition-colors">
                {$_('ideaCta.card1Button')}
            </Button>
        </div>

        <!-- Card 2 - Waitlist -->
        <div class="bg-white p-10 border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-start text-left relative overflow-hidden group hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200">
            <div class="absolute top-8 right-8 text-black">
                <svg class="text-5xl" fill="currentColor" height="1em" stroke="currentColor" stroke-width="0" viewBox="0 0 448 512" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 224h13.5c24.7 56.5 80.9 96 146.5 96s121.8-39.5 146.5-96H384c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-13.5C345.8 39.5 289.6 0 224 0S102.2 39.5 77.5 96H64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24c0 53-43 96-96 96h-48c-53 0-96-43-96-96v-24zm72 72l12-36 36-12-36-12-12-36-12 36-36 12 36 12 12 36zm151.6 113.4C297.7 340.7 262.2 352 224 352s-73.7-11.3-103.6-30.6C52.9 328.5 0 385 0 454.4v9.6c0 26.5 21.5 48 48 48h80v-64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64h80c26.5 0 48-21.5 48-48v-9.6c0-69.4-52.9-125.9-120.4-133zM272 448c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z"></path></svg>
            </div>
            
            <h3 class="text-2xl font-bold mb-4 mt-2">{$_('ideaCta.card2Title')}</h3>
            <p class="text-gray-600 mb-8 leading-relaxed font-medium">
                {$_('ideaCta.card2Desc')}
            </p>

            {#if showSuccess || form?.waitlistSuccess}
                <div class="w-full mt-auto bg-green-100 border-[3px] border-green-600 p-4 text-center">
                    <p class="text-green-800 font-bold">{$_('ideaCta.waitlistSuccess')}</p>
                    <button 
                        type="button"
                        onclick={() => { showSuccess = false; form = null; }}
                        class="mt-2 text-green-700 underline text-sm"
                    >
                        {$_('ideaCta.waitlistAgain')}
                    </button>
                </div>
            {:else}
                <form 
                    method="POST" 
                    action="?/waitlist"
                    use:enhance={() => {
                        loading = true;
                        return async ({ result, update }) => {
                            loading = false;
                            if (result.type === 'success') {
                                showSuccess = true;
                            }
                            await update();
                        };
                    }}
                    class="w-full mt-auto"
                >
                    {#if form?.waitlistError}
                        <p class="text-red-600 text-sm mb-2 font-medium">{form.waitlistError}</p>
                    {/if}
                    <div class="flex">
                        <input 
                            type="email" 
                            name="email"
                            placeholder={$_('ideaCta.waitlistPlaceholder')}
                            value={form?.waitlistEmail ?? ''}
                            required
                            class="flex-1 bg-gray-50 border-[3px] border-black border-r-0 px-4 py-3 text-sm font-medium focus:outline-none placeholder:text-gray-400 text-black"
                        >
                        <button 
                            type="submit"
                            disabled={loading}
                            class="bg-black text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-brand-purple transition-colors duration-300 disabled:opacity-50"
                        >
                            {#if loading}
                                <svg class="animate-spin h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            {:else}
                                {$_('ideaCta.waitlistButton')}
                            {/if}
                        </button>
                    </div>
                </form>
            {/if}
        </div>
    </div>
</section>

