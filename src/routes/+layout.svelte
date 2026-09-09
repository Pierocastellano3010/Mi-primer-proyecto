<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Icon from "@iconify/svelte";
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="flex justify-between items-center px-5 py-2">
	<div class="flex bg-amber-200 rounded px-5 py-2 items-center">
		<Icon icon="arcticons:vinyl" />
		<p>Vinilos Clásicos</p>
	</div>

	<div class="bg-amber-200 rounded px-5 py-2">
		<a href="/">Inicio</a>
		<a href="/catalogo">Catálogo</a>
		<a href="/categorias">Categorias</a>
		<a href="/artistas">Artistas</a>
	</div>

	<div class="flex bg-amber-200 rounded px-5 py-2 items-center">
		<Icon icon="el:usd" />
		<p>Usd</p>
		<a href="/carrito">
			<Icon icon="akar-icons:shopping-bag" />
		</a>
	</div>
</nav>

{@render children()}

<footer class="flex bg-amber-100 justify-between items-center rounded px-6 py-3">
	<div class="flex-1">
		<p>Vinilos Clásicos</p>
		<p>
			Preservando el legado de la música mexicana y el rock clásico en su
			formato mas puro.
		</p>
	</div>
	<div class="flex-1">
		<p>contacto</p>
		<p>Calle de la Melodía 123, CDMX</p>
		<p>+52 55 1234 5678</p>
	</div>
	<div class="flex-1">
		<button class="bg-amber-50"
			><Icon icon="ant-design:share-alt-outlined" /></button
		>
		<button class="bg-amber-50"><Icon icon="bx:world" /></button>
	</div>
</footer>
