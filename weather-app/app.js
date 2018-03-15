const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=27+oneil+cres+Saskatoon+sk&key=AIzaSyCWg_-FvQ8WQx9zoQubzC6lvwSnU22OTUg',
    json: true
}, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 3));
    console.log(`ADdress: ${body.results[0].formatted_address}`);
    console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
