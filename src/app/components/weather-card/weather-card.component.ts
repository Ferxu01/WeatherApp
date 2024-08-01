import { Component, Input, OnInit } from '@angular/core';

import { WEATHER_ICONS } from '../../constants'
import { City } from 'src/app/interfaces/Weather';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() city!: City;

  icon!: string;
  minTemp!: string;
  maxTemp!: string;
  description!: string;

  constructor () { }

  ngOnInit(): void {
    this.icon = WEATHER_ICONS[this.city.stateSky.description] || WEATHER_ICONS['Despejado'];
    this.minTemp = this.city.temperatures.min;
    this.maxTemp = this.city.temperatures.max;
    this.description = this.city.stateSky.description;
  }


}
