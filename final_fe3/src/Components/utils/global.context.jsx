import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { reducer } from "./reducer";

export const initialStatetheme = {
  light: {
    font: "black",
    background: "white",
    color: "white",
    nav: "#F1EFEF",
  },
  dark: {
    font: "white",
    background: "black",
    color: "black",
    nav: "#4F709C",
  },
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const localFavs = JSON.parse(localStorage.getItem("favs"));
  const initialFavState = localFavs ? localFavs : [];
  const initialState = {
    dentistas: [],
    favs: initialFavState,
    theme: initialStatetheme.light,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch({ type: "GET_DENTISTA", payload: res.data });
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch, initialStatetheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};
