import { Injectable } from '@angular/core';

import * as municipalsData from '../../../assets/data/municipals.json';
import { Observable, of } from 'rxjs';
import { MunicipalsResponse } from 'src/app/interfaces/Municipal';
import { Province } from 'src/app/interfaces/General';

@Injectable({
  providedIn: 'root'
})
export class MunicipalJsonService {

  getMunicipals(): Observable<MunicipalsResponse> {
    return of(municipalsData);
  }

  getCommunities(): { CODAUTON: string; COMUNIDAD_CIUDAD_AUTONOMA: string; }[] {
    const data = municipalsData;
    const provinces = data.provincias;
    const communities = new Set<string>();
    const result: {
      CODAUTON: string;
      COMUNIDAD_CIUDAD_AUTONOMA: string;
    }[] = [];

    provinces.forEach(({ CODAUTON, COMUNIDAD_CIUDAD_AUTONOMA }) => {
      if (!communities.has(CODAUTON)) {
        communities.add(CODAUTON);
        result.push({ CODAUTON, COMUNIDAD_CIUDAD_AUTONOMA });
      }
    });

    return result;
  }

  groupProvincesByCommunities() {
    const municipals = municipalsData;
    let groupedMunicipals: { [key: string]: Province[] } = {};

    municipals.provincias.forEach(province => {
      let cod_auton = province.CODAUTON;

      if (!groupedMunicipals[cod_auton]) {
        groupedMunicipals[cod_auton] = [];
      }

      groupedMunicipals[cod_auton].push(province);
    });

    //Convertir objeto a array
    const result = Object.keys(groupedMunicipals).map(cod_auton => ({
      CODAUTON: cod_auton,
      provinces: groupedMunicipals[cod_auton]
    }));

    return result;
  }
}
