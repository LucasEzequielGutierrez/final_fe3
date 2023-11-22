import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const [dentistaDetail, setDentistaDetail] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => {
        console.log(res.data);
        setDentistaDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <h1>Detalles del Dentista </h1>
      <table className="table">
        <tbody>
          <tr>
            <td>Nombre:</td>
            <td>{dentistaDetail.name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{dentistaDetail.email}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{dentistaDetail.phone}</td>
          </tr>
          <tr>
            <td>Website:</td>
            <td>{dentistaDetail.website}</td>
          </tr>
        </tbody>
      </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
