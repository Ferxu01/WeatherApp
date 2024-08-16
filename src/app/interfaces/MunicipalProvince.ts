import { Origin } from "./General";
import { Breadcrumb } from "./Municipal";

export interface MunicipalsProvinceResponse {
  origen: Origin;
  title: string;
  provincia: string;
  codprov: string;
  metadescripcion: string;
  keywords: string
  municipios: Municipal[];
  breadcrumb: Breadcrumb[];
}

export interface Municipal {
  CODIGOINE: string;
  ID_REL: string;
  COD_GEO: string;
  NOMBRE_PROVINCIA: string;
  NOMBRE: string;
  POBLACION_MUNI: number;
  SUPERFICIE: number;
  PERIMETRO: number;
  CODIGOINE_CAPITAL: string;
  NOMBRE_CAPITAL: string;
  POBLACION_CAPITAL: string;
  HOJA_MTN25: string;
  LONGITUD_ETRS89_REGCAN95: number;
  LATITUD_ETRS89_REGCAN95: number;
  ORIGEN_COORD: string;
  ALTITUD: number;
  ORIGEN_ALTITUD: string;
  DISCREPANTE_INE: number;
}
