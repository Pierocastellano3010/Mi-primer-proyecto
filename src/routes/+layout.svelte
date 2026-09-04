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
	<div>
		<p>Vinilos Clásicos</p>
		<p>
			Preservando el legado de la música mexicana y el rock clásico en su
			formato mas puro.
		</p>
	</div>
	<div>
		<p>contacto</p>
		<p>Calle de la Melodía 123, CDMX</p>
		<p>+52 55 1234 5678</p>
	</div>
	<div>
		<button><Icon icon="ant-design:share-alt-outlined" /></button>
		<button><Icon icon="bx:world" /></button>
	</div>
</footer>
