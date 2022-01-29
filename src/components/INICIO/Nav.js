import { Link } from 'react-router-dom';
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
let logo = './assets/img/fondos/icono2.0.jpg';
export default NavComponents 
function NavComponents() {
	return (
		<React.Fragment>
			<header className="App-header">		
				<div>
					<div className="contenedor-img">
						<img src={logo} alt="logo" className="App-logo"/>
					</div>
					<div>
						<nav>
							<ul className="contenedor-li">
								<li className="nav-li"><Link ></Link> </li>
								<li className="nav-li"><Link></Link> </li>
								<li className="nav-li"><Link ></Link> </li>
								<li className="nav-li"><Link></Link> </li>
							</ul>
						</nav>
					</div>	
				</div>
			</header>
		</React.Fragment> )
}