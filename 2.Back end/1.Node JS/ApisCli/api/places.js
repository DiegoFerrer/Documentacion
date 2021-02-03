// API DE GOOGLE 

// HACEMOS PETICIONES CON AXIOS

const axios = require('axios'),
getPlace = async addres => {
    let encodeUrl = encondeURI(address),
    res = await axios.get('url')

    if (res.data.status === 'ZERO_RESULTS') {
        throw new Error('No hay resultados para el lugar')
    }

    let location = res.data.results[0],
    coords = location.geometry.location

    return {
        address: location.formatted_address,
        lat:coords.lat,
        lng: coords.lng
    }
}

module.exports = {getPlace}