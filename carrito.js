const ArrayDeProductos = [];
let ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
if (ArrayCarrito === null) {
    ArrayCarrito = []
}

let idUniversal = 1;

const app = document.querySelector("#app");
const buttonHeader = document.querySelector("#header_button");

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


const finalizarCompra = () => {
    // PRECESODE PAGO
    //
    //
    ArrayCarrito = []
    localStorage.remove("carrito")
}
