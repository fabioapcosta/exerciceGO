// wiki.js - Wiki route module

import express from 'express';
const weather = express.Router();
const log = require('log-to-file');
import { cityDetails, sortData } from '../services/weather';
// Home page route
weather.post('/getInfo', async function (req, res) {

    console.log(req.body)
    let msg;
    log(req.originalUrl, 'requests.log');
    try {
        if(!req.body.cities){
            msg = 'No Cities Passed'
        }
        const cities = req.body.cities;
        const details: any = [];

        for await (const city of cities) {
            details.push(await cityDetails(city))
        }
        res.send(details);

    } catch (error) {
        console.log(error.message)
        res.status(400).send(msg ? msg : 'Bad Request')
    }


});

weather.post('/sortData', (req, res) => {
    log(req.originalUrl, 'requests.log');
    const sortedCities = sortData(req.body);

    console.log("sorted Cities -->> ", sortedCities)
    res.send(sortedCities)
})

export default weather;