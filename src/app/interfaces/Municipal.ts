import { Origin, Province } from './General';

export interface MunicipalsResponse {
  origen:          Origin;
  title:           string;
  provincias:      Province[];
  metadescripcion: string;
  keywords:        string;
  breadcrumb:      any[];
}

export interface Breadcrumb {
  name:  string;
  url:   null | string;
  title: string;
}
