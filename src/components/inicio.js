import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BienvenidoTag from "./INICIO/bienvenidos.js"
import { Link } from 'react-router-dom';
import CarruselImg from "./INICIO/carrusel.js"
import AgregarProductos from "./INICIO/productosAgregar.js"
import NavComponents from "./INICIO/Nav.js"
import Footer from "./INICIO/footer"
import carrito from "./INICIO/carrito"
/*import Shell from './INICIO/Shell'*/
export default Inicio
function Inicio() {
	return(
    <React.Fragment> 
        <NavComponents/>
        <BienvenidoTag/>
        <CarruselImg/>
        <section id="contenedor-productos" className="row">
          <AgregarProductos/>
         </section>
         <Footer/>
    </React.Fragment>
		)
}
