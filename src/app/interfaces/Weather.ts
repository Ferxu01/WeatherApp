export interface WeatherResponse {
  origen: Origin;
  title: string;
  ciudades: City[];
  today: Today;
  tomorrow: Today;
  provincias: Province[];
}

export interface Origin {
  productor:   string;
  web:         string;
  language:    string;
  copyright:   string;
  nota_legal:  string;
  descripcion: string;
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

export interface Province {
  CODPROV:                   string;
  NOMBRE_PROVINCIA:          string;
  CODAUTON:                  string;
  COMUNIDAD_CIUDAD_AUTONOMA: string;
  CAPITAL_PROVINCIA:         string;
}
