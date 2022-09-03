// class Casco {
//     constructor (categoria, estilo, marca, modelo, diseño, color, precio){
//         this.categoria = categoria
//         this.estilo = estilo
//         this.marca = marca
//         this.modelo = modelo
//         this.diseño = diseño
//         this.color = color
//         this.precio = precio
//         this.nombre = this.categoria + " " + this.marca + " " + this.modelo + " " + this.diseño + " " + this.color
//     }
// }

// const mt_stinger_brave_verde_mate = new Casco ('Casco', 'Integral', 'MT', 'Stinger', 'Brave', 'Verde mate', 98)
// const mt_stinger_brave_verde_fluor = new Casco ('Casco', 'Integral', 'MT', 'Stinger', 'Brave', 'Verde fluor', 98)
// const mt_stinger_brave_gris = new Casco ('Casco', 'Integral', 'MT', 'Stinger', 'Brave', 'Gris', 98)
// const mt_stinger_brave_blanco = new Casco ('Casco', 'Integral', 'MT', 'Stinger', 'Brave', 'Blanco', 98)

// console.log (mt_stinger_brave_verde)
let productos = []

class Moto{
    constructor (categoria, estilo, marca, modelo, cilindrada, color, precio){
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
const hondaxr190roja = new Moto ("Moto", "Enduro", "Honda", "XR", 190, "Roja", 4990)
productos.push (hondaxr190roja)
const hondaxr190negra = new Moto ("Moto", "Enduro", "Honda", "XR", 190, "Negra", 4990)
productos.push (hondaxr190negra)
const hondaxr190blanca = new Moto ("Moto", "Enduro", "Honda", "XR", 190, "Blanca", 4990)
productos.push (hondaxr190blanca)
const hondaxr125roja = new Moto ("Moto", "Enduro", "Honda", "XR", 125, "Roja", 3990)
productos.push (hondaxr125roja)
const hondatwister125azul = new Moto ("Moto", "Enduro", "Honda", "Twister", 125, "Azul", 2490)
productos.push (hondatwister125azul)

console.log (hondaxr190roja)
//--------------------------Elección de articulo--------------------------------------
let seguircomprando = true
let carrito = 0
//let totalcompra = 0
let decision
let buscarproducto
console.log (carrito)
while (seguircomprando = true){
    let articulo = parseInt (prompt('¿Qué moto desea comprar?' + '\n' + 
    '1-' + hondaxr190roja.nombre + '\n' +
    '2-' + hondaxr125roja.nombre + '\n' +
    '3-' + hondatwister125azul.nombre
    ))
    if (articulo === 1) {
        buscarproducto = productos.indexOf (hondaxr190roja) 
        carrito = carrito + (productos[buscarproducto]).precio
    } else if (articulo === 2){
        buscarproducto = productos.indexOf (hondaxr125roja) 
        carrito = carrito + (productos[buscarproducto]).precio
    } else if (articulo === 3){
        buscarproducto = productos.indexOf (hondatwister125azul) 
        carrito = carrito + (productos[buscarproducto]).precio
    } else {
        let articulo = parseInt (prompt('¿Qué moto desea comprar?' + '\n' + 
        '1-' + hondaxr190roja.nombre + '\n' +
        '2-' + hondaxr125roja.nombre + '\n' +
        '3-' + hondatwister125azul.nombre)
        )    
    }
    decision = parseInt(prompt('¿Desea seguir comprando?' + '\n' + '1-Si' + '\n' + '2-No'))
    if (decision === 1){
        continue
    } else if (decision === 2){
        seguircomprando = false
    }
    break
}
alert('El monto de su carrito es de ' + carrito)

//------------------------------------Crédito-----------------------------------
let disponibilidadcredito = true
let disponibilidadcreditobbva = true
let antiguedadlaboral
let recibodesueldo
let montoafinanciar
let divisadelcredito

if (disponibilidadcredito = false){
    disponibilidadcreditobbva = false
} 

//--------------------------FUNCIONES BBVA--------------------------------------


function cuotasbbva12 (valorafinanciar){
    let valorcuota12 = (valorafinanciar / 1000 * 91)
    return valorcuota12
}
function cuotasbbva18 (valorafinanciar){
    let valorcuota18 = (valorafinanciar / 1000 * 64)
    return valorcuota18
}
function cuotasbbva24 (valorafinanciar){
    let valorcuota24 = (valorafinanciar / 1000 * 48)
    return valorcuota24
}
function cuotasbbva36 (valorafinanciar){
    let valorcuota36 = (valorafinanciar / 1000 * 34)
    return valorcuota36
}
function cuotasbbva48 (valorafinanciar){
    let valorcuota48 = (valorafinanciar / 1000 * 27)
    return valorcuota48
}
function cuotasbbva60 (valorafinanciar){
    let valorcuota60 = (valorafinanciar / 1000 * 22)
    return valorcuota60
}

//-------------------------Cuestionario----------------------------------------

while (disponibilidadcredito = true) {
    antiguedadlaboral = parseInt (prompt ('Indique su antigüedad laboral aqui (en meses):'))
    if (antiguedadlaboral >= 12){
    disponibilidadcredito = true
    } else {
    alert ('No tiene créditos disponibles')
    break
    }

    recibodesueldo = parseInt (prompt ('Indique su sueldo líquido (en pesos uruguayos):'))
    if (recibodesueldo >= 25000 && antiguedadlaboral >= 12){
        disponibilidadcreditobbva = true
    } else {
        disponibilidadcredito = false
        alert ('No tiene créditos disponibles')
        break    
    }

    while (disponibilidadcreditobbva = true){

        let precio12cuotas = cuotasbbva12 (carrito)
        let precio18cuotas = cuotasbbva18 (carrito)
        let precio24cuotas = cuotasbbva24 (carrito)
        let precio36cuotas = cuotasbbva36 (carrito)
        let precio48cuotas = cuotasbbva48 (carrito)
        let precio60cuotas = cuotasbbva60 (carrito)

        alert ('Las cuotas disponibles son: ' + '\n' + 
        '12 cuotas de USD ' +precio12cuotas + ' dolares' + '\n' +
        '18 cuotas de USD ' +precio18cuotas + ' dolares' + '\n' +
        '24 cuotas de USD ' +precio24cuotas + ' dolares' + '\n' +
        '36 cuotas de USD ' +precio36cuotas + ' dolares' + '\n' +
        '48 cuotas de USD ' +precio48cuotas + ' dolares' + '\n' +
        '60 cuotas de USD ' +precio60cuotas
        )
        break
    }
    break
}

