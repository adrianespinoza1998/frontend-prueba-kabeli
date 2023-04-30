import { useFetch } from "./hooks/useFetch";
import "./index.css";

const App = () => {
  const { data, error, isLoading } = useFetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/indicadores`,
    "GET"
  );

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-600">
        Simple React Typescript Tailwind Sample
      </h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default App;
