import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  searchCities(cities : string[]): Observable<city> {
    const url = "http://localhost:8000/cities/getInfo";
    const headers = {'Access-Control-Allow-Origin' : '*'}
    return this.http.post<city>(url, {cities}, { headers})
  }

  sortTable(data : any) : Observable<city> {
    const originalCities = localStorage.getItem('cities');
    data.originalCities = originalCities;
    const url = "http://localhost:8000/cities/sortData";
    const headers = {'Access-Control-Allow-Origin' : '*'};
    console.log("data -->> ", data);
    return this.http.post<city>(url, data, { headers})
  } 
}

export interface city {
  city: string,
  temperature : string,
  sunrise : string,
  sunset : string
}
