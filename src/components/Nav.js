import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
let logo = './assets/img/fondos/icono2.0.jpg';
export default NavComponents 
function NavComponents() {
	return (
		<React.Fragment>
			<div>
				<div className="contenedor-img">
					<img src={logo} alt="logo" className="App-logo"/>
				</div>
				<div>
					<nav>
						<ul className="contenedor-li">
							<li className="nav-li"><a href="">Inicio</a></li>
							<li className="nav-li">
								<a >Categorias<i className="bi bi-caret-down"></i></a>
								<ul className="contenedor-categorias">
									<li className="li-categorias"><a href="">limpieza</a></li>
									<li className="li-categorias"><a href="">limpieza</a></li>
									<li className="li-categorias"><a href="">limpieza</a></li>
									<li className="li-categorias"><a href="">limpieza</a></li>
									<li className="li-categorias"><a href="">limpieza</a></li>
								</ul>
							</li>
							<li className="nav-li"><a href="">Crear cuenta</a></li>
							<li className="nav-li"><a href="">Ayuda</a></li>
							<li className="nav-li"><a href="">Quienes somos</a></li>
						</ul>
					</nav>
				</div>	
			</div>
		</React.Fragment> )
}