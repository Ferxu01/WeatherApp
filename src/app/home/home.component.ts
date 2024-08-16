import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherJsonService } from '../services/test/weather-json.service';
import { WeatherResponse } from '../interfaces/Weather';
import { FooterService } from '../services/footer.service';

@Component({
  selector: 'Home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weather!: WeatherResponse;

  constructor(private weatherService: WeatherJsonService, private footerService: FooterService) { }

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe(
      resp => {
        this.weather = resp;
        this.footerService.setFooterInfo(this.weather.origen);
      }
    );
  }

}
