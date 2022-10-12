//Dependia A XMLTttpRequest

const http = require('xmlhttprequest').XMLHttpRequest

const  url ="https://pokeapi.co/api/v2/type"
//Funcion para conectar a una API publica

function get_data(endpoint, exito, fallo) {
    let promise = new Promise(function (resolve, rejected) {
        // 1. Crear el objeto de conexion
        const h = new  http()
        // 2. Abrir una conexion a la API
        h.open('GET', endpoint)
        // 3. Enviar la request definida    
        h.send()
        // 4. Una vez recibida la response, tratar la info
        h.onload = function() {
            if (h.status === 200) {
                resolve(h.responseText)
            } else {
                rejected(h.status)
            }
            resolve(h.responseText)
    }    
    })
    return promise
}

 function exito(data) {
    const tipos = (JSON.parse(data).results)
    //Recorrer el arreglo 
    tipos.forEach(function (element) {
        console.log(`Tipo: ${element.name}`)
        console.log(`---------------------`)
    });
}
function fallo(status) {
    console.log(status)
}


get_data(url).then(function (data) {
    exito(data)
})

