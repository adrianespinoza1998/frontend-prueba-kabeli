import { Suspense, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { fetchData } from "./utils/fetchData";
import { IndicadorScreen } from "./components/IndicadorScreen";
import { useDispatch } from "react-redux";
import { addIndicador } from "./redux/indicadorSlice";
import "./index.css";

const apiData = fetchData(
  `${import.meta.env.VITE_BACKEND_URL}/api/indicadores`
);

const App = () => {
  const data = apiData.read();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addIndicador(data));
  }, [data, dispatch]);

  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <IndicadorScreen />
      </Suspense>
    </div>
  );
};

export default App;
