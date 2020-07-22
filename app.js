const request = require('request')
const WEATHER_STACK_ACCESS_KEY = '71c91ffb68bbf4e1e8a1367cb565760f'
const COORDINATES = '-23.5489,-46.6388'
const BASE_URL_WEATHER_STACK = 'http://api.weatherstack.com/current?access_key=' + WEATHER_STACK_ACCESS_KEY + '&query=' + COORDINATES + '&units=m'

request({ url: BASE_URL_WEATHER_STACK, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to the weather service')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log(response.body.current)
    }
})
