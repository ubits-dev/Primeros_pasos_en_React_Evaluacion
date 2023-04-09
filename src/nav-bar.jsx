import React from "react";
import ComponenteReutilizable from "./componente-reutilizable";

const NavBar = () => {
  const nombreComponente = "NavBar";

  return (
    <div className="NavBar">
      Este es el {nombreComponente}
      <ComponenteReutilizable nombre="Componente en NavBar" />
    </div>
  );
};

export default NavBar;
