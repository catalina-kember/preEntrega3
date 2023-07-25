export function listarProductos() {
    const listaOrdenada = document.createElement('ol');
    Swal.fire({
        title: 'Desea mostrar la lista de productos?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
    }).then(async (botonRespuesta) => {
        if (botonRespuesta.isConfirmed) {
            const listaDeProducto = await cargarProductos();
            console.log(listaDeProducto);

            listaDeProducto.forEach((producto) => {
                const li = document.createElement('li');
                li.textContent = `ID: ${producto.id} / Nombre: ${producto.nombre} / Precio: $${producto.precio}`;
                listaOrdenada.appendChild(li);
            });

            document.body.appendChild(listaOrdenada);
        }
    });
}

import { ArrayCarrito } from './clases.js';

export async function cargarProductos() {
    const response = await fetch(url);
    const productos = await response.json();
    return productos;
}

export let finalizarCompra = (ArrayCarrito) => {
    let pagoCuotas = () => {

        let rta = prompt("desea calcular un pago (si/no): ")

        while (rta == "si") {
            let precio = parseInt(prompt("ingrese el precio del producto: "))
            let cantidad = parseInt(prompt("ingrese la cantidad: "))

            precioTotal = precio * cantidad

            let cuotas = parseInt(prompt("ingrese en cuantas cuotas lo va a pagar(1/2/3): "))
            cuotas == 1 ? alert("el precio final a pagar es de: " + precio) : casoNegativo(precio, cuotas)
            let rta = prompt("desea calcular un pago (si/no): ")
        }
    }
    ArrayCarrito = []
    localStorage.removeItem("carrito")

}
