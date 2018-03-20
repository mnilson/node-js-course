const yargs = require('yargs');
const axios = require('axios');

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

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCWg_-FvQ8WQx9zoQubzC6lvwSnU22OTUg`;

axios.get(geocodeUrl).then((response) => {
    console.log(response.data);
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that addrress.');
    }

    const lat = response.data.results[0].geometry.location.lat;
    const lng = response.data.results[0].geometry.location.lng;
    const weatherUrl = `https://api.darksky.net/forecast/6cae491db385d95f97b484307d92e24a/${lat},${lng}?units=ca`;
    console.log(weatherUrl);
    return axios.get(weatherUrl);
}).then((response) => {
    const temperature = response.data.currently.temperature;
    const units = 'C';
    const summary =  response.data.currently.summary;
    const apparentTemperature =  response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature} ${units} and ${summary}. It feels like ${apparentTemperature}.`);
}).catch((e) => {
    console.log(e);
});
