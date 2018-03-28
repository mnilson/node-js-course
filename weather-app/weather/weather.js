const request = require('request');

const getWeather = (lattitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/6cae491db385d95f97b484307d92e24a/${lattitude},${longitude}?units=ca`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
                units: 'C',
                summary: body.currently.summary

            });
        } else {
            callback('Unable to fetch the weather.');
        }
    });
};

module.exports = { getWeather };
