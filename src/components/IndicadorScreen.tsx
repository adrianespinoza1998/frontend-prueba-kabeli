import { ApiIndicador } from "../types/data";
import { IndicadorTable } from "./IndicadorTable";

export const IndicadorScreen = ({
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
