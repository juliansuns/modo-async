//Dependia A XMLTttpRequest

const http = require('xmlhttprequest').XMLHttpRequest

const  url ="https://jsonplaceholder.typicode.com/todos/"
//Funcion para conectar a una API publica

const get_data = (endpoint, exito, fallo) => {
    let promise = new Promise(function (resolve, rejected) {
        // 1. Crear el objeto de conexion
        const h = new  http()
        // 2. Abrir una conexion a la API
        h.open('GET', endpoint)
        // 3. Enviar la request definida    
        h.send()
        // 4. Una vez recibida la response, tratar la info
        h.onload = ()  =>{
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

 const exito = data => {
    const varios = (JSON.parse(data))
    //Recorrer el arreglo 
    varios.forEach(element => {
        console.log(`Titulo: ${element.title}`)
        console.log(`Completo: ${element.completed}`)
        console.log(`-------------`)
    });
}
const fallo = status => console.log(status)


get_data(url)
    .then( data =>  exito(data))
    .catch(error => fallo(Error(error)))

