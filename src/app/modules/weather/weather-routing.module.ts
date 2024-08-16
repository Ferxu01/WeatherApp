import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MunicipalsPageComponent } from './municipals-page/municipals-page.component';
import { MunicipalDetailPageComponent } from './municipal-detail-page/municipal-detail-page.component';
import { ProvinceMunicipalsPageComponent } from './province-municipals-page/province-municipals-page.component';

const routes: Routes = [
  {
    path: 'provinces',
    component: MunicipalsPageComponent
  },
  {
    path: 'provinces/:id',
    component: MunicipalDetailPageComponent
  },
  {
    path: 'provinces/:id/municipals',
    component: ProvinceMunicipalsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
