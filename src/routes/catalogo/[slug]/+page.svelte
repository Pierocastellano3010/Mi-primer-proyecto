<script>
    import { products } from "$lib/data/products.js";

    const { params } = $props();

    const miproducto = products.find(
        (producto) => producto.slug == params.slug,
    );
</script>

{#if miproducto}

<h1 class="text-2xl font-bold grid- gap-4 px-10">{miproducto.name}</h1>

<div class="flex text-2xl grid grid-cols-4 gap-4 px-10">
<img src={miproducto.image} alt="">
<p>{miproducto.des}</p>
<p>{miproducto.price}</p>
</div>
{/if}