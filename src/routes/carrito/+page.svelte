<script>
import { cart, eliminarDelCarrito } from '$lib/data/Cart.js';

  // Esto imprimirá en la consola del navegador la lista completa de productos al cambiar
  $effect(() => {
    console.log("Productos en el carrito:", $cart);
  });

  let subtotal = $derived(
    $cart.reduce((acc, item) => {
      // Extraemos el valor numérico quitando cualquier símbolo de moneda si existe
      let p = item.precio ?? item.price ?? 0;
      if (typeof p === 'string') {
        p = parseFloat(p.replace(/[^0-9.-]+/g, '')) || 0;
      }
      return acc + (Number(p) * item.cantidad);
    }, 0)
  );

  let envio = 0;
  let total = $derived(subtotal + envio);
</script>

<div class="max-w-7xl mx-auto px-6 py-10">
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
    <!-- Sección Izquierda: Lista de Productos o Estado Vacío -->
    <div class="lg:col-span-8 flex flex-col gap-6">
      <div
        class="flex justify-between items-baseline border-b border-stone-200 pb-4"
      >
        <h1 class="font-serif text-4xl font-bold text-gray-900">
          Tu Selección
        </h1>
        <span
          class="text-xs font-semibold tracking-widest text-stone-500 uppercase"
        >
          {$cart.length} ARTÍCULOS
        </span>
      </div>

      {#if $cart.length === 0}
        <div
          class="bg-[#eee9e0] rounded-2xl p-10 text-center flex flex-col items-center gap-3"
        >
          <h2 class="font-serif text-2xl font-bold text-gray-900">
            Tu carrito está vacío
          </h2>
          <p class="text-xs text-stone-600 max-w-xs">
            Aún no has añadido ningún vinilo a tu selección.
          </p>
          <a
            href="/catalogo"
            class="mt-2 bg-[#2a1b15] text-amber-50 font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-md no-underline"
          >
            Explorar Catálogo
          </a>
        </div>
      {:else}
        <div class="flex flex-col gap-4">
          {#each $cart as item}
            <div
              class="bg-[#fcf8f3] p-4 rounded-xl border border-stone-200 flex items-center justify-between gap-4"
            >
              <div class="flex items-center gap-4">
                {#if item.imagen}
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    class="w-16 h-16 object-cover rounded-lg border border-stone-200"
                  />
                {/if}
                <div>
                  <h3 class="font-serif font-bold text-stone-900 text-sm">
                    {item.titulo}
                  </h3>
                  <p class="text-xs text-stone-500">{item.artista}</p>
                  <span class="text-xs font-bold text-stone-700 mt-1 block"
                    >Cantidad: {item.cantidad}</span
                  >
                </div>
              </div>
              <div class="text-right">
                <span class="font-bold text-stone-900 text-sm"
                  >${(item.precio * item.cantidad).toFixed(2)} USD</span
                >
                <!-- Pegar justo debajo de la línea 47 -->
                <button
                  onclick={() => eliminarDelCarrito(item.id || item.slug)}
                  class="text-red-500 hover:text-red-700 p-1 text-xs font-semibold ml-2 transition cursor-pointer"
                  title="Eliminar producto"
                >
                  🗑️
                </button>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>

    <!-- Sección Derecha: Resumen de compra -->
    <!-- Sección Derecha: Resumen de compra -->
    <div class="lg:col-span-4">
      <div class="bg-black text-white rounded-3xl p-7 flex flex-col gap-6">
        <h2 class="font-serif text-3xl font-bold">Resumen</h2>

        <div
          class="flex flex-col gap-3 text-xs tracking-wider border-b border-stone-800 pb-6 text-stone-400"
        >
          <div class="flex justify-between">
            <span>Subtotal</span>
            <!-- Aquí mostramos el subtotal real -->
            <span>${subtotal.toFixed(2)} USD</span>
          </div>
          <div class="flex justify-between">
            <span>Envío</span>
            <span>${envio.toFixed(2)} USD</span>
          </div>
        </div>

        <div class="flex justify-between items-baseline">
          <span class="font-serif text-xl font-bold">Total</span>
          <!-- Aquí mostramos el total final -->
          <span class="text-4xl font-serif font-bold"
            >${total.toFixed(2)} USD</span
          >
        </div>

        <button
          disabled={$cart.length === 0}
          class="w-full bg-stone-800 disabled:opacity-50 text-stone-200 font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition cursor-pointer"
        >
          PROCEDER AL PAGO ➔
        </button>
      </div>
    </div>
  </div>
</div>
