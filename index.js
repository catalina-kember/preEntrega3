import { inicializarProductos, agregarAlCarrito, CANTIDAD_MAXIMA_DEL_CARRITO } from './clases.js';

(function () {
    emailjs.init("9ToHWXWvwopbPuhDc")
})();

import { ArrayDeProductos} from './clases.js';
import { ArrayCarrito } from './clases.js';
let idUniversal = 1;
const contenedorProductos = document.querySelector('#contenedor-productos')

inicializarProductos(ArrayDeProductos, idUniversal);

let productoEncontrado = {};



const buttonMail = document.querySelector("#btnemail");


buttonMail.addEventListener("click", () => {

    const { value: email } =  Swal.fire({
        title: 'ingrese su email',
        input: 'email',
        inputLabel: 'Your email address',
        inputPlaceholder: 'Enter your email address'
    })

    if (email) {
        Swal.fire(`ingrese emial: ${email}`)
    }

    console.log("enviando email)")

    let templateParams = {
        user_mail: email,
        reply_to: email,
        send_to: email,
        message: 'Hola, cual es su consulta?en la brevedad le estaremos respondiendo'
    };

    emailjs.send('service_9g6akir', 'template_1lbb9dm', templateParams)
        .then(function (response) {
            console.log('mail enviado con exito!', response.status, response.text);
        }, function (error) {
            console.log('no pudimos enviar el mail, vuelva a intentar', error);
        }
    );

    return (email)
})



const tarjetas = document.querySelector("#tarjetas");
const buttonHeader = document.querySelector("#header_button");
const input = document.querySelector("#search");

input.addEventListener("input", (event) => {
    productoEncontrado = ArrayDeProductos.find(el => el.nombre === event.target.value)
})

input.addEventListener("keypress", (event) => {
    (event.key === "Enter" && productoEncontrado) && console.log("el producto es:", productoEncontrado)
})


header_button.addEventListener("click", () => {
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




const mostrarProductos = (el) => {

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
        tarjetas.appendChild(tarjeta);
    })
}

mostrarProductos();

import { finalizarCompra } from './funciones.js';
finalizarCompra();

let buscar = ""

const productoExsistente = (buscar) => {
    alert(ArrayProductos(buscar));
    buscar = prompt("ingrese el producto que desee buscar. De caso de querer terminar ingrese 'fin': ")
}

const productoInexistente = (buscar) => {
    alert("el producto ingresado no exsiste")
    buscar = prompt("ingrese el producto que desee buscar. De caso de querer terminar ingrese 'fin': ")
}

const verProductos = () => {

    buscar = prompt("ingrese el producto que desee buscar. De caso de querer terminar ingrese 'fin': ")

    while (buscar != "fin") {
        let exsiste = ArrayProductos.includes(buscar)
        exsiste == "true" ? productoExsistente(buscar) : productoInexistente(buscar)
    }
}
verProductos();

let carrito = JSON.parse(localStorage.getItem('carrito')) || []

let carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'))

if (carritoLocalStorage) {
    carrito = carritoLocalStorage
} else {
    carrito = []
}


btnClick.addEventListener('click', () => {
    Swal.fire({
        title: '¿Confirma compra?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        showConfirmButton: true,


    }).then((btnResult) => {
        if (btnResult.isConfirmed) {
            Swal.fire({
                title: 'Compra confirmada',
                icon: 'success',
                text: 'Su compra se realizo con éxito',
            });
        } else {
            Swal.fire({
                title: 'Compra cancelada',
                icon: 'error',
                text: 'Su compra fue cancelada',
            });
        }
    });
});

btnClick2.addEventListener('click');

import { cargarProductos } from './funciones.js';
cargarProductos();

import { listarProductos } from './funciones.js';

btnClick2.addEventListener('click', listarProductos);