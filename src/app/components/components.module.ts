import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { PipesModule } from "../pipes/pipes.module";
import { CitiesCarouselComponent } from './cities-carousel/cities-carousel.component';



@NgModule({
  declarations: [
    WeatherCardComponent,
    CitiesCarouselComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    WeatherCardComponent,
    CitiesCarouselComponent
  ]
})
export class ComponentsModule { }
