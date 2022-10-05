
let productos
document.addEventListener('DOMContentLoaded', async () => {
    const respuesta = await fetch('/motos.json')
    console.log(respuesta);
    productos = await respuesta.json()
    console.log(productos);
    productos.forEach(producto => {
            console.log(totalcompra);
            console.log(carrito);
            const cardEnduro = document.createElement('button');
            const imagen = document.createElement('img')
            imagen.setAttribute('src', `./${producto.imagen}`)
            imagen.setAttribute('class', `imagendivarticulo`)
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
            const cantidad = document.getElementById(`cantidad${producto.abreviado}`)
            botonagregarcarrito.addEventListener('click', () => {
                if (carrito.includes(producto) || cantidad){
                    const cantidad = document.getElementById(`cantidad${producto.abreviado}`)
                    console.log(cantidad);
                    producto.cantidad ++
                    cantidad.innerText = producto.cantidad
                    console.log(producto.cantidad);
                    totalcompra = totalcompra + producto.precio
                    contador.innerText = totalcompra
                    swal({
                        title: `Has agregado ${producto.nombre} al carrito!`,
                        text: `U$S ${producto.precio}`,
                        icon: `./${producto.abreviado}.png`,
                        button: "Ok",
                      });
                      localStorage.setItem('carrito', JSON.stringify(carrito))
        
                    } else{
                producto.cantidad ++
                console.log(carrito.includes(producto));
                carritoconduplicados.push(producto)
                console.log(carrito.includes(producto));
                swal({
                    title: `Has agregado ${producto.nombre} al carrito!`,
                    text: `U$S ${producto.precio}`,
                    icon: `./${producto.abreviado}.png`,
                    button: "Ok",
                  });
                totalcompra = totalcompra + producto.precio
                carrito = carritoconduplicados.filter((item,index)=>{
                    return carritoconduplicados.indexOf(item) === index;
                  })
                contador.innerText = totalcompra
                console.log(carrito)
                console.log(totalcompra);
                const divarticuloencarrito = document.createElement('div')
                divarticuloencarrito.setAttribute('id', `div${producto.abreviado}`)
                divarticuloencarrito.innerHTML = `
                <h3>${producto.nombre}</h3>
                <h4>USD ${producto.precio}</h4>
                <h5 id="cantidad${producto.abreviado}">${producto.cantidad}</h5>
                `  
                carrito_lateral.appendChild(divarticuloencarrito)
                localStorage.setItem('carrito', JSON.stringify(carrito))
                }
                console.log(carrito);
            })
            
        
    });
})


//-------------------------------------------------------------------------------------------------------------

// class Moto{
//     constructor (id, abreviado, categoria, estilo, marca, modelo, cilindrada, color, precio, cantidad){
//         this.id = id
//         this.abreviado = abreviado
//         this.categoria = categoria
//         this.estilo = estilo
//         this.marca = marca
//         this.modelo = modelo
//         this.cilindrada = cilindrada
//         this.color = color
//         this.precio = precio
//         this.cantidad = cantidad
//         this.nombre = this.marca + " " + this.modelo + " " + this.cilindrada + " " + this.color
//     }
// }

// const hondaxr125roja = new Moto (103010304, "hondaxr125roja", "Moto", "Enduro", "Honda", "XR", 125, "Roja", 3990, 0)
// productos.push (hondaxr125roja)
// motos.push (hondaxr125roja)
// const hondaxr190roja = new Moto (103010404, "hondaxr190roja", "Moto", "Enduro", "Honda", "XR", 190, "Roja", 4990, 0)
// productos.push (hondaxr190roja)
// motos.push (hondaxr190roja)
// const hondaxre190roja = new Moto (103010504, "hondaxre190roja", "Moto", "Enduro", "Honda", "XRE", 190, "Roja", 6890, 0)
// productos.push (hondaxre190roja)
// motos.push (hondaxre190roja)
// const hondaxre300verde = new Moto (103010706, "hondaxre300verde", "Moto", "Enduro", "Honda", "XRE", 300, "Verde", 7490, 0)
// productos.push (hondaxre300verde)
// motos.push (hondaxre300verde)


