import { Indicador } from "./components/Indicador";
import { IndicadorScreen } from "./components/IndicadorScreen";
import { useFetch } from "./hooks/useFetch";
import "./index.css";
import { changeDateFormat } from "./utils/dates";

const App = () => {
  const { data, error, isLoading } = useFetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/indicadores`,
    "GET"
  );

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Indicadores</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div>
          <IndicadorScreen
            version={data.version}
            autor={data.autor}
            fecha={data.fecha}
            uf={data.uf}
            ivp={data.ivp}
            dolar={data.dolar}
            dolar_intercambio={data.dolar_intercambio}
            euro={data.euro}
            ipc={data.ipc}
            utm={data.utm}
            imacec={data.imacec}
            tpm={data.tpm}
            libra_cobre={data.libra_cobre}
            tasa_desempleo={data.tasa_desempleo}
            bitcoin={data.bitcoin}
          />
        </div>
      )}
    </div>
  );
};

export default App;
