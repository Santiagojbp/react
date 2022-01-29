import inventario from "./../../../data/inventario"
import {TYPES} from "./agregar-al-carrito" 

export const CarritoInicio = {
	inventario,
	carro:[],
}

export function shopingReducer (state, action) {
	switch (action.type){
		case TYPES.agregarAlCarrito:{

		}
		case TYPES.removerUno:{
			
		}
		case TYPES.removerProducto:{
			
		}
		case TYPES.limpiarCarrito:{
			
		}
		break;

		default:
			return state;
		break;
	
	}
}