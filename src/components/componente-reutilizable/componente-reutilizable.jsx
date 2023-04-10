import React from "react";

const ComponenteReutilizable = ({ nombre }) => {
  return (
    <div className="Componente">
      Hola estas utilizando este componente al que le diste el nombre de:{" "}
      {nombre}
    </div>
  );
};

export default ComponenteReutilizable;
