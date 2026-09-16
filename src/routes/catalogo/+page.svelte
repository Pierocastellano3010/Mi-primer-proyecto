<script>
    import Productcard from "$lib/components/productcard.svelte";
    import { products } from "$lib/data/products";
</script>

<div>
    <h1 class="font-bold p-4 text-3xl px-10">Catálogo Sonoro</h1>
    <p class="px-10">
        Explora nuestra cuidada selección de vinilos de primera edición. Sonido
        analógico restaurado que rinde homenaje a las leyendas del rock y
        folclor
    </p>
</div>
<div class="flex justify-start p-5 gap-5 px-10">
    <button class="bg-amber-100 rounded px-2 py.0.6">Todos</button>
    <button class=" bg-amber-100 rounded px-2 py.0.6">Folk</button>
    <button class="bg-amber-100 rounded px-2 py.0.6">Rock clásico</button>
    <button class="bg-amber-100 rounded px-2 py.0.6">Artistas Destacados</button
    >
</div>

<section>
    <div class="grid grid-cols-4 gap-4 px-10">
        {#each products as product}
            <Productcard
                img={product.image}
                name={product.name}
                des={product.des}
                price={product.price}
            />
        {/each}
    </div>
</section>
