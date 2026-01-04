<script lang="ts">
    import { _ } from 'svelte-i18n';
    import Navbar from '$lib/components/landing/Navbar.svelte';
    import Footer from '$lib/components/landing/Footer.svelte';
    import ContactForm from '$lib/components/contact/ContactForm.svelte';
    import ContactInfo from '$lib/components/contact/ContactInfo.svelte';
    
    let { form } = $props();
</script>

<div class="min-h-screen bg-dark-bg text-white font-sans selection:bg-brand-neon selection:text-black">
    <Navbar />

    <main class="pt-32 pb-20">
        <div class="container">
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-20">
                <!-- Left Column: Info & Context -->
                <div class="lg:col-span-5 space-y-12">
                    <div class="space-y-6">
                        <span class="text-brand-neon font-mono text-sm uppercase tracking-widest mb-2 block animate-fade-in">{$_('contact.label')}</span>
                        <h1 class="text-5xl md:text-6xl font-bold leading-tight text-white animate-fade-in-up">
                            {$_('contact.headline1')} <span class="text-transparent bg-clip-text bg-linear-to-r from-brand-neon to-brand-purple">{$_('contact.headline2')}</span>
                        </h1>
                        <p class="text-white/60 text-lg font-light leading-relaxed animate-fade-in-up delay-100">
                            {$_('contact.description')}
                        </p>
                    </div>

                    <div class="animate-fade-in-up delay-200">
                        <ContactInfo />
                    </div>
                </div>

                <!-- Right Column: Form -->
                <div class="lg:col-span-7 animate-fade-in-up delay-300">
                <ContactForm {form} />
                </div>
            </div>
        </div>
    </main>

    <Footer />
</div>

<style>
    @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
        animation: fade-in 1s ease-out forwards;
    }
    .animate-fade-in-up {
        animation: fade-in-up 1s ease-out forwards;
    }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
</style>
