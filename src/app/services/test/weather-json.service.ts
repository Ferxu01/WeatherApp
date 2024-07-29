import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as weatherData from '../../../assets/data/weather.json';
import { Observable, of } from 'rxjs';
import { WeatherResponse } from 'src/app/interfaces/Weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherJsonService {

  constructor(private http: HttpClient) { }

  getWeather(): Observable<WeatherResponse> {
    return of(weatherData);
  }
}
