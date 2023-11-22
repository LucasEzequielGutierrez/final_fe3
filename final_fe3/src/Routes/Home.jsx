import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(ContextGlobal);

  const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  };

  return (
    <main
      className=""
      style={{
        color: state.theme.font,
        background: state.theme.background,
        marginTop: 20,
      }}
    >
      <div className="card-grid" style={style}>
        {/* Aqui deberias renderizar las cards */}
        {state.dentistas.map((dent) => (
          <Card key={dent.id} dent={dent}></Card>
        ))}
      </div>
    </main>
  );
};

export default Home;
