//Dependia A XMLTttpRequest

const http = require('xmlhttprequest').XMLHttpRequest

const exito = data =>{
    const varios = (JSON.parse(data).results)
    //Recorrer el arreglo 
    varios.forEach(function (element) {
        console.log(`Nombre: ${element.name}`)
        console.log(`Especie: ${element.species}`)
        console.log(`----------------`)
    });
}
const fallo =status => {
    console.log(status)
}

const  url ="https://rickandmortyapi.com/api/character"
//Funcion para conectar a una API publica

const get_data = (endpoint, exito, fallo) => {
    // 1. Crear el objeto de conexion
    const h = new  http()
    // 2. Abrir una conexion a la API
    h.open('GET', endpoint)
    // 3. Enviar la request definida
    h.send()
    // 4. Una vez recibida la response, tratar la info
    h.onload = () => {
        if (h.status === 200) {
            exito(h.responseText)
        } else {
            fallo(h.status)
        }
    }
}
    // Invocar get_data
    get_data(url, exito, fallo)