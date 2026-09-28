<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Icon from "@iconify/svelte";
    import { text } from "@sveltejs/kit";
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="flex justify-between items-center px-6 py-4 bg-[#faf7f2] border-b border-stone-200">
  <!-- Logo -->
  <a href="/" class="flex items-center gap-3 no-underline text-stone-900">
    <div class="w-10 h-10 rounded-xl bg-[#e6e1f7] flex items-center justify-center text-[#7c62db]">
      <Icon icon="arcticons:vinyl" class="w-6 h-6" />
    </div>
    <span class="font-serif text-xl font-bold">Vinilos Clásicos</span>
  </a>

  <!-- Menú Central -->
  <div class="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-stone-600 uppercase">
    <a href="/" class="hover:text-black transition">Inicio</a>
    <a href="/catalogo" class="hover:text-black transition">Catálogo</a>
    <a href="/categorias" class="hover:text-black transition">Categorías</a>
    <a href="/artistas" class="hover:text-black transition">Artistas</a>
  </div>

  <!-- Opciones Derecha -->
  <div class="flex items-center gap-5 text-xs font-semibold text-stone-700">
    <div class="flex items-center gap-1">
      <Icon icon="el:usd" class="w-4 h-4" />
      <span>USD</span>
    </div>

    <a href="/carrito" class="relative text-stone-900 hover:opacity-80">
      <Icon icon="akar-icons:shopping-bag" class="w-6 h-6" />
      <span class="absolute -top-1.5 -right-2 bg-[#2a1b15] text-amber-50 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
        0
      </span>
    </a>
  </div>
</nav>

{@render children()}

<footer class="w-full bg-[#e8e2d9] text-stone-800 border-t border-stone-300">
  <!-- Información del Footer -->
  <div class="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
    <div>
      <h3 class="font-serif text-xl font-bold text-stone-900">Vinilos Clásicos</h3>
      <p class="text-xs text-stone-600 mt-1">Preservando el legado de la música mexicana y el rock clásico.</p>
    </div>

    <div class="text-xs text-stone-700 text-center md:text-right">
      <p class="font-bold uppercase text-[10px] text-stone-500 tracking-wider">Contacto</p>
      <p class="mt-0.5">contacto@vinilosclasicos.com • +52 55 1234 5678</p>
    </div>
  </div>

  <!-- Franja Marrón Inferior -->
  <div class="w-full h-4 bg-[#36322e]"></div>
</footer>
