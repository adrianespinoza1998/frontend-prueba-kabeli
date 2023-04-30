export type Indicador = {
  codigo: string;
  nombre: string;
  unidad_medida: string;
  fecha: string;
  valor: number;
};

export type IndicadorProps = {
  uf: Indicador;
  ivp: Indicador;
  dolar: Indicador;
  dolar_intercambio: Indicador;
  euro: Indicador;
  ipc: Indicador;
  utm: Indicador;
  imacec: Indicador;
  tpm: Indicador;
  libra_cobre: Indicador;
  tasa_desempleo: Indicador;
  bitcoin: Indicador;
};

export type ApiIndicador = IndicadorProps & {
  version: string;
  autor: string;
  fecha: string;
};

export type DataState = {
  isLoading: boolean;
  error: string | null;
  data: ApiIndicador | null;
};
