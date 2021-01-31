import { getRequest } from "./axios"


function calculateTime(time: any): string {
    let unix_timestamp = time
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime

}


export async function cityDetails(city: string): Promise<cityDetails> {
    try {
        const response = await getRequest(city);
        const temperature = response.data.main.temp;
        const cityName = response.data.name;
        const sunrise = calculateTime(response.data.sys.sunrise);
        const sunset = calculateTime(response.data.sys.sunset);

        const details: cityDetails = {
            city: cityName,
            temperature: temperature,
            sunrise: sunrise,
            sunset: sunset
        }

        return details

    } catch (error) {
        console.log(error.message)
        return error
    }

}

export function sortData(data : any){
    console.log(JSON.stringify(data))
    const propertyToSort = data.sortDetails.active;
    let sortedCities;
    if(data.sortDetails.direction == ""){
        return data.originalCities;
    }
    else{
        if(propertyToSort == 'city'){
            sortedCities = data.sortDetails.direction == 'asc' ? 
                data.cities.sort((a : any, b : any) => (a.city > b.city) ? 1 : -1) :
                data.cities.sort((a : any, b : any) => (a.city > b.city) ? -1 : 1)
        }
        else if(propertyToSort == 'temperature'){
            sortedCities = data.sortDetails.direction == 'asc' ? 
                data.cities.sort((a : any, b : any) => (a.temperature > b.temperature) ? 1 : -1) :
                data.cities.sort((a : any, b : any) => (a.temperature > b.temperature) ? -1 : 1)
        }
        else if(propertyToSort == 'sunrise'){
            sortedCities = data.sortDetails.direction == 'asc' ? 
                data.cities.sort((a : any, b : any) => (a.sunrise > b.sunrise) ? 1 : -1) :
                data.cities.sort((a : any, b : any) => (a.sunrise > b.sunrise) ? -1 : 1)
        }
        else if(propertyToSort == 'sunset') {
            sortedCities = data.sortDetails.direction == 'asc' ? 
                data.cities.sort((a : any, b : any) => (a.sunset > b.sunset) ? 1 : -1) :
                data.cities.sort((a : any, b : any) => (a.sunset > b.sunset) ? -1 : 1)
        }
    }
    //console.log("sortedCities -->> ", sortedCities)
    return sortedCities

}




export interface cityDetails {
    city: string;
    temperature: string;
    sunrise: string;
    sunset: string;

}