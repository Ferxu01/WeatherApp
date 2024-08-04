import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MunicipalsPageComponent } from './municipals-page/municipals-page.component';

const routes: Routes = [
  {
    path: '',
    component: MunicipalsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
