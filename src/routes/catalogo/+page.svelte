<script>
    import Productcard3 from "$lib/components/productcard3.svelte";
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
        <Productcard3
            img="https://images.genius.com/6f171c0ac5505f3fc10cef13c9596cf6.1000x1000x1.png"
            name="Eduardo"
            des="Ed Maverick"
            price="$45"
        />
        <Productcard3
            img="https://i.scdn.co/image/ab67616d0000b2733557d645f5931f2053d73a64"
            name="Enanitos Verdes"
            des="Enanitos Verdes"
            price="$40"
        />
        <Productcard3
            img="https://m.media-amazon.com/images/I/61+tn4NBv9L._UF894,1000_QL80_.jpg"
            name="Hasta la Raiz"
            des="Natalia Lafourcade"
            price="$50"
        />
        <Productcard3
            img="https://cdn-images.dzcdn.net/images/cover/aadeeaaa9e2b7d14d71c5815e06747d8/0x1900-000000-80-0-0.jpg"
            name="Caramelos de Cianuro"
            des="Caramelos de Cianuro"
            price="$40"
        />
        <Productcard3
            img="https://i.scdn.co/image/ab67616d0000b2736c4c83779f5d3cd6ad3e1aec"
            name="Mix para llorar en tu habitacion"
            des="Ed Maverick"
            price="$40"
        />
        <Productcard3
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwhnBSvWMklBsOy1bNUnQdNXJwsEszTvRCcNVTsX4cZiaojoJF2QsM34&s=10"
            name="Piss In The Wind"
            des="Joji"
            price="$60"
        />
        <Productcard3
            img="https://http2.mlstatic.com/D_NQ_NP_600124-MLA95741554876_102025-O.webp"
            name="Another One"
            des="Mac Demarco"
            price="$35"
        />
        <Productcard3
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg955KoMOwcFKRF_vQ2UUOEnDvPwKzwx8S-fvDQvF_Nn-x71MMuFe180&s=10"
            name="Juan Gabriel En el palacio de Bellas artes"
            des="Juan Gabriel"
            price="$50"
        />
    </div>
</section>
