let productos = []
let motos = []
//-------------------------------------------------------------------------------------------------------------

class Moto{
    constructor (id, abreviado, categoria, estilo, marca, modelo, cilindrada, color, precio, cantidad){
        this.id = id
        this.abreviado = abreviado
        this.categoria = categoria
        this.estilo = estilo
        this.marca = marca
        this.modelo = modelo
        this.cilindrada = cilindrada
        this.color = color
        this.precio = precio
        this.cantidad = cantidad
        this.nombre = this.marca + " " + this.modelo + " " + this.cilindrada + " " + this.color
    }
}

const hondaxr125roja = new Moto (103010304, "hondaxr125roja", "Moto", "Enduro", "Honda", "XR", 125, "Roja", 3990, 0)
productos.push (hondaxr125roja)
motos.push (hondaxr125roja)
const hondaxr125negra = new Moto (103010301, "hondaxr125negra", "Moto", "Enduro", "Honda", "XR", 125, "Negra", 3990, 0)
productos.push (hondaxr125negra)
motos.push (hondaxr125negra)
const hondaxr190roja = new Moto (103010404, "hondaxr190roja", "Moto", "Enduro", "Honda", "XR", 190, "Roja", 4990, 0)
productos.push (hondaxr190roja)
motos.push (hondaxr190roja)
const hondaxr190negra = new Moto (103010401, "hondaxr190negra", "Moto", "Enduro", "Honda", "XR", 190, "Negra", 4990, 0)
productos.push (hondaxr190negra)
motos.push (hondaxr190negra)
const hondaxr190blanca = new Moto (103010402, "hondaxr190blanca", "Moto", "Enduro", "Honda", "XR", 190, "Blanca", 4990, 0)
productos.push (hondaxr190blanca)
motos.push (hondaxr190blanca)
const hondaxre190roja = new Moto (103010504, "hondaxre190roja", "Moto", "Enduro", "Honda", "XRE", 190, "Roja", 6890, 0)
productos.push (hondaxre190roja)
motos.push (hondaxre190roja)
const hondaxre190azul = new Moto (103010505, "hondaxre190azul", "Moto", "Enduro", "Honda", "XRE", 190, "Azul", 6890, 0)
productos.push (hondaxre190azul)
motos.push (hondaxre190azul)
const hondaxre300verde = new Moto (103010706, "hondaxre300verde", "Moto", "Enduro", "Honda", "XRE", 300, "Verde", 7490, 0)
productos.push (hondaxre300verde)
motos.push (hondaxre300verde)
const hondaxre300azul = new Moto (103010705, "hondaxre300azul", "Moto", "Enduro", "Honda", "XRE", 300, "Azul", 7490, 0)
productos.push (hondaxre300azul)
motos.push (hondaxre300azul)
const hondaxre300roja = new Moto (103010704, "hondaxre300roja", "Moto", "Enduro", "Honda", "XRE", 300, "Roja", 7490, 0)
productos.push (hondaxre300roja)
motos.push (hondaxre300roja)

let carrito = [];
let carritoconduplicados = []
let carritoprecios = [];
let totalcompra = JSON.parse(localStorage.getItem('total'))
const enduro = document.getElementById('Enduro');
const carrito_lateral = document.getElementById('carrito_lateral');
const contador = document.createElement('h4')
carrito_lateral.appendChild(contador)
for (let i = 0; i < motos.length; i++) {
    contador.innerText = ""
    const producto = motos[i];
    const cardEnduro = document.createElement('button');
    const imagen = document.createElement('a')
    imagen.setAttribute('href', 'https://www.motospunta.com/')
    imagen.innerHTML = `
    <img src="./${producto.abreviado}.png" alt="${producto.nombre}" class="imagendivarticulo">`
    cardEnduro.appendChild(imagen)
    const tituloCard = document.createElement('p');
    const preciomoto = document.createElement('p');
    const botonagregarcarrito = document.createElement('button');
    botonagregarcarrito.innerText = 'Agregar al carrito';
    preciomoto.innerText = 'USD ' + producto.precio;
    tituloCard.innerText = producto.nombre;
    cardEnduro.appendChild(tituloCard);
    cardEnduro.appendChild(preciomoto);
    cardEnduro.appendChild(botonagregarcarrito);
    enduro.append(cardEnduro);
    cardEnduro.setAttribute('class', 'cardEnduro');
    botonagregarcarrito.addEventListener('click', () => {
        clickbotoncarrito(producto)
        carritoconduplicados.push(producto)
        contador.innerText = totalcompra
        console.log(carrito.includes(producto));
        carrito = carritoconduplicados.filter((item,index)=>{
            return carritoconduplicados.indexOf(item) === index;
          })
        console.log(carrito)
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
};

function clickbotoncarrito (product) {
    console.log(product.precio);
    carritoprecios.push(product.precio)
    product.cantidad++
    const divarticulocarrito = document.createElement('div');
    const nombrearticulocarrito = document.createElement('h3');
    const precioarticulocarrito = document.createElement('h4');
    const botoneliminardelcarrito = document.createElement('button')
    nombrearticulocarrito.innerText = product.nombre;
    precioarticulocarrito.innerText = product.precio;
    precioarticulocarrito.setAttribute('class', 'precioarticulocarrito');
    divarticulocarrito.setAttribute('class' , 'divarticulocarrito')
    divarticulocarrito.appendChild(nombrearticulocarrito);
    divarticulocarrito.appendChild(precioarticulocarrito);
    divarticulocarrito.appendChild(botoneliminardelcarrito)
    carrito_lateral.appendChild(divarticulocarrito);
    totalcompra = product.precio + JSON.parse(localStorage.getItem('total'))
    console.log(totalcompra);
    botoneliminardelcarrito.addEventListener('click', () => {
        carrito_lateral.removeChild(divarticulocarrito)
        totalcompra = JSON.parse(localStorage.getItem('total')) - product.precio
        console.log(totalcompra)
        console.log(carrito);
        contador.innerText = totalcompra
        carrito.splice(product, 1)
    })
    localStorage.setItem('total', totalcompra)
    console.log(carrito);
}
