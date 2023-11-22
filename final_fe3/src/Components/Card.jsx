import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";

const Card = ({ dent }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const findChar = state.favs.find((fav) => fav.id === dent.id);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    if (findChar) {
      const deleteFav = state.favs.filter((fav) => fav.id !== dent.id);
      dispatch({ type: "DELETE_FAV", payload: deleteFav });
      // dispatch({ type: "DELETE_FAV", payload: findChar });
    } else {
      dispatch({ type: "ADD_FAV", payload: dent });
    }
  };

  const style = {
    width: "20%",
    textAlign: "center",
    border: `2px solid ${state.theme.font}`,
    padding: "8px",
  };

  const ruta = `/detail/${dent.id}`;

  return (
    <div className="card" style={style}>
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      {
        <Link
          to={ruta}
          key={dent.id}
          style={{
            textDecoration: "none",
            color: state.theme.font,
            background: state.theme.background,
          }}
        >
          <img src="/images/doctor.jpg" alt="" width={"100%"} />
          <h2>{dent.name}</h2>
          <h3>{dent.username}</h3>
        </Link>
      }
      {
        <IconButton
          sx={{
            backgroundColor: state.theme.font,
            width: "100%",
            borderRadius: "0",
          }}
          onClick={addFav}
          disableRipple
        >
          {findChar ? (
            <StarIcon sx={{ color: "#FFB000" }} />
          ) : (
            <StarIcon sx={{ color: state.theme.color }} />
          )}
        </IconButton>
      }
    </div>
  );
};

export default Card;
