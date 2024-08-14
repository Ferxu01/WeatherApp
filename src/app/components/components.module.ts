import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { PipesModule } from "../pipes/pipes.module";
import { CitiesCarouselComponent } from './cities-carousel/cities-carousel.component';
import { MunicipalCardComponent } from './municipal-card/municipal-card.component';
import { AccordionComponent } from './ui/accordion/accordion.component';



@NgModule({
  declarations: [
    WeatherCardComponent,
    CitiesCarouselComponent,
    MunicipalCardComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    WeatherCardComponent,
    CitiesCarouselComponent,
    MunicipalCardComponent,
    AccordionComponent
  ]
})
export class ComponentsModule { }
