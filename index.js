//----------------------------------------Productos---------------------------------------------------------------------
//````````````````````````````
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
const enduro = document.getElementById('enduro');
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




const vaciarlocal = document.createElement('button')
vaciarlocal.innerText = 'borrar borrar borrar' 
enduro.appendChild(vaciarlocal)
vaciarlocal.addEventListener('click', () => {
    localStorage.clear()
})



//-----------------------------Creando cards FORMA 1 QUE FUNCIONA PERO NO RETORNA TOTALCOMPRA------------------







//  let carrito = []
//  let carritoprecios = []
//  let totalcompra = 0
//  console.log(motos);
//  const enduro = document.getElementById('enduro')
//  const carrito_lateral = document.getElementById('carrito_lateral')
//  motos.forEach((producto) => {
//     const cardEnduro = document.createElement('div')
//     cardEnduro.setAttribute('class', 'cardEnduro')

//     cardEnduro.innerHTML = `
//     <h2>${producto.nombre}</h2>
//     <h3>${producto.precio}</h3>
//     <button id="agregar${producto.abreviado}"></button>
//     `
//     enduro.appendChild(cardEnduro)
//     const boton = document.getElementById(`agregar${producto.abreviado}`)
//     boton.addEventListener('click', () => {
//         agregarCarrito(producto.abreviado)
//     })
// })
// function agregarCarrito (prodabr) {
//     const item = motos.find ((prod) => prod.abreviado === prodabr)
//     actcarrito()
//     carrito.push(item)
//     console.log(carrito)
// }
// function eliminardelcarrito(artiabr) {
//     const item = carrito.find ((arti) => arti.abreviado === artiabr)
//     actcarrito()
//     carrito.splice(item, 1)
//     console.log(carrito)
// }
// function actcarrito() {
//     carrito_lateral.innerHTML = ""
//     for (let index = 0; index < carrito.length; index++) {
//         const prod = carrito[index];
//         const carritodiv = document.createElement('div')
//         carritodiv.innerHTML = `
//         <h2>${prod.nombre}</h2>
//         <h3>${prod.precio}</h3>
//         <button id="botoneliminarcarrito${prod.abreviado}"></button>
//         `
//         carrito_lateral.appendChild(carritodiv)
//         const botonelim = document.getElementById(`botoneliminarcarrito${prod.abreviado}`)
//         botonelim.addEventListener('click', () => {
//             eliminardelcarrito(prod.abreviado)
//         })
//     }
// }











//--------------------------Elección de articulo--------------------------------------
// let totalcompra = 0

// let listaproductos = document.getElementById('listaproductos')

// // let seguircomprando = true
// // let carrito = []
// // let decision
// // let buscarproducto
// // console.log (carrito)
// // while (seguircomprando = true){
// //     let articulo = parseInt (prompt('¿Qué moto desea comprar?' + '\n' + 
// //     '1-' + hondaxr190roja.nombre + '\n' +
// //     '2-' + hondaxr125roja.nombre + '\n' +
// //     '3-' + hondatwister125azul.nombre
// //     ))
// //     if (articulo === 1) {
// //         buscarproducto = productos.indexOf (hondaxr190roja)
// //         carrito.push (productos[buscarproducto])
// //         totalcompra = totalcompra + (productos[buscarproducto]).precio
// //     } else if (articulo === 2){
// //         buscarproducto = productos.indexOf (hondaxr125roja)
// //         carrito.push (productos[buscarproducto])
// //         totalcompra = totalcompra + (productos[buscarproducto]).precio
// //     } else if (articulo === 3){
// //         buscarproducto = productos.indexOf (hondatwister125azul)
// //         carrito.push (productos[buscarproducto])
// //         totalcompra = totalcompra + (productos[buscarproducto]).precio
// //     } else {
// //         let articulo = parseInt (prompt('¿Qué moto desea comprar?' + '\n' + 
// //         '1-' + hondaxr190roja.nombre + '\n' +
// //         '2-' + hondaxr125roja.nombre + '\n' +
// //         '3-' + hondatwister125azul.nombre)
// //         )    
// //     }
// //     decision = parseInt(prompt('¿Desea seguir comprando?' + '\n' + '1-Si' + '\n' + '2-No'))
// //     if (decision === 1){
// //         continue
// //     } else if (decision === 2){
// //         seguircomprando = false
// //     }
// //     break
// // }
// // alert('El monto de su carrito es de ' + totalcompra)

