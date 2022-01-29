import { Link } from 'react-router-dom';
import React from 'react'
import NavComponents from './INICIO/Nav'
import CreaTuCuenta from './crear-cuenta/crea-tu-cuenta'
import Formulario from './crear-cuenta/formulario'
import Footer from './INICIO/footer'
export default Cuenta
function Cuenta() {
	return(
		<React.Fragment>
			<NavComponents/>
			<CreaTuCuenta/>
			<Formulario/>
			<Footer/>
		</React.Fragment>
		)
}