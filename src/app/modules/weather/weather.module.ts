import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { MunicipalsPageComponent } from './municipals-page/municipals-page.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    MunicipalsPageComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    ComponentsModule
  ]
})
export class WeatherModule { }
