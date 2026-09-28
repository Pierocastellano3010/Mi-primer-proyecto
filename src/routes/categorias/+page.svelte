<script>
// @ts-nocheck

    import Categorycard from "$lib/components/categorycard.svelte";
    import { categorys } from "$lib/data/categorys";
    import Icon from "@iconify/svelte";
</script>

<div class="px-10 py-6">
  <!-- Cabecera -->
  <div class="flex justify-between items-start mb-6">
    <h1 class="w-full text-3xl font-bold">Archivos Sonoros</h1>
    <p class="font-bold text-sm text-gray-500 uppercase tracking-wider text-right shrink-0">
      Exploración Taxonómica De Nuestras Colecciones
    </p>
  </div>

  <div class="flex items-center gap-2 mb-6 text-xl font-bold">
    <Icon icon="akar-icons:fire" />
    <p>Vanguardia Sonora</p>
  </div>


  <section>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each categorys as product}
        <Categorycard 
          img={product.image || product.img}
          name={product.name}
          des={product.des}
          slug={product.slug}
          tag={product.tag || "TENDENCIA"}
        />
      {/each}
    </div>
  </section>
</div>