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



