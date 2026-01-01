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
    primary: 'bg-brand-neon text-black hover:bg-white hover:text-black shadow-[0_0_15px_rgba(217,255,0,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]',
    outline: 'border border-white/20 text-white hover:bg-white/10 hover:border-white',
    ghost: 'text-white/70 hover:text-white hover:bg-white/5',
    link: 'text-brand-neon underline-offset-4 hover:underline'
  };

  const sizes = {
    default: 'h-12 px-6 py-2 text-base',
    sm: 'h-9 px-4 text-sm',
    lg: 'h-14 px-8 text-lg',
    icon: 'h-10 w-10'
  };

  const baseClass = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
  
  // @ts-ignore
  const variantClass = variants[variant] || variants.primary;
  // @ts-ignore
  const sizeClass = sizes[size] || sizes.default;
</script>

<button class={cn(baseClass, variantClass, sizeClass, className)} {...rest}>
  {@render children()}
</button>

