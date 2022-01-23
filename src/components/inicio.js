import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BienvenidoTag from "./bienvenidos.js"
import CarruselImg from "./carrusel.js"
import AgregarProductos from "./productosAgregar.js"
import NavComponents from "./Nav.js"
export default Inicio
function Inicio() {
	return(
    <React.Fragment>
  			<header className="App-header"> 
                <NavComponents/>
              </header>
              <section>
                <BienvenidoTag/>
                <CarruselImg/>
              </section>
              <section>
                <div id="contenedor-productos" className="row">
                  <AgregarProductos/>
                </div>
              </section>
            <header/>
    </React.Fragment>
		)
}
