import { Origin, Province } from './General';

export interface WeatherResponse {
  origen: Origin;
  title: string;
  ciudades: City[];
  today: Today;
  tomorrow: Today;
  provincias: Province[];
}

export interface City {
  id:           string;
  idProvince:   string;
  name:         string;
  nameProvince: string;
  stateSky:     StateSky;
  temperatures: Temperature;
}

export interface Temperature {
  min: string;
  max: string;
}

export interface Today {
  p: string[];
}

export interface StateSky {
  description: string;
  id:          string;
}
