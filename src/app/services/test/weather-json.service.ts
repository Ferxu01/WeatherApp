import { Injectable } from '@angular/core';

import * as weatherData from '../../../assets/data/weather.json';
import * as municipalDetail from '../../../assets/data/municipal-detail.json';

import { Observable, of } from 'rxjs';
import { WeatherResponse } from 'src/app/interfaces/Weather';
import { MunicipalDetailResponse } from 'src/app/interfaces/MunicipalDetail';

@Injectable({
  providedIn: 'root'
})
export class WeatherJsonService {

  getWeather(): Observable<WeatherResponse> {
    return of(weatherData);
  }

  getProvinceWeather(): Observable<MunicipalDetailResponse> {
    return of(municipalDetail);
  }
}
