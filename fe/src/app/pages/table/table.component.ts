
import { Component } from '@angular/core';
import {FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { city, ConfigService } from 'app/config.service';
import {cities} from './data'


@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.css']
})

export class TableComponent{    


    showInfo : boolean = false;
    submitCities : boolean = false;
    citiesToSearch : string[] = [];
    cities = new FormControl();
    citiesList: string[] = cities
    citiesToDisplay : city [] = [];

    //table config
    displayedColumns: string[] = ["city", "temperature", "sunrise", "sunset"];
    dataSource = new MatTableDataSource<city>([]);


    //chart config options

    single: any[];
    view: any[] = [700, 400];
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'City';
    showYAxisLabel = true;
    yAxisLabel = 'Temperature (ºC)';
    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    constructor(
        private configService : ConfigService
    ){}


    addCity(city : string) {
        if(this.citiesToSearch.find(cityItem => cityItem == city)){
            const filteredCities = this.citiesToSearch.filter(cities => cities != city)
            this.citiesToSearch = filteredCities;    
        }
        else { 
            this.citiesToSearch.push(city)
        }
        if(this.citiesToSearch.length >= 3){
            this.submitCities = true;
        }
        else{
            this.submitCities = false;
        }
    }

    searchCities(){
        this.configService.searchCities(this.citiesToSearch)
            .subscribe((data: any) => {
                const chartData = [];
                this.citiesToDisplay = data;
                this.citiesToDisplay.forEach(element => {                    
                    chartData.push({name : element.city, value : element.temperature });
                });
                this.dataSource.data = this.citiesToDisplay;
                this.single = chartData;
                this.showInfo = true;
                localStorage.setItem('cities', JSON.stringify(data));
            });
    }

    sortCities(event : Event){
        const data = {sortDetails : event, cities : this.citiesToDisplay}
        this.configService.sortTable(data)
            .subscribe((data : any) => {
                this.dataSource.data = data;
            })
    }
}