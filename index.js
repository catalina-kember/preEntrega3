import { inicializarProductos, agregarAlCarrito, productos } from './clases.js';

(function () {
    emailjs.init("9ToHWXWvwopbPuhDc")
})();

const ArrayDeProductos = [];
import { ArrayCarrito } from './clases.js';
let idUniversal = 1;

inicializarProductos(ArrayDeProductos, idUniversal);

let productoEncontrado = {};
let productosCarrito = [];


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



function agregarAlCarrito(productoAgregar) {

    const existeEnCarrito = productosCarrito.some((productos) => productos.id === productoAgregar.id);

    if (existeEnCarrito) {
        const productos = productosCarrito.map((producto) => {
            if (productos.id === productoAgregar.id) {
                productos.cantidad++;
                productos.subtotal = productos.precio * productos.cantidad;

                
                return productos;
            } else {
                return productos;
            }
        });

        productosCarrito = productos; 
        productosCarrito.push(productoAgregar); 
    }

}


let ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
if (ArrayCarrito === null) {
    ArrayCarrito = []
}



const app = document.querySelector("#app");


buttonHeader.addEventListener("click", () => {
    app.innerHTML = ''
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
        const buttonAgregar = document.createElement("button");
        buttonAgregar.innerText = "Agregar";
        buttonAgregar.addEventListener("click", () => {
            agregarAlCarrito(el);
            localStorage.setItem("carrito", JSON.stringify(ArrayCarrito))
        })
    
        tarjeta.appendChild(buttonAgregar);
        app.appendChild(tarjeta);
    })
}
mostrarProductos();


let buscar = ""

const productoExsistente = (buscar) => {
    buscar = prompt("ingrese el producto que desee buscar. De caso de querer terminar ingrese 'fin': ")
}

const productoInexistente = (buscar) => {
    alert("el producto ingresado no exsiste")
    buscar = prompt("ingrese el producto que desee buscar. De caso de querer terminar ingrese 'fin': ")
}

const verProductos = (productoExsistente, productoInexistente) => {

    buscar = prompt("ingrese el producto que desee buscar. De caso de querer terminar ingrese 'fin': ")

    while (buscar != "fin") {
        let exsiste = ArrayDeProductos.includes(buscar)
        exsiste == "true" ? productoExsistente(buscar) : productoInexistente(buscar)
    }
}

verProductos(productoExsistente, productoInexistente);

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

