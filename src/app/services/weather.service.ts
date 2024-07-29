import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get<any>('https://www.el-tiempo.net/api/json/v2/home').pipe(
      map(res => res)
    );
  }
}
