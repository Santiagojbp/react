import React from 'react'
export default carrito
function carrito() {
	return(
		<React.Fragment>
			<div className="modal-contenedor">
		        <div className="modal-carrito">
		            <h3>Carrito</h3>
		            <button id="carritoCerrar"><i className="cierra bi bi-x-circle-fill"></i></button>
		            <div id="carrito-contenedor">
		            </div>
		            <div className="row">
		            	<div className="col-9">
		            		<p className="precioProducto">Precio total: $<span id="precioTotal"></span></p>
		            	</div>
		            	<div className="col-3">
		            		<button type="button" className="btn btn-outline-warning comprado" id="producto-comprado">comprar</button>
		            	</div>
		        	</div>
		        </div>
		    </div>
		</React.Fragment>
		)
}