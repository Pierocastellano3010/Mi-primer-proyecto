<script>
    const { img, name, des, slug } = $props();
</script>

<div class="bg-[#f5f2eb] rounded-2xl overflow-hidden shadow-md flex flex-col border border-black/5 text-left">
  
  <!-- Imagen de fondo con overlay y nombre -->
  <div class="relative w-full h-72 md:h-80 overflow-hidden bg-neutral-800">
    <img 
      src={img} 
      alt={name} 
      class="w-full h-full object-cover block"
    />
    
    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-6">
      <h3 class="text-3xl md:text-4xl font-bold text-white tracking-tight m-0">
        {name}
      </h3>
    </div>
  </div>

  <!-- Descripción y botón -->
  <div class="p-6 flex flex-col justify-between flex-1 gap-6">
    <p class="text-gray-700 text-sm leading-relaxed font-normal m-0">
      {des}
    </p>

    <a 
      href={`/catalogo/${slug}`} 
      class="inline-flex items-center gap-2 text-xs font-bold text-[#d8684d] uppercase tracking-wider hover:opacity-80 transition-opacity w-fit no-underline"
    >
      EXPLORAR COLECCIÓN <span>&rarr;</span>
    </a>
  </div>

</div>