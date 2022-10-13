const axios = require('axios')

const  url ="https://pokeapi.co/api/v2/type"


// Configuracion de request
let config = {
    url : url,
    method : 'get'
}

//Realizar la operacion async
axios(config)
    .then(function (response) {
        return response.data.results
    }).then(function (data) {
        data.forEach(function(tipo) {
            console.log(`Tipo: ${tipo.name}`)
            console.log(`******************`)
        });
    })
    .catch(function (error) {
        console.log(Error(`Error : $error`))
    })