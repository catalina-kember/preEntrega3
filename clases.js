export class productos {
    constructor(productoRecibidoPorParametro) {
        const { nombre, precio, descripcion, id, url } = productoRecibidoPorParametro;
            this.nombre = nombre;
            this.precio = precio;
            this.descripcion = descripcion;
            this.id = id;
            this.url = url;
    }
}

const ArrayDeProductos = [];

export function inicializarProductos(ArrayDeProductos, idUniversal) {
    const mandalac = new productos({nombre:"mandala chica",precio:1000,descripcion: "20cm", id:idUniversal++ ,url:"./img/mandala1.jpg"})
    ArrayDeProductos.push(mandalac);

    const mandalam = new productos({nombre:"mandala mediana",precio:2000,descripcion: "35 cm", id:idUniversal++ ,url:"./img/mandala2.jpg"})
    ArrayDeProductos.push(mandalam);

    const mandalag = new productos({nombre:"mandala grande",precio:4000,descripcion: "50 cm", id:idUniversal++ ,url:"./img/mandala3.jpg"})
    ArrayDeProductos.push(mandalag);

    const canastac = new productos({nombre:"canasta chica",precio:1000,descripcion: "10 cm", id:idUniversal++ ,url:"./img/canastos1.jpg"})
    ArrayDeProductos.push(canastac);

    const canastam = new productos({nombre:"canasta mediana",precio:1500,descripcion: "15 cm", id:idUniversal++ ,url:"./img/canastos2.jpg"})
    ArrayDeProductos.push(canastam);

    const canastag = new productos({nombre: "canasta grande",precio:2000,descripcion: "20 cm", id:idUniversal++ ,url:"./img/canastos3.jpg"})
    ArrayDeProductos.push(canastag);
    
}

export const agregarAlCarrito = (carrito, producto) => {
    carrito.push(producto)
}


export const CANTIDAD_MAXIMA_DEL_CARRITO = 10;