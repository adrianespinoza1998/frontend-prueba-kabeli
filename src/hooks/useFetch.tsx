import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { ApiIndicador, DataState } from "../types/data";

export const useFetch = (url: string, method: string) => {
  const [data, setData] = useState<DataState>({
    data: null,
    isLoading: true,
    error: null,
  });

  const handleFetch = useCallback(async () => {
    try {
      const response = await axios({
        url,
        method,
      });

      const dataApi: ApiIndicador = await response.data;

      setData({
        data: dataApi,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      console.log(error);

      setData({
        data: null,
        isLoading: false,
        error: (error as Error).message,
      });
    }
  }, [url]);

  useEffect(() => {
    if (data !== null) handleFetch();
  }, [url]);

  return {
    ...data,
  };
};
