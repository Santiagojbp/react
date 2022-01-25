
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
export default Footer
function Footer() {
	return(
		<React.Fragment>	
			<footer>
				<div>
					<div>
						<button id="boton-carrito" className="ub"><i className="bi bi-cart4"><span id="contadorCarrito">0</span></i></button>
					</div>	
					<div>
						<section>
							<article >
								<h1 className="gracias">Gracias por elegirnos</h1>
							</article>
						</section>
					</div>	
				</div>
			</footer>
		</React.Fragment>	
		)
}
