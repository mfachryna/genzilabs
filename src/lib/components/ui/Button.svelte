<script lang="ts">
  import { cn } from '$lib/utils';

  let { 
    variant = 'primary', 
    size = 'default', 
    class: className = '', 
    children,
    ...rest 
  } = $props();

  const variants = {
    primary: 'bg-brand-neon text-black border-2 border-transparent shadow-[4px_4px_0px_0px_#9D00FF] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#9D00FF] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
    outline: 'bg-transparent text-white border-2 border-white/20 shadow-[4px_4px_0px_0px_transparent] hover:border-brand-neon hover:text-brand-neon hover:shadow-[4px_4px_0px_0px_#CCFF00] hover:-translate-y-[2px] hover:-translate-x-[2px]',
    ghost: 'text-white/70 hover:text-white hover:bg-white/5',
    link: 'text-brand-neon underline-offset-4 hover:underline'
  };

  const sizes = {
    default: 'h-12 px-8 text-base',
    sm: 'h-10 px-6 text-sm',
    lg: 'h-14 px-10 text-lg',
    icon: 'h-10 w-10'
  };

  const baseClass = 'inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
  
  // Reactively update classes when props change
  let variantClass = $derived(variants[variant as keyof typeof variants] || variants.primary);
  let sizeClass = $derived(sizes[size as keyof typeof sizes] || sizes.default);
</script>

{#if rest.href}
  <a class={cn(baseClass, variantClass, sizeClass, className)} {...rest}>
    {@render children()}
  </a>
{:else}
  <button class={cn(baseClass, variantClass, sizeClass, className)} {...rest}>
    {@render children()}
  </button>
{/if}

