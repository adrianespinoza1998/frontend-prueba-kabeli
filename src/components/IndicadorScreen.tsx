import { ApiIndicador } from "../types/data";
import { changeDateFormat } from "../utils/dates";
import { Indicador } from "./Indicador";

export const IndicadorScreen = ({
  version,
  autor,
  fecha,
  uf,
  ivp,
  dolar,
  dolar_intercambio,
  euro,
  ipc,
  utm,
  imacec,
  tpm,
  libra_cobre,
  tasa_desempleo,
  bitcoin,
}: ApiIndicador) => {
  return (
    <ul className="list-disc container mx-auto w-30">
      <li>Versión: {version}</li>
      <li>Autor: {autor}</li>
      <li>Fecha: {changeDateFormat(fecha)}</li>
      <li>UF:</li>
      <Indicador
        codigo={uf.codigo}
        nombre={uf.nombre}
        unidad_medida={uf.unidad_medida}
        fecha={uf.fecha}
        valor={uf.valor}
      />
      <li>IVP:</li>
      <Indicador
        codigo={ivp.codigo}
        nombre={ivp.nombre}
        unidad_medida={ivp.unidad_medida}
        fecha={ivp.fecha}
        valor={ivp.valor}
      />
      <li>Dolar:</li>
      <Indicador
        codigo={dolar.codigo}
        nombre={dolar.nombre}
        unidad_medida={dolar.unidad_medida}
        fecha={dolar.fecha}
        valor={dolar.valor}
      />
      <li>Dolar Intercambio:</li>
      <Indicador
        codigo={dolar_intercambio.codigo}
        nombre={dolar_intercambio.nombre}
        unidad_medida={dolar_intercambio.unidad_medida}
        fecha={dolar_intercambio.fecha}
        valor={dolar_intercambio.valor}
      />
      <li>Euro:</li>
      <Indicador
        codigo={euro.codigo}
        nombre={euro.nombre}
        unidad_medida={euro.unidad_medida}
        fecha={euro.fecha}
        valor={euro.valor}
      />
      <li>IPC:</li>
      <Indicador
        codigo={ipc.codigo}
        nombre={ipc.nombre}
        unidad_medida={ipc.unidad_medida}
        fecha={ipc.fecha}
        valor={ipc.valor}
      />
      <li>UTM:</li>
      <Indicador
        codigo={utm.codigo}
        nombre={utm.nombre}
        unidad_medida={utm.unidad_medida}
        fecha={utm.fecha}
        valor={utm.valor}
      />
      <li>Imacec:</li>
      <Indicador
        codigo={imacec.codigo}
        nombre={imacec.nombre}
        unidad_medida={imacec.unidad_medida}
        fecha={imacec.fecha}
        valor={imacec.valor}
      />
      <li>TPM:</li>
      <Indicador
        codigo={tpm.codigo}
        nombre={tpm.nombre}
        unidad_medida={tpm.unidad_medida}
        fecha={tpm.fecha}
        valor={tpm.valor}
      />
      <li>Libra Cobre:</li>
      <Indicador
        codigo={libra_cobre.codigo}
        nombre={libra_cobre.nombre}
        unidad_medida={libra_cobre.unidad_medida}
        fecha={libra_cobre.fecha}
        valor={libra_cobre.valor}
      />
      <li>Tasa desempleo:</li>
      <Indicador
        codigo={tasa_desempleo.codigo}
        nombre={tasa_desempleo.nombre}
        unidad_medida={tasa_desempleo.unidad_medida}
        fecha={tasa_desempleo.fecha}
        valor={tasa_desempleo.valor}
      />
      <li>Bitcoin:</li>
      <Indicador
        codigo={bitcoin.codigo}
        nombre={bitcoin.nombre}
        unidad_medida={bitcoin.unidad_medida}
        fecha={bitcoin.fecha}
        valor={bitcoin.valor}
      />
    </ul>
  );
};
