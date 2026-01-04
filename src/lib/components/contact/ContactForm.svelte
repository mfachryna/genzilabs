<script lang="ts">
    import { enhance } from '$app/forms';
    import { _ } from 'svelte-i18n';
    import Input from '$lib/components/ui/Input.svelte';
    import Textarea from '$lib/components/ui/Textarea.svelte';
    import Button from '$lib/components/ui/Button.svelte';

    let { form = null }: { form?: { success?: boolean; error?: string; name?: string; email?: string; message?: string } | null } = $props();
    
    let loading = $state(false);
    let showSuccess = $state(false);
</script>

<div class="bg-dark-card border border-white/10 p-8 md:p-10 shadow-2xl relative overflow-hidden group">
     <div class="absolute -top-10 -right-10 w-40 h-40 bg-brand-neon/5 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-neon/10 transition-colors duration-500"></div>

    {#if showSuccess || form?.success}
        <div class="relative z-10 text-center py-12 space-y-4">
            <div class="w-16 h-16 mx-auto bg-brand-neon/20 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-brand-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            <h3 class="text-2xl font-bold text-brand-neon">{$_('contact.success')}</h3>
            <p class="text-white/60">{$_('contact.successDesc')}</p>
            <button 
                type="button"
                onclick={() => { showSuccess = false; form = undefined; }}
                class="mt-4 text-brand-neon underline underline-offset-4 hover:text-white transition-colors"
            >
                {$_('contact.sendAgain')}
            </button>
        </div>
    {:else}
        <form 
            method="POST" 
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
            class="space-y-6 relative z-10"
        >
            <h3 class="text-2xl font-bold mb-6">{$_('contact.formTitle')}</h3>
            
            {#if form?.error}
                <div class="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg">
                    {form.error}
                </div>
            {/if}
            
            <div class="grid md:grid-cols-2 gap-6">
                <Input 
                    id="name" 
                    name="name"
                    label={$_('contact.nameLabel')} 
                    placeholder={$_('contact.namePlaceholder')} 
                    value={form?.name ?? ''}
                    required
                />
                <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    label={$_('contact.emailLabel')} 
                    placeholder={$_('contact.emailPlaceholder')} 
                    value={form?.email ?? ''}
                    required
                />
            </div>
            
            <Textarea 
                id="message" 
                name="message"
                label={$_('contact.messageLabel')} 
                placeholder={$_('contact.messagePlaceholder')} 
                value={form?.message ?? ''}
                required
            />
            
            <div class="pt-4">
                <Button type="submit" variant="primary" size="lg" class="w-full md:w-auto min-w-50" disabled={loading}>
                    {#if loading}
                        <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-black inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {$_('contact.sending')}
                    {:else}
                        {$_('contact.submit')}
                    {/if}
                </Button>
            </div>
        </form>
    {/if}
</div>
