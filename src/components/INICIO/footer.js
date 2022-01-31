import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
function Footer (){
	/*state={
		abierto:false
	}SS
	abrirModal= ()=>{
		this.setState({abierto: !this.state.abierto})render(){	
	}*/
	const abrir = ()=>{
		window.addEventListener('click')
	}
	const cerrar= ()=>{
		window.dispatchEvent('click')
	}
		return(
			<React.Fragment>	
				<footer>
					<div>
						<div>
							<button  onClick={abrir} id="boton-carrito" className="ub"><i className="bi bi-cart4"><span id="contadorCarrito">0</span></i></button>
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
				<div className='modal-contenedor'>	
					<Modal className='modal-carrito'>
						<ModalHeader>
							<h1>
								carrito
							</h1>
							<button ><i onClick={cerrar}>x</i></button>
						</ModalHeader>
						
						<ModalBody className='row'>
							<p className='col-lg-3'>
							nombre
							</p>
							<p className='col-lg-3'>
							precio
							</p>
							<p className='col-lg-3'>
							cantidad
							</p>
							<p className='col-lg-3'>
						
							</p>
						</ModalBody>
						
						<ModalFooter>
							<p>

							</p>
						</ModalFooter>
					</Modal>
				</div>
				
			</React.Fragment>	
			)
		
}
export default Footer