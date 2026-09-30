<!-- src/lib/components/productcard.svelte -->
<script>
  import { agregarAlCarrito } from '$lib/data/Cart.js';

  let { producto = {} } = $props();

  // Convierte el valor a número limpiando caracteres no numéricos
  let precioLimpio = $derived(
    (() => {
      const val = producto.price ?? producto.precio ?? 0;
      const num = typeof val === 'number' ? val : parseFloat(String(val).replace(/[^0-9.-]+/g, ''));
      return isNaN(num) ? '0.00' : num.toFixed(2);
    })()
  );
</script>

<div class="bg-[#fcf8f3] border border-stone-200 rounded-2xl overflow-hidden flex flex-col justify-between p-4 shadow-sm hover:shadow-md transition">
  
  <a href="/catalogo/{producto.slug || producto.id}" class="no-underline text-inherit group">
    {#if producto.image || producto.imagen}
      <img 
        src={producto.image || producto.imagen} 
        alt={producto.name || producto.titulo} 
        class="w-full h-48 object-cover rounded-xl border border-stone-200 mb-4 group-hover:scale-105 transition duration-200" 
      />
    {/if}
    <h3 class="font-serif font-bold text-stone-900 text-lg group-hover:text-amber-800 transition">
      {producto.name || producto.titulo || 'Producto'}
    </h3>
    <p class="text-xs text-stone-500 mb-3">{producto.des || producto.artista || ''}</p>
    
    <p class="font-bold text-stone-800 text-sm mb-4">${precioLimpio} USD</p>
  </a>

  <button 
    onclick={() => agregarAlCarrito(producto)}
    class="w-full bg-[#2a1b15] hover:bg-[#3d281f] text-amber-50 font-bold text-xs uppercase tracking-widest py-3 rounded-lg transition cursor-pointer"
  >
    Añadir al Carrito
  </button>
</div>