let carrito = [];
let carritoconduplicados = []
let carritoprevio = [];
let totalcompra = 0
const enduro = document.getElementById('enduro');
const carrito_lateral = document.getElementById('carrito_lateral');
const contador = document.createElement('h4')
carrito_lateral.appendChild(contador)
console.log(productos);
productos.forEach(producto => {
    console.log(totalcompra);
    console.log(carrito);
    const cardEnduro = document.createElement('button');
    const imagen = document.createElement('img')
    imagen.setAttribute('src', `./${producto.abreviado}.png`)
    imagen.setAttribute('class', `imagendivarticulo`)
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
    const cantidad = document.getElementById(`cantidad${producto.abreviado}`)
    botonagregarcarrito.addEventListener('click', () => {
        if (carrito.includes(producto) || cantidad){
            const cantidad = document.getElementById(`cantidad${producto.abreviado}`)
            console.log(cantidad);
            producto.cantidad ++
            cantidad.innerText = producto.cantidad
            console.log(producto.cantidad);
            totalcompra = totalcompra + producto.precio
            contador.innerText = totalcompra
            swal({
                title: `Has agregado ${producto.nombre} al carrito!`,
                text: `U$S ${producto.precio}`,
                icon: `./${producto.abreviado}.png`,
                button: "Ok",
              });
              localStorage.setItem('carrito', JSON.stringify(carrito))

            } else{
        producto.cantidad ++
        console.log(carrito.includes(producto));
        carritoconduplicados.push(producto)
        console.log(carrito.includes(producto));
        swal({
            title: `Has agregado ${producto.nombre} al carrito!`,
            text: `U$S ${producto.precio}`,
            icon: `./${producto.abreviado}.png`,
            button: "Ok",
          });
        totalcompra = totalcompra + producto.precio
        carrito = carritoconduplicados.filter((item,index)=>{
            return carritoconduplicados.indexOf(item) === index;
          })
        contador.innerText = totalcompra
        console.log(carrito)
        console.log(totalcompra);
        const divarticuloencarrito = document.createElement('div')
        divarticuloencarrito.setAttribute('id', `div${producto.abreviado}`)
        divarticuloencarrito.innerHTML = `
        <h3>${producto.nombre}</h3>
        <h4>USD ${producto.precio}</h4>
        <h5 id="cantidad${producto.abreviado}">${producto.cantidad}</h5>
        `  
        carrito_lateral.appendChild(divarticuloencarrito)
        localStorage.setItem('carrito', JSON.stringify(carrito))
        }
        console.log(carrito);
    })
    
});
const carritoback = JSON.parse(localStorage.getItem('carrito'))
console.log(carritoback);
const carritototal = carrito.concat(carritoback)
localStorage.setItem('carritototal', JSON.stringify(carritototal))
carritoback.forEach(producto => {
    carritoprevio.push(producto)
    totalcompra = totalcompra + (producto.precio * producto.cantidad)
    console.log(carritoprevio);
    contador.innerText = totalcompra
    console.log(totalcompra);
    const divarticuloencarrito = document.createElement('div')
    divarticuloencarrito.setAttribute('id', `div${producto.abreviado}`)
    divarticuloencarrito.innerHTML = `
    <h3>${producto.nombre}</h3>
    <h4>USD ${producto.precio}</h4>
    <h5 id="cantidad${producto.abreviado}">${producto.cantidad}</h5>
    `  
    carrito_lateral.appendChild(divarticuloencarrito)
});
console.log(carrito);
const botonborrartodo = document.createElement('button')
botonborrartodo.addEventListener ('click', () => {
    localStorage.clear()
})
enduro.appendChild(botonborrartodo)

