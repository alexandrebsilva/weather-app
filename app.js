const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('No location provided')
} else {
    geocode(address, (error, { location, latitude, longitude }) => {
        if (error) {
            return console.log(error)
        }
        console.log('Looking for forecast of: ', location)

        forecast(latitude, longitude, (errorForecast, forecast) => {
            if (error) {
                return console.log(errorForecast)
            }
            console.log(forecast)
        })
    })
}