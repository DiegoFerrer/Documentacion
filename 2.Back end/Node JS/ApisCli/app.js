const places = requiere('./api/places'),
weather = requiere('./api/weather'),
argv = requiere('yargs').options({
    address: {
        alias: 'a',
        desc: 'Direccion de lugar',
        demand:true
    }
}).argv

let getTemp = async address => {
    try {
        let coords = await places.getPlace(address),
        temp = await weather.getWeather(coords.lat,coords.lng)
        return `El clima en ${coords.address} es de ${temp}°C`
    } catch (e) {
        return `No se pudo determinar el clima en ${addres}`
    }
}

getTemp(argv.address)
    .then(message => console.log(message))
    .catch(err => console.log(err))