const request = require('request')
const WEATHER_STACK_ACCESS_KEY = '71c91ffb68bbf4e1e8a1367cb565760f'

const forecast = (latitude, longitude, callback) => {
    const coordinates = String(latitude) + ',' + String(longitude)
    const url = 'http://api.weatherstack.com/current?access_key=' + WEATHER_STACK_ACCESS_KEY + '&query=' + coordinates + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Forecast service unavailable', undefined)
        } else if (body.error) {
            callback('Unable to find forecast for given coordinates', undefined)
        } else {
            callback(undefined, 'The temperature is ' + body.current.temperature +
                ' degrees , humidity of ' + body.current.humidity + ' chance of rain aproximately of ' + body.current.precip * 100 + '% and feels like ' +
                body.current.feelslike)
        }
    })
}

module.exports = forecast