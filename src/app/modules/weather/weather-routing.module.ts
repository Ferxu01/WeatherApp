import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MunicipalsPageComponent } from './municipals-page/municipals-page.component';
import { MunicipalDetailPageComponent } from './municipal-detail-page/municipal-detail-page.component';

const routes: Routes = [
  {
    path: 'provinces',
    component: MunicipalsPageComponent
  },
  {
    path: 'provinces/:id',
    component: MunicipalDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
