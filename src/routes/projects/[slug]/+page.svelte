<script>
    import { products } from "$lib/data/products.js";

    const { params } = $props();

    const miproducto = products.find(
        (producto) => producto.slug == params.slug,
    );
</script>

{#if miproducto}

<h1 class="text-2xl font-bold">{miproducto.name}</h1>

<div>
<p>{miproducto.image}</p>
<p>{miproducto.des}</p>
</div>
{/if}