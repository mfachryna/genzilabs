<script lang="ts">
  import { cn } from '$lib/utils';
  
  let { 
    class: className = '', 
    value = $bindable(), 
    label, 
    id,
    ...rest 
  } = $props();
</script>

<div class="space-y-2 w-full">
  {#if label}
    <label for={id} class="text-sm font-bold uppercase tracking-wider text-white/60">
      {label}
    </label>
  {/if}
  <textarea
    {id}
    class={cn(
      "flex min-h-30 w-full rounded-none border-[3px] border-white/20 bg-dark-card px-4 py-3 text-base font-medium ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-brand-neon focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 transition-colors text-white resize-none",
      className
    )}
    bind:value
    {...rest}
  ></textarea>
</div>
