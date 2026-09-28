<script>
    import { products } from "$lib/data/products";
    const { img, name, slug, des } = $props();
    const missolotresproyectos = products.filter(
        (products, index) => index < 3,
    );

    import Imagencard from "$lib/components/imagencard.svelte";
    import Productcard from "$lib/components/productcard.svelte";
</script>

<section
    class="relative flex flex-col items-center justify-center py-40 gap-6 px-4 text-center overflow-hidden"
>
    <img
        src="https://eldiario.com/wp-content/uploads/2025/04/tiendas-discos-de-vinilo.jpg"
        class="absolute top-0 left-0 -z-20 w-full h-full object-cover"
        alt="Tienda de vinilos"
    />

    <div class="absolute top-0 left-0 -z-10 w-full h-full bg-black/60"></div>

    <h1 class="text-4xl md:text-5xl font-bold p-1 text-amber-50 drop-shadow-md">
        El Sonido de una Era
    </h1>

    <p
        class="max-w-2xl text-center px-4 py-2 text-amber-50 font-normal leading-relaxed text-sm md:text-base opacity-90"
    >
        Sumérgete en el crujido analógico del rock latino y el folclore
        mexicano. Curaduría de alta fidelidad para coleccionistas y amantes del
        vinilo.
    </p>

    <div class="flex flex-wrap gap-4 justify-center items-center">
        <a
            href="/categorias"
            class="px-6 py-3 bg-[#fbebe6] hover:bg-[#f8ded6] text-stone-900 font-bold text-xs uppercase tracking-widest rounded-full transition no-underline inline-block text-center"
        >
            Folk Mexicano
        </a>

        <a
            href="/categorias"
            class="px-6 py-3 bg-[#fbebe6] hover:bg-[#f8ded6] text-stone-900 font-bold text-xs uppercase tracking-widest rounded-full transition no-underline inline-block text-center"
        >
            Rock Clásico
        </a>

        <a
            href="/categorias"
            class="px-6 py-3 bg-[#fbebe6] hover:bg-[#f8ded6] text-stone-900 font-bold text-xs uppercase tracking-widest rounded-full transition no-underline inline-block text-center"
        >
            Rock en Español
        </a>
    </div>

    <div class="w-full max-w-4xl flex items-center justify-center gap-4 mt-6">
        <div class="h-px bg-amber-100/40 flex-1"></div>
        <h2
            class="text-center font-bold text-lg md:text-xl rounded-2xl bg-amber-50 text-neutral-900 px-6 py-2 shadow-lg"
        >
            Artistas Destacados
        </h2>
        <div class="h-px bg-amber-100/40 flex-1"></div>
    </div>
</section>

<section>
    <div class=" grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
        <Imagencard
            img="https://images.genius.com/6f171c0ac5505f3fc10cef13c9596cf6.1000x1000x1.png"
            name="Ed Maverick"
            slug="ed-maverick"
            des="El joven cantautor chihuahuense que redefinió la melancolía del folk contemporáneo mexicano. Sus prensajes en vinilo capturan la cruda intimidad de su voz."
        />

        <Imagencard
            img="https://i.scdn.co/image/ab67616d0000b273ea4f189d5bc56b9d3ca61cd8"
            name="Enanitos Verdes"
            slug="enanitos-verdes"
            des="Leyendas indiscutibles del rock en español. Redescubre los himnos de toda una generación con la calidez inigualable que solo el formato analógico puede ofrecer."
        />
    </div>
</section>

<section>
    <h2 class="flex text-3xl font-bold px-10 font-fam">Archivo Analogico</h2>

    <div
        class="grid grid-[#grid-cols-4] grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-10 py-6"
    >
        {#each missolotresproyectos as producto}
            <Productcard
                img={producto.image}
                name={producto.name}
                des={producto.des}
                price={producto.price}
                slug={producto.slug}
            />
        {/each}
    </div>
</section>
