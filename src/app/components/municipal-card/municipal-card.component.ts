import { Component, Input, OnInit } from '@angular/core';
import { Province } from 'src/app/interfaces/General';

@Component({
  selector: 'Municipal-card',
  templateUrl: './municipal-card.component.html',
  styleUrls: ['./municipal-card.component.css']
})
export class MunicipalCardComponent implements OnInit {
  @Input('provinceData') province!: Province;

  provId!: string;
  provName!: string;
  communityProvId!: string;
  communityProvName!: string;

  ngOnInit(): void {
    this.provId = this.province.CODPROV;
    this.communityProvId = this.province.CODAUTON;
    this.provName = this.province.NOMBRE_PROVINCIA;
    this.communityProvName = this.province.COMUNIDAD_CIUDAD_AUTONOMA;
  }
}
