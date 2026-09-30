<!-- src/routes/catalogo/[slug]/+page.svelte -->
<script>
  import { page } from '$app/stores';
  import { products } from '$lib/data/products.js';
  import { agregarAlCarrito } from '$lib/data/Cart.js';

  let slugActual = $derived($page.params.slug);

  let producto = $derived(
    products.find((p) => p.slug === slugActual)
  );

  let precioFormateado = $derived(() => {
    if (!producto) return '0.00';
    const val = producto.price ?? 0;
    const num = typeof val === 'number' ? val : parseFloat(String(val).replace(/[^0-9.-]+/g, ''));
    return isNaN(num) ? '0.00' : num.toFixed(2);
  });
</script>

<div class="max-w-5xl mx-auto px-6 py-12">
  <a href="/catalogo" class="text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-stone-900 mb-8 inline-block">
    ← Volver al catálogo
  </a>

  {#if producto}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <img 
          src={producto.image} 
          alt={producto.name} 
          class="w-full h-auto rounded-2xl shadow-xl border border-stone-200" 
        />
      </div>

      <div class="flex flex-col gap-4">
        <h1 class="font-serif text-4xl font-bold text-stone-900">
          {producto.name}
        </h1>
        <p class="text-lg text-stone-600 font-semibold">
          {producto.des}
        </p>
        
        <p class="text-3xl font-serif font-bold text-stone-900 my-2">
          ${precioFormateado()} USD
        </p>

        <p class="text-sm text-stone-600 leading-relaxed border-t border-stone-200 pt-4">
          Edición física en disco de vinilo de alta fidelidad. Conserva el sonido analógico con empaque original de colección.
        </p>

        <button 
          onclick={() => agregarAlCarrito(producto)}
          class="mt-4 w-full bg-[#2a1b15] hover:bg-[#3d281f] text-amber-50 font-bold text-sm uppercase tracking-widest py-4 rounded-xl transition cursor-pointer"
        >
          Añadir al Carrito
        </button>
      </div>
    </div>
  {:else}
    <div class="text-center py-20">
      <h2 class="text-2xl font-bold text-stone-800 mb-2">Producto no encontrado</h2>
      <p class="text-stone-500 mb-6">El vinilo que buscas no se encuentra en nuestro catálogo.</p>
      <a href="/catalogo" class="bg-[#2a1b15] text-amber-50 px-6 py-3 rounded-lg font-bold text-xs uppercase">
        Explorar catálogo
      </a>
    </div>
  {/if}
</div>
