<script>
    import Productcard from "$lib/components/productcard.svelte";
    import { products } from "$lib/data/products";
</script>
<section
    class="flex flex-col items-center py-60 relative gap-7 bg-neutral-800/50"
>
    <img
        src="https://eldiario.com/wp-content/uploads/2025/04/tiendas-discos-de-vinilo.jpg"
        class="absolute top-0 left-0 -z-10 w-full h-full object-cover"
        alt=""
    />
    <h1 class="font-bold p-1 text-center text-5xl text-amber-50">
        El Sonido de una Era
    </h1>
    <p class="text-center px-4 py-2 text-amber-50 font-bold">
        Sumérgete en el crujido analogico del rock latino y el folclore
        mexicano. curaduría de alta fidelidad para coleccionistas y amantes del
        vinilo
    </p>
    <div class="flex justify-center p-4 gap-4">
        <button class="bg-amber-100 rounded px-3 py-0.5 text-amber-950"
            >folk mexicano</button
        >
        <button class="bg-amber-100 rounded px-3 py-0.5 text-amber-950"
            >rock clasico</button
        >
        <button class="bg-amber-100 rounded px-3 py-0.5 text-amber-950"
            >Rock en Españól</button
        >
    </div>

    <h3
        class="text-center font-bold p-1 text-3xl rounded-2xl bg-amber-50 px-5 py-2"
    >
        Artistas Destacados
    </h3>
</section>

<section>
    <div class=" grid grid-cols-2 gap-3 px-10">
        <Productcard
            img="https://images.genius.com/6f171c0ac5505f3fc10cef13c9596cf6.1000x1000x1.png"
            name="Ed Maverick"
            des="El joven cantautor chihuahuense que redefinió la melancolía del folk contemporáneo mexicano. Sus prensajes en vinilo capturan la cruda intimidad de su voz."
            price={undefined}
        />

        <Productcard
            img="https://i.scdn.co/image/ab67616d0000b273ea4f189d5bc56b9d3ca61cd8"
            name="Enanitos Verdes"
            des="Leyendas indiscutibles del rock en español. Redescubre los himnos de toda una generación con la calidez inigualable que solo el formato analógico puede ofrecer."
            price={undefined}
        />
    </div>
</section>

<section>
    <h2 class="flex text-3xl font-bold px-10 font-fan">Archivo Analogico</h2>

    <div class="grid grid-cols-4 gap-4 px-10">

       
</div>
</section>
