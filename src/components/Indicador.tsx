import { Indicador as IndicadorType } from "../types/data";
import { changeDateFormat } from "../utils/dates";

export const Indicador = ({
  codigo,
  nombre,
  unidad_medida,
  fecha,
  valor,
}: IndicadorType) => {
  return (
    <ul className="list-disc ml-5">
      <li>Codigo: {codigo}</li>
      <li>Nombre: {nombre}</li>
      <li>Unidad de medida: {unidad_medida}</li>
      <li>Fecha: {changeDateFormat(fecha)}</li>
      <li>Valor: {valor}</li>
    </ul>
  );
};
