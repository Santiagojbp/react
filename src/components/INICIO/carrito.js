import React from 'react';
import {userReducer} from 'react';
import {shopingReducer, CarritoInicio} from "./carrito/reductor";
import inventario from './../../data/inventario'
import carro from './carrito/reductor'
import productItem from './carrito/productItem';
export default carrito
function carrito() {
	const {state, dispatch} = userReducer(shopingReducer,CarritoInicio)
	const [inventario, carro] = state;
	const agregarAlCarrito = (id)=> {
		console.log(id)
	}
	const eliminarDelCarrito = ()=>{

	}
	const limpiarCarrito = ()=>{

	}
	return(
		<React.Fragment>
			<div>
				<h2>carrito</h2>
				<h3>productos</h3>
				<article className="contenedor">
					{inventario.map((product)=> <productItem key={product.id} data={product} agregarAlCarrito={agregarAlCarrito} />)}
				</article>
				<article className="contenedor"></article>
			</div>
		</React.Fragment>
		)
}