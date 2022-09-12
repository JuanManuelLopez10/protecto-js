let productos = []

class Moto{
    constructor (categoria, estilo, marca, modelo, cilindrada, color, precio, id){
        this.categoria = categoria
        this.estilo = estilo
        this.marca = marca
        this.modelo = modelo
        this.cilindrada = cilindrada
        this.color = color
        this.precio = precio
        this.id = id
        this.nombre = this.marca + " " + this.modelo + " " + this.cilindrada + " " + this.color
    }
}
const hondaxr190roja = new Moto ("Moto", "Enduro", "Honda", "XR", 190, "Roja", 4990, 103010101)
productos.push (hondaxr190roja)
const hondaxr190negra = new Moto ("Moto", "Enduro", "Honda", "XR", 190, "Negra", 4990, 103010201)
productos.push (hondaxr190negra)
const hondaxr190blanca = new Moto ("Moto", "Enduro", "Honda", "XR", 190, "Blanca", 4990, 103010301)
productos.push (hondaxr190blanca)
const hondaxr125roja = new Moto ("Moto", "Enduro", "Honda", "XR", 125, "Roja", 3990, 103010102)
productos.push (hondaxr125roja)
const hondatwister125azul = new Moto ("Moto", "Enduro", "Honda", "Twister", 125, "Azul", 2490, 102010401)
productos.push (hondatwister125azul)

//--------------------------Elección de articulo--------------------------------------
let totalcompra = 0

let listaproductos = document.getElementById('listaproductos')

productos.forEach(producto => {
    const option = document.createElement('option')
    option.innerText = producto.nombre
    listaproductos.append(option)
    option.setAttribute('value', producto.id)
    if (listaproductos.value == producto.id){
        totalcompra = totalcompra + producto.precio
    }
});

console.log (totalcompra)
const aaa = document.getElementById('aaa')
let totalcompratitulo = document.createElement('h2')
totalcompratitulo.innerText = totalcompra
aaa.append(totalcompratitulo)

// let seguircomprando = true
// let carrito = []
// let decision
// let buscarproducto
// console.log (carrito)
// while (seguircomprando = true){
//     let articulo = parseInt (prompt('¿Qué moto desea comprar?' + '\n' + 
//     '1-' + hondaxr190roja.nombre + '\n' +
//     '2-' + hondaxr125roja.nombre + '\n' +
//     '3-' + hondatwister125azul.nombre
//     ))
//     if (articulo === 1) {
//         buscarproducto = productos.indexOf (hondaxr190roja)
//         carrito.push (productos[buscarproducto])
//         totalcompra = totalcompra + (productos[buscarproducto]).precio
//     } else if (articulo === 2){
//         buscarproducto = productos.indexOf (hondaxr125roja)
//         carrito.push (productos[buscarproducto])
//         totalcompra = totalcompra + (productos[buscarproducto]).precio
//     } else if (articulo === 3){
//         buscarproducto = productos.indexOf (hondatwister125azul)
//         carrito.push (productos[buscarproducto])
//         totalcompra = totalcompra + (productos[buscarproducto]).precio
//     } else {
//         let articulo = parseInt (prompt('¿Qué moto desea comprar?' + '\n' + 
//         '1-' + hondaxr190roja.nombre + '\n' +
//         '2-' + hondaxr125roja.nombre + '\n' +
//         '3-' + hondatwister125azul.nombre)
//         )    
//     }
//     decision = parseInt(prompt('¿Desea seguir comprando?' + '\n' + '1-Si' + '\n' + '2-No'))
//     if (decision === 1){
//         continue
//     } else if (decision === 2){
//         seguircomprando = false
//     }
//     break
// }
// alert('El monto de su carrito es de ' + totalcompra)

// //------------------------------------Crédito-----------------------------------
// let disponibilidadcredito = true
// let disponibilidadcreditobbva = true
// let antiguedadlaboral
// let recibodesueldo
// let montoafinanciar
// let divisadelcredito

// if (disponibilidadcredito = false){
//     disponibilidadcreditobbva = false
// } 

// //--------------------------FUNCIONES BBVA--------------------------------------


// function cuotasbbva12 (valorafinanciar){
//     let valorcuota12 = (valorafinanciar / 1000 * 91)
//     return valorcuota12
// }
// function cuotasbbva18 (valorafinanciar){
//     let valorcuota18 = (valorafinanciar / 1000 * 64)
//     return valorcuota18
// }
// function cuotasbbva24 (valorafinanciar){
//     let valorcuota24 = (valorafinanciar / 1000 * 48)
//     return valorcuota24
// }
// function cuotasbbva36 (valorafinanciar){
//     let valorcuota36 = (valorafinanciar / 1000 * 34)
//     return valorcuota36
// }
// function cuotasbbva48 (valorafinanciar){
//     let valorcuota48 = (valorafinanciar / 1000 * 27)
//     return valorcuota48
// }
// function cuotasbbva60 (valorafinanciar){
//     let valorcuota60 = (valorafinanciar / 1000 * 22)
//     return valorcuota60
// }

// //-------------------------Cuestionario----------------------------------------

// while (disponibilidadcredito = true) {
//     antiguedadlaboral = parseInt (prompt ('Indique su antigüedad laboral aqui (en meses):'))
//     if (antiguedadlaboral >= 12){
//     disponibilidadcredito = true
//     } else {
//     alert ('No tiene créditos disponibles')
//     break
//     }

//     recibodesueldo = parseInt (prompt ('Indique su sueldo líquido (en pesos uruguayos):'))
//     if (recibodesueldo >= 25000 && antiguedadlaboral >= 12){
//         disponibilidadcreditobbva = true
//     } else {
//         disponibilidadcredito = false
//         alert ('No tiene créditos disponibles')
//         break    
//     }

//     while (disponibilidadcreditobbva = true){

//         let precio12cuotas = cuotasbbva12 (totalcompra)
//         let precio18cuotas = cuotasbbva18 (totalcompra)
//         let precio24cuotas = cuotasbbva24 (totalcompra)
//         let precio36cuotas = cuotasbbva36 (totalcompra)
//         let precio48cuotas = cuotasbbva48 (totalcompra)
//         let precio60cuotas = cuotasbbva60 (totalcompra)

//         alert ('Las cuotas disponibles son: ' + '\n' + 
//         '12 cuotas de USD ' +Math.round(precio12cuotas) + ' dolares' + '\n' +
//         '18 cuotas de USD ' +Math.round(precio18cuotas) + ' dolares' + '\n' +
//         '24 cuotas de USD ' +Math.round(precio24cuotas) + ' dolares' + '\n' +
//         '36 cuotas de USD ' +Math.round(precio36cuotas) + ' dolares' + '\n' +
//         '48 cuotas de USD ' +Math.round(precio48cuotas) + ' dolares' + '\n' +
//         '60 cuotas de USD ' +Math.round(precio60cuotas)
//         )
//         break
//     }
//     break
// }

