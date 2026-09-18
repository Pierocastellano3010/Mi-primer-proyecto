<script>
    import Categorycard from "$lib/components/categorycard.svelte";
    import { categorys } from "$lib/data/categorys";
    import Icon from "@iconify/svelte";
</script>

<div class=" flex justify-between px-10">
    <h1 class="w-full h-8 text-2xl">Archivos Sonoros</h1>

    <p>Exploracion Taxonomica De Nuestras Colecciones</p>
</div>
<div class="flex items-center gap-2 px-10 text-2xl">
    <Icon icon="akar-icons:fire" />
    <p class="flex flex-col gap-8">Vanguardia Sonora</p>
</div>

<section>
<div>
</div>

</section>

<section>
    <div class="grid grid-cols-3 gap-4 px-10">
        {#each categorys as product}
            <Categorycard
                img={product.image}
                name={product.name}
                des={product.des}
                price={product.price}
                slug={product.slug}
            />
        {/each}
    </div>
</section>
