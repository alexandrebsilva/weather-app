const request = require('request')
const ACCESS_KEY = 'pk.eyJ1IjoiYWxleGFuZHJlYnNpbHZhIiwiYSI6ImNrNGhqcnR2ajExamkzbnAyMnNvN3htZm4ifQ.oSOeUqCFMkIdYg9xUavasA'
const base_url = (address) => 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURI(address) + '.json?access_token=' + ACCESS_KEY + '&limit=1'

const geocode = (address, callback) => {
    request({ url: base_url(address), json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to MapBox service', undefined)
        } else if (response.body.features.length === 0) {
            callback('No results for this search. Try another location')
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}
module.exports = geocode