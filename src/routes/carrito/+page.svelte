<script>
  const cartItems = [];
</script>

<div class="max-w-7xl mx-auto px-6 py-10">
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
    
    <!-- Sección Izquierda: Estado Vacío -->
    <div class="lg:col-span-8 flex flex-col gap-6">
      <div class="flex justify-between items-baseline border-b border-stone-200 pb-4">
        <h1 class="font-serif text-4xl font-bold text-gray-900">Tu Selección</h1>
        <span class="text-xs font-semibold tracking-widest text-stone-500 uppercase">0 ARTÍCULOS</span>
      </div>

      <div class="bg-[#eee9e0] rounded-2xl p-10 text-center flex flex-col items-center gap-3">
        <h2 class="font-serif text-2xl font-bold text-gray-900">Tu carrito está vacío</h2>
        <p class="text-xs text-stone-600 max-w-xs">Aún no has añadido ningún vinilo a tu selección.</p>
        <a href="/catalogo" class="mt-2 bg-[#2a1b15] text-amber-50 font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-md no-underline">
          Explorar Catálogo
        </a>
      </div>
    </div>

    <!-- Sección Derecha: Resumen Vacío -->
    <div class="lg:col-span-4">
      <div class="bg-black text-white rounded-3xl p-7 flex flex-col gap-6">
        <h2 class="font-serif text-3xl font-bold">Resumen</h2>

        <div class="flex flex-col gap-3 text-xs tracking-wider border-b border-stone-800 pb-6 text-stone-400">
          <div class="flex justify-between"><span>Subtotal</span><span>$0.00 USD</span></div>
          <div class="flex justify-between"><span>Envío</span><span>$0.00 USD</span></div>
        </div>

        <div class="flex justify-between items-baseline">
          <span class="font-serif text-xl font-bold">Total</span>
          <span class="text-4xl font-serif font-bold">$0.00</span>
        </div>

        <button disabled class="w-full bg-stone-800 text-stone-500 font-bold text-xs uppercase tracking-widest py-4 rounded-xl cursor-not-allowed">
          PROCEDER AL PAGO ➔
        </button>
      </div>
    </div>

  </div>
</div>