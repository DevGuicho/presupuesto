import React, { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = ({ setPresupuesto, setRestante, setMostrar }) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const definirPresupuesto = (event) => {
    setCantidad(parseInt(event.target.value, 10));
  };
  const agregarPresupuesto = (event) => {
    event.preventDefault();
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrar(false);
  };
  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error && <Error mensaje={"Hubo un error"} />}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="text"
          className="u-full-width"
          placeholder="Colocar presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
