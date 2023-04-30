import { IndicadorProps } from "../types/data";
import { IndicadorRow } from "./IndicadorRow";

export const IndicadorTable = ({
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
}: IndicadorProps) => {
  return (
    <div className="pl-40 pr-40 pt-20">
      <table className="min-w-full text-left text-sm font-light">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" className="px-6 py-4">
              Nombre
            </th>
            <th scope="col" className="px-6 py-4">
              Unidad de medida
            </th>
            <th scope="col" className="px-6 py-4">
              Fecha
            </th>
            <th scope="col" className="px-6 py-4">
              Valor
            </th>
          </tr>
        </thead>
        <tbody>
          <IndicadorRow
            codigo={uf.codigo}
            nombre={uf.nombre}
            unidad_medida={uf.unidad_medida}
            fecha={uf.fecha}
            valor={uf.valor}
          />
          <IndicadorRow
            codigo={ivp.codigo}
            nombre={ivp.nombre}
            unidad_medida={ivp.unidad_medida}
            fecha={ivp.fecha}
            valor={ivp.valor}
          />
          <IndicadorRow
            codigo={dolar.codigo}
            nombre={dolar.nombre}
            unidad_medida={dolar.unidad_medida}
            fecha={dolar.fecha}
            valor={dolar.valor}
          />
          <IndicadorRow
            codigo={dolar_intercambio.codigo}
            nombre={dolar_intercambio.nombre}
            unidad_medida={dolar_intercambio.unidad_medida}
            fecha={dolar_intercambio.fecha}
            valor={dolar_intercambio.valor}
          />
          <IndicadorRow
            codigo={euro.codigo}
            nombre={euro.nombre}
            unidad_medida={euro.unidad_medida}
            fecha={euro.fecha}
            valor={euro.valor}
          />
          <IndicadorRow
            codigo={ipc.codigo}
            nombre={ipc.nombre}
            unidad_medida={ipc.unidad_medida}
            fecha={ipc.fecha}
            valor={ipc.valor}
          />
          <IndicadorRow
            codigo={utm.codigo}
            nombre={utm.nombre}
            unidad_medida={utm.unidad_medida}
            fecha={utm.fecha}
            valor={utm.valor}
          />
          <IndicadorRow
            codigo={imacec.codigo}
            nombre={imacec.nombre}
            unidad_medida={imacec.unidad_medida}
            fecha={imacec.fecha}
            valor={imacec.valor}
          />
          <IndicadorRow
            codigo={tpm.codigo}
            nombre={tpm.nombre}
            unidad_medida={tpm.unidad_medida}
            fecha={tpm.fecha}
            valor={tpm.valor}
          />
          <IndicadorRow
            codigo={libra_cobre.codigo}
            nombre={libra_cobre.nombre}
            unidad_medida={libra_cobre.unidad_medida}
            fecha={libra_cobre.fecha}
            valor={libra_cobre.valor}
          />
          <IndicadorRow
            codigo={tasa_desempleo.codigo}
            nombre={tasa_desempleo.nombre}
            unidad_medida={tasa_desempleo.unidad_medida}
            fecha={tasa_desempleo.fecha}
            valor={tasa_desempleo.valor}
          />
          <IndicadorRow
            codigo={bitcoin.codigo}
            nombre={bitcoin.nombre}
            unidad_medida={bitcoin.unidad_medida}
            fecha={bitcoin.fecha}
            valor={bitcoin.valor}
          />
        </tbody>
      </table>
    </div>
  );
};
