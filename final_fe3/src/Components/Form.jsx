import React, { useState, useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Form = () => {
  const { state } = useContext(ContextGlobal);
  //Aqui deberan implementar el form completo con sus validaciones
  const [cliente, setCliente] = useState({
    name: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (cliente.name.length > 5 && emailRegex.test(cliente.email)) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };
  return (
    <div
      style={{
        color: state.theme.font,
        background: state.theme.background,
      }}
    >
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            textAlign: "center",
          }}
        >
          <label>Nombre:</label>
          <input
            type="text"
            onChange={(event) =>
              setCliente({ ...cliente, name: event.target.value })
            }
          />
          <label>Email:</label>
          <input
            type="text"
            onChange={(event) =>
              setCliente({ ...cliente, email: event.target.value })
            }
          />
          <button>Enviar</button>
        </div>

        {error && (
          <h2 style={{ color: "red", textAlign: "center" }}>
            Por favor verifique su información nuevamente
          </h2>
        )}

        {show ? (
          <>
            <h4 style={{ color: "green", textAlign: "center" }}>
              Gracias {cliente.name}!
            </h4>
            <h4 style={{ color: "green", textAlign: "center" }}>
              Te contactaremos cuando antes vía mail
            </h4>
          </>
        ) : null}
      </form>
    </div>
  );
};

export default Form;
