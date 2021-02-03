// Api de open weather map

const axios = require('axios'),
 getWeather = async (lat,lng) => {
    let res = await axios.get('url')

    return res.data.main.temp
 }

 module.exports = {getWeather}