import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from "../components/components.module";
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    PipesModule
],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
