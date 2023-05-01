import { ApiIndicador } from "../types/data";
import { IndicadorTable } from "./IndicadorTable";
import { useSelector } from "react-redux";

export const IndicadorScreen = () => {
  const indicador = useSelector((state: ApiIndicador) => state);

  return (
    <div>
      <IndicadorTable
        uf={indicador.uf}
        ivp={indicador.ivp}
        dolar={indicador.dolar}
        dolar_intercambio={indicador.dolar_intercambio}
        euro={indicador.euro}
        ipc={indicador.ipc}
        utm={indicador.utm}
        imacec={indicador.imacec}
        tpm={indicador.tpm}
        libra_cobre={indicador.libra_cobre}
        tasa_desempleo={indicador.tasa_desempleo}
        bitcoin={indicador.bitcoin}
      />
    </div>
  );
};
