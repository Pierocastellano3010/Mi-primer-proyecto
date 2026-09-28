<script>
  // Lista de artistas icónicos de Rock en Español y Folk
  const artistas = [
    {
      name: "Ed Maverick",
      genre: "Folk Mexicano",
      image: "https://statics.uniradioinforma.com/2023/11/655a6c7431205.jpeg",
      albumsCount: 2,
      slug: "ed-maverick"
    },
    {
      name: "Enanitos Verdes",
      genre: "Rock en Español",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7lCPJbnWHxSHxn-oN7ZQGsivPRm1fZgycqJWESZ8XVzItJR6rgLO09g&s=10",
      albumsCount: 3,
      slug: "enanitos-verdes"
    },
    {
      name: "Natalia Lafourcade",
      genre: "Folk / Bolero",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyHIgRf6YzJBYgH4_AQfLyyEOIjmc8ngw795I0-0xiwFtC6_5Ap-pkXOV&s=10",
      albumsCount: 4,
      slug: "natalia-lafourcade"
    },
    {
      name: "Caramelos de Cianuro",
      genre: "Rock Alt / Punk",
      image: "https://i1.sndcdn.com/artworks-000095451842-bn4fm5-t500x500.jpg",
      albumsCount: 2,
      slug: "caramelos-de-cianuro"
    },
    {
      name: "Soda Stereo",
      genre: "Rock Clásico",
      image: "https://cdn-images.dzcdn.net/images/cover/3157b5d381dd7f5f9be38e6629014725/0x1900-000000-80-0-0.jpg",
      albumsCount: 5,
      slug: "soda-stereo"
    },
    {
      name: "Zoé",
      genre: "Rock Psicodélico",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrj9l4BGdl4UkN_-WntPqX9WC9vtsUTb9MpeumEslHXXYP9sBrNCkdQtLP&s=10",
      albumsCount: 3,
      slug: "zoe"
    },
        {
name: "Joji",
genre: "R&B alternativo",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPu9BT30i0OHDLprFBS4Jcbddk1UK9LSxFkqBD7Q00HpAOrf_RTHzEvKe9&s=10",
albumsCount: 2,
slug: "joji"
    },
  ];

  import Artistcard from "$lib/components/artistcard.svelte";
    import { imagen } from "$lib/data/imagen";
</script>

<div class="px-10 py-8 max-w-7xl mx-auto">
    <!-- Encabezado de la Sección -->
    <div
        class="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b border-stone-200 pb-6 gap-4"
    >
        <div>
            <h1 class="text-4xl font-serif font-bold text-gray-900">
                Artistas Destacados
            </h1>
            <p class="text-gray-600 mt-2 text-sm max-w-lg">
                Explora las mentes líricas y musicales detrás de nuestro archivo
                analógico. Voces indispensables del rock en español, el folk y
                la música de autor.
            </p>
        </div>
        <div
            class="text-xs uppercase tracking-widest text-stone-500 font-semibold"
        >
            {artistas.length} Artistas en Catálogo
        </div>
    </div>

    <!-- Cuadrícula de Artistas -->
    <section
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
        {#each artistas as artista}
            <Artistcard
                name={artista.name}
                genre={artista.genre}
                image={artista.image}
                albumsCount={artista.albumsCount}
                slug={artista.slug}
            />
        {/each}
    </section>
</div>
