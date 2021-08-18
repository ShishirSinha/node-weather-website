const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e253d1fa7ce014e0b69a6f3bb04ea9cb&query=' + latitude + ',' + longitude

    request({ url, json: true}, (error, result) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (result.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                forecast: result.body.current.weather_descriptions[0] + '. The current temperatue is ' + result.body.current.temperature + '. It feels like ' + result.body.current.feelslike + '.'
            })
        }
    })
}

module.exports = forecast