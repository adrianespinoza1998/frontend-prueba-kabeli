import { Indicador } from "../types/data";
import { changeDateFormat } from "../utils/dates";

export const IndicadorRow = ({
  nombre,
  unidad_medida,
  fecha,
  valor,
}: Indicador) => {
  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap px-6 py-4">{nombre}</td>
      <td className="whitespace-nowrap px-6 py-4">{unidad_medida}</td>
      <td className="whitespace-nowrap px-6 py-4">{changeDateFormat(fecha)}</td>
      <td className="whitespace-nowrap px-6 py-4">{valor}</td>
    </tr>
  );
};
