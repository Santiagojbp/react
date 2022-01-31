
import React from "react";
import NavComponents from "./INICIO/Nav";
import CreaTuCuenta from "./crear-cuenta/CreaTuCuenta";
import Formulario from "./crear-cuenta/formulario";
import Footer from "./INICIO/footer";

function CrearCuenta() {
    return (
      <React.Fragment>
        <NavComponents/>
        <CreaTuCuenta />
        <Formulario />
        <Footer />
      </React.Fragment>
    );
}
export default CrearCuenta;