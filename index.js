//----------------------------------------Productos---------------------------------------------------------------------
document
let productos = []
let motos = []
//-------------------------------------------------------------------------------------------------------------

class Moto{
    constructor (id, categoria, estilo, marca, modelo, cilindrada, color, precio){
        this.id = id
        this.categoria = categoria
        this.estilo = estilo
        this.marca = marca
        this.modelo = modelo
        this.cilindrada = cilindrada
        this.color = color
        this.precio = precio
        this.nombre = this.marca + " " + this.modelo + " " + this.cilindrada + " " + this.color
    }
}

const hondaxr125roja = new Moto (103010304, "Moto", "Enduro", "Honda", "XR", 125, "Roja", 3990)
productos.push (hondaxr125roja)
motos.push (hondaxr125roja)
const hondaxr125negra = new Moto (103010301, "Moto", "Enduro", "Honda", "XR", 125, "Negra", 3990)
productos.push (hondaxr125negra)
motos.push (hondaxr125negra)
const hondaxr190roja = new Moto (103010404, "Moto", "Enduro", "Honda", "XR", 190, "Roja", 4990)
productos.push (hondaxr190roja)
motos.push (hondaxr190roja)
const hondaxr190negra = new Moto (103010401, "Moto", "Enduro", "Honda", "XR", 190, "Negra", 4990)
productos.push (hondaxr190negra)
motos.push (hondaxr190negra)
const hondaxr190blanca = new Moto (103010402, "Moto", "Enduro", "Honda", "XR", 190, "Blanca", 4990)
productos.push (hondaxr190blanca)
motos.push (hondaxr190blanca)
const hondaxre190roja = new Moto (103010504, "Moto", "Enduro", "Honda", "XRE", 190, "Roja", 6890)
productos.push (hondaxre190roja)
motos.push (hondaxre190roja)
const hondaxre190azul = new Moto (103010505, "Moto", "Enduro", "Honda", "XRE", 190, "Azul", 6890)
productos.push (hondaxre190azul)
motos.push (hondaxre190azul)
const hondaxre300verde = new Moto (103010706, "Moto", "Enduro", "Honda", "XRE", 190, "Verde", 7490)
productos.push (hondaxre300verde)
motos.push (hondaxre300verde)
const hondaxre300azul = new Moto (103010705, "Moto", "Enduro", "Honda", "XRE", 190, "Azul", 7490)
productos.push (hondaxre300azul)
motos.push (hondaxre300azul)
const hondaxre300roja = new Moto (103010704, "Moto", "Enduro", "Honda", "XRE", 190, "Roja", 7490)
productos.push (hondaxre300roja)
motos.push (hondaxre300roja)

const hondatwister125azul = new Moto (102010401, "Moto", "Naked", "Honda", "Twister", 125, "Azul", 2490)
productos.push (hondatwister125azul)
motos.push (hondatwister125azul)

//-----------------------------Creando cards------------------
let carrito = []
let totalcompra = 0
const enduro = document.getElementById('enduro')
const carrito_lateral = document.getElementById('carrito_lateral')
for (const producto of motos) {
    if (producto.estilo){
        const cardEnduro = document.createElement('div')
        const tituloCard = document.createElement('h2')
        const preciomoto = document.createElement('h3')
        const botonagregarcarrito = document.createElement('button')
        botonagregarcarrito.innerText = 'Agregar al carrito'
        preciomoto.innerText = 'USD ' + producto.precio
        tituloCard.innerText = producto.nombre
        cardEnduro.appendChild(tituloCard)
        cardEnduro.appendChild(preciomoto)
        cardEnduro.appendChild(botonagregarcarrito)
        enduro.append(cardEnduro)
        cardEnduro.setAttribute('class', 'cardEnduro')
        botonagregarcarrito.onclick = function clickbotoncarrito () {
            carrito.push(producto)
            const divarticulocarrito = document.createElement('div')
            const nombrearticulocarrito = document.createElement('h3')
            const precioarticulocarrito = document.createElement('h4')
            nombrearticulocarrito.innerText = producto.nombre
            precioarticulocarrito.innerText = producto.precio
            precioarticulocarrito.setAttribute('class', 'precioarticulocarrito')
            divarticulocarrito.appendChild(nombrearticulocarrito)
            divarticulocarrito.appendChild(precioarticulocarrito)
            carrito_lateral.appendChild(divarticulocarrito)
            let totalcompraa = totalcompra + producto.precio
            console.log(totalcompraa)
            return totalcompraa
        }
    }
}

// motos.forEach(producto => {
//     if (producto.estilo){
//         const cardEnduro = document.createElement('div')
//         const tituloCard = document.createElement('h2')
//         const preciomoto = document.createElement('h3')
//         const botonagregarcarrito = document.createElement('button')
//         botonagregarcarrito.innerText = 'Agregar al carrito'
//         preciomoto.innerText = 'USD ' + producto.precio
//         tituloCard.innerText = producto.nombre
//         cardEnduro.appendChild(tituloCard)
//         cardEnduro.appendChild(preciomoto)
//         cardEnduro.appendChild(botonagregarcarrito)
//         enduro.append(cardEnduro)
//         cardEnduro.setAttribute('class', 'cardEnduro')

//     }
// });


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

