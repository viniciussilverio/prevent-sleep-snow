const express = require('express');
const app = express();
require('dotenv').config()
var request = require('request');

const port = process.env.PORT;

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});

var options = {
    url: `${process.env.url}/api/now/table/incident`,
    method: 'POST',
    headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": ("Basic " + new Buffer(`${process.env.username}:${process.env.password}`).toString('base64')) },
    json: true,
    body: { 'short_description': 'Sonékito', 'assignment_group': '287ebd7da9fe198100f92cc8d1d2154e', 'urgency': '3', 'impact': '3' }
};

function callback(error, response, body) {
    if (error) {
        console.log(error);
    } else {
        console.log(body);
    }
}

setInterval(function () {
    try {
        request(options, callback);
    } catch (error) {
        console.log(error);
    }
}, 5 * 60 * 1000);