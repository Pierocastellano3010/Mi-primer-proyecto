<script>
  let { name, genre, image, albumsCount, slug } = $props();
</script>

<div class="group relative bg-[#fcf8f3] rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-all flex flex-col">

  <div class="relative w-full aspect-square overflow-hidden bg-stone-200">
    <img 
      src={image} 
      alt={name} 
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
    

    <span class="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-amber-100 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
      {genre}
    </span>
  </div>

  <div class="p-5 flex flex-col justify-between flex-1 gap-3">
    <div>
      <h3 class="font-serif text-xl font-bold text-gray-900 leading-snug group-hover:text-amber-900 transition-colors">
        {name}
      </h3>
      <p class="text-xs text-gray-500 font-medium mt-1">
        {albumsCount} {albumsCount === 1 ? 'álbum disponible' : 'álbumes disponibles'}
      </p>
    </div>


    <a 
      href={`/catalogo?artista=${slug}`} 
      class="mt-2 text-center bg-[#2a1b15] hover:bg-[#1a110e] text-amber-50 font-bold text-xs uppercase tracking-widest py-2.5 rounded-md transition shadow-sm no-underline"
    >
      Ver Discos
    </a>
  </div>
</div>