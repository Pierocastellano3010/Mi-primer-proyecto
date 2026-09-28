<script>
    import Productcard from "$lib/components/productcard.svelte";
    import { products } from "$lib/data/products";
</script>

<div>
  <h1 class="font-bold p-4 text-3xl px-10">Catálogo Sonoro</h1>
  <p class="px-10">
    Explora nuestra cuidada selección de vinilos de primera edición. Sonido
    analógico restaurado que rinde homenaje a las leyendas del rock y
    folclor.
  </p>
</div>

<div class="flex items-center gap-3 px-10 py-4">
  <button class="bg-black text-white px-4 py-1.5 rounded text-sm font-medium">
    Todos
  </button>

  <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-1.5 rounded text-sm font-medium transition">
    Folk
  </button>

  <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-1.5 rounded text-sm font-medium transition">
    Rock clásico
  </button>

  <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-1.5 rounded text-sm font-medium transition">
    Artistas Destacados
  </button>
</div>

<section>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10">
    {#each products as product}
      <Productcard 
        img={product.image}
        name={product.name}
        des={product.des}
        price={product.price}
        slug={product.slug}
      />
    {/each}
  </div>
</section>
