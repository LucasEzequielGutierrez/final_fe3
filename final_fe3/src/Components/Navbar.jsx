import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import IconButton from "@mui/material/IconButton";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import LightModeIcon from "@mui/icons-material/LightMode";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch, initialStatetheme } = useContext(ContextGlobal);
  const themeConfig = () => {
    if (state.theme === initialStatetheme.light) {
      const themeConfig = initialStatetheme.dark;
      dispatch({ type: "THEME", payload: themeConfig });
    } else {
      const themeConfig = initialStatetheme.light;
      dispatch({ type: "THEME", payload: themeConfig });
    }
  };

  const enlaces = [
    { titulo: "Home", route: "/" },
    { titulo: "Contact", route: "/contact" },
    { titulo: "Detail", route: "/detail" },
    { titulo: "Favorites", route: "/favs" },
  ];

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        background: state.theme.nav,
      }}
    >
      {
        /* Aqui deberan agregar los liks correspondientes a las rutas definidas */
        enlaces.map((enlace, indice) => (
          <Link
            to={enlace.route}
            key={indice}
            style={{
              textDecoration: "none",
              color: state.theme.font,
              padding: 10,
            }}
          >
            <h4 style={{ margin: 10 }}>{enlace.titulo}</h4>
          </Link>
        ))
      }
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      {/* <button onClick={themeConfig}>Change theme</button> */}
      <IconButton
        sx={{
          backgroundColor: state.theme.font,
          borderRadius: 2,
          height: 45,
          marginTop: 0.8,
        }}
        onClick={themeConfig}
        disableRipple
      >
        {state.theme === initialStatetheme.light ? (
          <Brightness3Icon sx={{ color: "#FFFFFF" }} /> // Icono para el modo dark
        ) : (
          <LightModeIcon sx={{ color: "#FFB000" }} /> // Icono para el modo light
        )}
      </IconButton>
    </nav>
  );
};

export default Navbar;
