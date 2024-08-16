import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Province } from 'src/app/interfaces/General';
import { AutonCommunity } from 'src/app/interfaces/MunicipalDetail';
import { City } from 'src/app/interfaces/Weather';
import { WeatherJsonService } from 'src/app/services/test/weather-json.service';

@Component({
  selector: 'Municipal-detail-page',
  templateUrl: './municipal-detail-page.component.html',
  styleUrls: ['./municipal-detail-page.component.css']
})
export class MunicipalDetailPageComponent implements OnInit {
  title!: string;
  todayForecastText!: string;
  tomorrowForecastText!: string;
  cities!: City[];
  province!: Province;
  community!: AutonCommunity;

  constructor(private weatherService: WeatherJsonService) { }

  ngOnInit(): void {
      //console.warn('Id: ', this.activatedRoute.snapshot.params['id']);

      this.weatherService.getProvinceWeather().subscribe(data => {
        //console.warn(data);
        //this.data = data;

        const {
          title, today, tomorrow, ciudades, provincia, comautonoma
        } = data;

        this.title = title;
        this.todayForecastText = today.p;
        this.tomorrowForecastText = tomorrow.p;
        this.cities = ciudades;
        this.province = provincia;
        this.community = comautonoma;
      });
  }
}
