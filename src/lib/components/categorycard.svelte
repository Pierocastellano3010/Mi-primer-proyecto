<script>
    let { img, name, des, slug, tag = "TENDENCIA" } = $props();
</script>

<a href={`/categorias/${slug}`} class="block group no-underline text-white">
  <div class="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-900 shadow-md">
    <!-- Imagen de fondo -->
    <img 
      src={img} 
      alt={name} 
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
    />
    
    <!-- Sombra gradiente para que se lea el texto -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

    <!-- Texto superpuesto -->
    <div class="absolute inset-0 p-5 flex flex-col justify-between">
      <div>
        <span class="inline-block bg-[#8b261d] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
          {tag}
        </span>
      </div>

      <div>
        <h3 class="font-serif text-2xl font-bold leading-tight mb-1 text-white">
          {name}
        </h3>
        <p class="text-xs text-gray-300 font-light line-clamp-1">
          {des}
        </p>
      </div>
    </div>
  </div>
</a>
