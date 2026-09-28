<script>
    const { img, name, des, price, slug } = $props();
</script>

<div class="bg-[#fcf8f3] rounded-2xl overflow-hidden shadow-sm border border-black/5 flex flex-col group transition-all hover:shadow-md text-left">
  
  <!-- Enmarcado de la Portada del Vinilo -->
  <div class="bg-[#f2ece1] p-5 flex justify-center items-center aspect-square">
    <div class="bg-white p-2 shadow-sm rounded-lg overflow-hidden w-full h-full flex justify-center items-center">
      <img 
        src={img} 
        alt={name} 
        class="w-full h-full object-cover rounded group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>

  <!-- Información del Disco -->
  <div class="p-5 flex flex-col justify-between flex-1 gap-4">
    
    <!-- Nombre del Álbum y Artista / Precio -->
    <div class="flex items-start justify-between gap-2">
      <div>
        <h3 class="font-serif text-lg font-bold text-gray-900 leading-tight">
          {name}
        </h3>
        <p class="text-xs text-gray-500 font-normal mt-1">
          {des}
        </p>
      </div>
      
      <!-- Etiqueta de Precio -->
      <div class="bg-[#f0e9dd] px-2.5 py-1 rounded text-right shrink-0">
        <span class="text-xs font-bold text-gray-800">{price} USD</span>
      </div>
    </div>

    <!-- Botones de Acción -->
    <div class="flex items-center gap-2 mt-2">
      <button class="flex-1 bg-[#2a1b15] hover:bg-[#1a110e] text-amber-50 font-bold text-xs uppercase tracking-widest py-2.5 rounded-sm transition shadow-sm cursor-pointer">
        AÑADIR
      </button>

      <a 
        href={`/catalogo/${slug}`} 
        class="bg-[#f0e9dd] hover:bg-[#e4dcce] text-[#2a1b15] p-2.5 rounded-sm transition flex items-center justify-center text-xs no-underline"
        aria-label="Ver detalles"
      >
        <span>&#9654;</span>
      </a>
    </div>

  </div>
</div>
