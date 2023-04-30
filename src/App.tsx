import { IndicadorScreen } from "./components/IndicadorScreen";
import { Navbar } from "./components/Navbar";
import { useFetch } from "./hooks/useFetch";
import "./index.css";

const App = () => {
  const { data, error, isLoading } = useFetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/indicadores`,
    "GET"
  );

  return (
    <div>
      <Navbar />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
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
      )}
      {/* <IndicadorTable /> */}
    </div>
  );
};

export default App;
