const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for.',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
        // 37.8267,-122.4233

        weather.getWeather(results.lattitude, results.longitude, (weatherErr, weatherResults) => {
            if (weatherErr) {
                console.log(weatherErr);
            } else {
                console.log(`It's currently ${weatherResults.temperature} ${weatherResults.units} and ${weatherResults.summary}. It feels like ${weatherResults.apparentTemperature}.`);
            }
        });
    }
});

const geocodePromise = new Promise((resolve, reject) => {
    geocode.geocodeAddress(argv.a, (errorMessage, results) => {
        if (errorMessage) {
            reject(errorMessage);
        } else {
            resolve(results.lattitude, results.longitude);
        }
    });
});

geocodePromise.then((message) => {
    console.log(`Success: ${message}`);
}, (errorMessage) => {
    console.log(errorMessage);
});
