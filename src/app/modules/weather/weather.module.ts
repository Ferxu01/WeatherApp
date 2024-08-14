import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { MunicipalsPageComponent } from './municipals-page/municipals-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MunicipalDetailPageComponent } from './municipal-detail-page/municipal-detail-page.component';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    MunicipalsPageComponent,
    MunicipalDetailPageComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    ComponentsModule,
    PipesModule,
    ComponentsModule
  ]
})
export class WeatherModule { }
