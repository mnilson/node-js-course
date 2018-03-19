const request = require('request');

const geocodeAddress = (addy, callback) => {
    const encodedAddress = encodeURIComponent(addy);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCWg_-FvQ8WQx9zoQubzC6lvwSnU22OTUg`,
        json: true
    }, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 3));
        if (error) {
            callback('Unable to connect to Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lattitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports = { geocodeAddress };
