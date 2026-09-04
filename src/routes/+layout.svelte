<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Icon from "@iconify/svelte";
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav>
	<div>
		<span></span>
		<p>Vinilos Clásicos</p>
	</div>

	<div>
		<a href="/">Inicio</a>
		<a href="/catalogo">Catálogo</a>
		<a href="/categorias">Categorias</a>
		<a href="/artistas">Artistas</a>
	</div>

	<div>
		<a href="/carrito">
		<Icon icon="akar-icons:shopping-bag" />
		</a>
		
	</div>
</nav>

{@render children()}

<footer>
	<div></div>
</footer>
