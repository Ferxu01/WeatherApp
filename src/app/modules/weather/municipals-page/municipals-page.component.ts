import { Component, OnInit } from '@angular/core';
import { Province } from 'src/app/interfaces/General';
import { MunicipalsResponse } from 'src/app/interfaces/Municipal';
import { MunicipalJsonService } from 'src/app/services/test/municipal-json.service';

@Component({
  selector: 'Municipals-page',
  templateUrl: './municipals-page.component.html',
  styleUrls: ['./municipals-page.component.css']
})
export class MunicipalsPageComponent implements OnInit {
  data!: MunicipalsResponse;
  municipals!: Province[];

  communities!: {
    CODAUTON: string;
    COMUNIDAD_CIUDAD_AUTONOMA: string;
    provinces: Province[];
  }[];
  groupedMunicipals!: {
    CODAUTON: string;
    provinces: Province[];
   }[];

  constructor(private municipalService: MunicipalJsonService) {}

  ngOnInit(): void {
    // this.groupedMunicipals = this.municipalService.groupProvincesByCommunities();
    // this.communities = this.municipalService.getCommunities();

    const groupedMunicipals = this.municipalService.groupProvincesByCommunities();
    this.communities = this.municipalService.getCommunities()
      .map(community => {
        const provinces = groupedMunicipals.find(gm => {
          return gm.CODAUTON === community.CODAUTON
        })?.provinces || [];

        return {
          ...community,
          provinces
        };
      });

    console.log(this.communities);
    //console.warn(this.groupedMunicipals);
  }

  navigatetoDetails(provinceId: string) {
    console.log(provinceId);

  }
}
