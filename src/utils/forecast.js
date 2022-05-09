const request = require('request');

const forecast = (lon, lat, callback) => {
    const url = `https://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civillight&output=json`;
    request({ url, json: true, }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to forecast services')
        }
        else if (body === "ERR: no geographic location specified") {
            callback('Cannot find the location specified. Try another search.')
        }
        else {
            callback(undefined, {type: body.dataseries[0].weather, max: body.dataseries[0].temp2m.max,  min: body.dataseries[0].temp2m.min, })
        }
    })
}

module.exports = forecast;