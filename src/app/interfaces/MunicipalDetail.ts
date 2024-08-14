import { Origin, Province } from "./General";
import { Breadcrumb } from "./Municipal";
import { City } from "./Weather";

export interface MunicipalDetailResponse {
  origen:          Origin;
  title:           string;
  today:           TodaySin;
  tomorrow:        TodaySin;
  ciudades:        City[];
  provincia:       Province;
  comautonoma:     AutonCommunity;
  metadescripcion: string;
  keywords:        string;
  breadcrumb:      Breadcrumb[];
}

export interface AutonCommunity {
  ID:       string;
  CODAUTON: string;
  CODCOMUN: string;
  NOMBRE:   string;
}

export interface TodaySin {
  p: string;
}