// // //------------------------------------Crédito-----------------------------------
// // let disponibilidadcredito = true
// // let disponibilidadcreditobbva = true
// // let antiguedadlaboral
// // let recibodesueldo
// // let montoafinanciar
// // let divisadelcredito

// // if (disponibilidadcredito = false){
// //     disponibilidadcreditobbva = false
// // } 

// // //--------------------------FUNCIONES BBVA--------------------------------------


// // function cuotasbbva12 (valorafinanciar){
// //     let valorcuota12 = (valorafinanciar / 1000 * 91)
// //     return valorcuota12
// // }
// // function cuotasbbva18 (valorafinanciar){
// //     let valorcuota18 = (valorafinanciar / 1000 * 64)
// //     return valorcuota18
// // }
// // function cuotasbbva24 (valorafinanciar){
// //     let valorcuota24 = (valorafinanciar / 1000 * 48)
// //     return valorcuota24
// // }
// // function cuotasbbva36 (valorafinanciar){
// //     let valorcuota36 = (valorafinanciar / 1000 * 34)
// //     return valorcuota36
// // }
// // function cuotasbbva48 (valorafinanciar){
// //     let valorcuota48 = (valorafinanciar / 1000 * 27)
// //     return valorcuota48
// // }
// // function cuotasbbva60 (valorafinanciar){
// //     let valorcuota60 = (valorafinanciar / 1000 * 22)
// //     return valorcuota60
// // }

// // //-------------------------Cuestionario----------------------------------------

// // while (disponibilidadcredito = true) {
// //     antiguedadlaboral = parseInt (prompt ('Indique su antigüedad laboral aqui (en meses):'))
// //     if (antiguedadlaboral >= 12){
// //     disponibilidadcredito = true
// //     } else {
// //     alert ('No tiene créditos disponibles')
// //     break
// //     }

// //     recibodesueldo = parseInt (prompt ('Indique su sueldo líquido (en pesos uruguayos):'))
// //     if (recibodesueldo >= 25000 && antiguedadlaboral >= 12){
// //         disponibilidadcreditobbva = true
// //     } else {
// //         disponibilidadcredito = false
// //         alert ('No tiene créditos disponibles')
// //         break    
// //     }

// //     while (disponibilidadcreditobbva = true){

// //         let precio12cuotas = cuotasbbva12 (totalcompra)
// //         let precio18cuotas = cuotasbbva18 (totalcompra)
// //         let precio24cuotas = cuotasbbva24 (totalcompra)
// //         let precio36cuotas = cuotasbbva36 (totalcompra)
// //         let precio48cuotas = cuotasbbva48 (totalcompra)
// //         let precio60cuotas = cuotasbbva60 (totalcompra)

// //         alert ('Las cuotas disponibles son: ' + '\n' + 
// //         '12 cuotas de USD ' +Math.round(precio12cuotas) + ' dolares' + '\n' +
// //         '18 cuotas de USD ' +Math.round(precio18cuotas) + ' dolares' + '\n' +
// //         '24 cuotas de USD ' +Math.round(precio24cuotas) + ' dolares' + '\n' +
// //         '36 cuotas de USD ' +Math.round(precio36cuotas) + ' dolares' + '\n' +
// //         '48 cuotas de USD ' +Math.round(precio48cuotas) + ' dolares' + '\n' +
// //         '60 cuotas de USD ' +Math.round(precio60cuotas)
// //         )
// //         break
// //     }
// //     break
// // }

