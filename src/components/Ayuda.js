import { Link } from 'react-router-dom';
import React from 'react'
import NavComponents from './INICIO/Nav'
import AyudaContenido from './Ayuda/AyudaContenido'
import Ayuda from './Ayuda/contenidoAyuda'
import Footer from './INICIO/footer'
export default Ayudar
function Ayudar() {
	return(
		<React.Fragment>
			<NavComponents/>
			<AyudaContenido/>
			<Ayuda/>
			<footer/>
		</React.Fragment>
		)
}