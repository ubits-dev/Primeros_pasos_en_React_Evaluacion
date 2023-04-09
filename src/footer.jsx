import React from "react";
import ComponenteReutilizable from "./componente-reutilizable";

const Footer = () => {
  const nombreComponente = "Footer";

  return (
    <div className="Footer">
      Este es el {nombreComponente}
      <ComponenteReutilizable nombre="Componente en Footer" />
    </div>
  );
};

export default Footer;
