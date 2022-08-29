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

//-------------------------FUNCIONES WELP----------------------------------------

while (disponibilidadcredito = true) {
    antiguedadlaboral = parseInt (prompt ('Indique su antigüedad laboral aqui (en meses):'))
    if (antiguedadlaboral >= 12){
    disponibilidadcredito = true
    } else {
    alert ('No tiene créditos disponibles')
    continue
    }

    recibodesueldo = parseInt (prompt ('Indique su sueldo líquido (en pesos uruguayos):'))
    if (recibodesueldo >= 25000 && antiguedadlaboral >= 12){
        disponibilidadcreditobbva = true
    } else {
        disponibilidadcredito = false
        alert ('No tiene créditos disponibles')
        continue    
    }

    while (disponibilidadcreditobbva = true){
        montoafinanciar = parseInt (prompt ('Indique el monto a financiar (en dólares):'))
        if (recibodesueldo < 35000 && montoafinanciar >= 4500){
            disponibilidadcreditobbva = false
            alert ('No tiene crédito disponible para ese monto. Pruebe con un monto inferior')
            continue
        }
        let precio12cuotas = cuotasbbva12 (montoafinanciar)
        let precio18cuotas = cuotasbbva18 (montoafinanciar)
        let precio24cuotas = cuotasbbva24 (montoafinanciar)
        let precio36cuotas = cuotasbbva36 (montoafinanciar)
        let precio48cuotas = cuotasbbva48 (montoafinanciar)
        let precio60cuotas = cuotasbbva60 (montoafinanciar)

        alert ('Las cuotas disponibles son: ' + '\n' + 
        '12 cuotas de USD ' +precio12cuotas + + '\n' +
        '18 cuotas de USD ' +precio18cuotas + ' dolares' + '\n' +
        '24 cuotas de USD ' +precio24cuotas + ' dolares' + '\n' +
        '36 cuotas de USD ' +precio36cuotas + ' dolares' + '\n' +
        '48 cuotas de USD ' +precio48cuotas + ' dolares' + '\n' +
        '60 cuotas de USD ' +precio60cuotas
        )
        console.log (disponibilidadcreditobbva)
    }
}

