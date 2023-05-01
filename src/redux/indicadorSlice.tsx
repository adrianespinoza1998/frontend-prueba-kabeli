import { ApiIndicador } from "../types/data";
import { createSlice } from "@reduxjs/toolkit";
import { indicadorInitialState } from "../utils/indicadorUtils";

const initialState = indicadorInitialState;

export const indicadorSlice = createSlice({
  name: "indicador",
  initialState,
  reducers: {
    addIndicador: (state, action) => {
      const {
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
      } = action.payload as ApiIndicador;

      state.version = version;
      state.autor = autor;
      state.fecha = fecha;
      state.uf = uf;
      state.ivp = ivp;
      state.dolar = dolar;
      state.dolar_intercambio = dolar_intercambio;
      state.euro = euro;
      state.ipc = ipc;
      state.utm = utm;
      state.imacec = imacec;
      state.tpm = tpm;
      state.libra_cobre = libra_cobre;
      state.tasa_desempleo = tasa_desempleo;
      state.bitcoin = bitcoin;
    },
  },
});

export const { addIndicador } = indicadorSlice.actions;
export default indicadorSlice.reducer;
