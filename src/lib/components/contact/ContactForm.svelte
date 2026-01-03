<script>
    import Input from '$lib/components/ui/Input.svelte';
    import Textarea from '$lib/components/ui/Textarea.svelte';
    import Button from '$lib/components/ui/Button.svelte';

    let name = '';
    let email = '';
    let message = '';
    
    function handleSubmit() {
        // Handle form submission logic here
        console.log({ name, email, message });
    }
</script>

<div class="bg-dark-card border border-white/10 p-8 md:p-10 shadow-2xl relative overflow-hidden group">
     <div class="absolute -top-10 -right-10 w-40 h-40 bg-brand-neon/5 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-neon/10 transition-colors duration-500"></div>

    <form on:submit|preventDefault={handleSubmit} class="space-y-6 relative z-10">
        <h3 class="text-2xl font-bold mb-6">Mulai Kolaborasi</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
            <Input 
                id="name" 
                label="Nama" 
                placeholder="Nama lo" 
                bind:value={name} 
            />
            <Input 
                id="email" 
                type="email" 
                label="Email" 
                placeholder="guekerenbanget@gmail.com" 
                bind:value={email} 
            />
        </div>
        
        <Textarea 
            id="message" 
            label="Ceritain Ide ato Masalah Lo" 
            placeholder="Jadi gini guys, gue ada ide/masalah nih ..." 
            bind:value={message} 
        />
        
        <div class="pt-4">
            <Button type="submit" variant="primary" size="lg" class="w-full md:w-auto min-w-50">
                Kirim Pesan
            </Button>
        </div>
    </form>
</div>
