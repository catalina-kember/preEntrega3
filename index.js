import { inicializarProductos, agregarAlCarrito, CANTIDAD_MAXIMA_DEL_CARRITO } from './clases.js';

const ArrayDeProductos = [];
let ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || []; 
let idUniversal = 1;
const contenedorProductos = document.querySelector('#contenedor-productos')

inicializarProductos(ArrayDeProductos, idUniversal);

let productoEncontrado = {};


const app = document.querySelector("#app");
const buttonHeader = document.querySelector("#header_button");
const input = document.querySelector("#search");

input.addEventListener("input", (event) => {
    productoEncontrado = ArrayDeProductos.find(el => el.nombre === event.target.value)
})

input.addEventListener("keypress", (event) => {
    (event.key === "Enter" && productoEncontrado) && console.log("el producto es:", productoEncontrado)
})

buttonHeader.addEventListener("click", () => {
    app.innerHTML = '';
    ArrayCarrito.forEach(el => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        tarjeta.innerHTML = ` 
                        <div class="tarjeta_image"><img src="${el.url}" alt=""/></div>
                        <div class="tarjeta_informacion">
                            <span class="tarjeta_nombre">${el.nombre}</span>
                            <span class="tarjeta_precio">$${el.precio}</span>
                        </div>
        `

        app.appendChild(tarjeta);
    })

})
const mostrarProductos = (el) =>{
    ArrayDeProductos.forEach((el) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        tarjeta.innerHTML = ` 
                        <div class="tarjeta_image"><img src="${el.url}" alt=""/></div>
                        <div class="tarjeta_informacion">
                            <span class="tarjeta_nombre">${el.nombre}</span>
                            <span class="tarjeta_precio">$${el.precio}</span>
                        </div>
        `
        const buttonAgregar = document.createElement("boton");
        buttonAgregar.innerText = "Agregar";
        buttonAgregar.addEventListener("click", () => {
            agregarAlCarrito(ArrayCarrito, el);
            localStorage.setItem("carrito", JSON.stringify(ArrayCarrito))
        })
    
        tarjeta.appendChild(buttonAgregar);
        app.appendChild(tarjeta);
    })
}



const finalizarCompra = () => {
    const pagoCuotas = () => {

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
    localStorage.remove("carrito")

}

const productoExsistente = (buscar) => {
    alert(ArrayProductos(buscar));
    let buscar = prompt("ingrese el producto que desee buscar. De caso de querer terminar ingrese 'fin': ")
}

const productoInexistente = (buscar) =>{
    alert("el producto ingresado no exsiste")
    let buscar = prompt("ingrese el producto que desee buscar. De caso de querer terminar ingrese 'fin': ")
}

const verProfuctos = () => {

    let buscar = prompt("ingrese el producto que desee buscar. De caso de querer terminar ingrese 'fin': ")

    while (buscar != "fin") {
        let exsiste = ArrayProductos.includes(buscar)
        exsiste == "true" ? productoExsistente(buscar) : productoInexistente(buscar)
    }
}