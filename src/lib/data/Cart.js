import { writable } from 'svelte/store';

/** @type {import('svelte/store').Writable<Array<any>>} */
export const cart = writable([]);

/**
 * @param {any} producto
 */
export function agregarAlCarrito(producto) {
  console.log("Intentando agregar producto:", producto);

  if (!producto) {
    console.error("El producto recibido es undefined o null");
    return;
  }

  cart.update((items) => {
    // Extraemos ID o slug
    const idProducto = producto.id || producto.slug;

    // Normalizamos el precio quitando el símbolo $ si viene como texto
    let rawPrice = producto.precio ?? producto.price ?? 0;
    if (typeof rawPrice === 'string') {
      rawPrice = parseFloat(rawPrice.replace(/[^0-9.-]+/g, '')) || 0;
    }

    const precioNormalizado = Number(rawPrice) || 0;
    const tituloNormalizado = producto.titulo || producto.name || 'Sin título';
    const imagenNormalizada = producto.imagen || producto.image || '';
    const artistaNormalizado = producto.artista || producto.des || '';

    const existe = items.find((item) => (item.id || item.slug) === idProducto);

    if (existe) {
      return items.map((item) =>
        (item.id || item.slug) === idProducto
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
    }

    return [
      ...items,
      {
        ...producto,
        id: idProducto,
        slug: idProducto,
        titulo: tituloNormalizado,
        imagen: imagenNormalizada,
        artista: artistaNormalizado,
        precio: precioNormalizado,
        cantidad: 1
      }
    ];
  });
}

/**
 * @param {string} id
 */
export function eliminarDelCarrito(id) {
  cart.update((items) => items.filter((item) => (item.id || item.slug) !== id));
}