export const API_URLS = {
  NATIONAL_INFO: 'https://www.el-tiempo.net/api/json/v2/home',
  PROVINCES: 'https://www.el-tiempo.net/api/json/v2/provincias',
  // LISTA DE MUNICIPIOS DE PROVINCIA
  // https://www.el-tiempo.net/api/json/v2/provincias/[CODPROV]/municipios
  // INFO MUNICIPIO
  // https://www.el-tiempo.net/api/json/v2/provincias/[CODPROV]/municipios/[ID]
};

export const WEATHER_ICONS: { [key: string]: string } = {
  'Despejado': 'soleado-144.svg',
  'Intervalos nubosos': 'nublado-144.svg',
  'Intervalos nubosos con lluvia': 'lluvia-144.svg',
  'Muy nuboso con lluvia escasa': 'nublado-144.svg',
  'Poco nuboso': 'soleado-144.svg'
}
