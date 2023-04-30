import { ApiIndicador } from "../types/data";
import { changeDateFormat } from "../utils/dates";
import { Indicador } from "./Indicador";
import { IndicadorTable } from "./IndicadorTable";

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
    <div>
      {/* <ul className="list-disc container mx-auto w-30">
        <li>Versión: {version}</li>
        <li>Autor: {autor}</li>
        <li>Fecha: {changeDateFormat(fecha)}</li>
      </ul> */}
      <IndicadorTable
        uf={uf}
        ivp={ivp}
        dolar={dolar}
        dolar_intercambio={dolar_intercambio}
        euro={euro}
        ipc={ipc}
        utm={utm}
        imacec={imacec}
        tpm={tpm}
        libra_cobre={libra_cobre}
        tasa_desempleo={tasa_desempleo}
        bitcoin={bitcoin}
      />
    </div>
  );
};
