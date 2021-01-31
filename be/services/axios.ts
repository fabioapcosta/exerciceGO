import axios, {AxiosResponse } from 'axios'
const log = require('log-to-file');


export async function getRequest(city : string) : Promise<AxiosResponse<any>>{
    try {
        const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=4d9510b0d6fb6978a6f33fab42394bb3&units=metric&lang=pt';
        log(url, 'requests.log');
        return await axios.get(url);
        
    } catch (error) {
        console.log(error.message)
        return error
    }

}