import React from 'react'
import { Link } from 'react-router-dom';

const ProductItem = (data, agregarAlCarrito)=> {
	let {id, nombre, precio, imagen} = data;
	return(
		<React.Fragment>
			<div>
				<div className="col-lg-2 contenedor-card" id="producto">
                    <div className="contenedorCard">
                      <div className="card img">
                        <img className="card__img img-card" src={imagen} alt="Imagen de {nombre} "/>
                        <div className="card__text producto-datos">
                          <input value="{id}" type="hidden"/>
                          <h3 className="card__title producto-nombre">{nombre}</h3>
                          <p className="precio">"$"{precio}</p>
                          <div>
                              <button onClick={()=> agregarAlCarrito(id)} id="boton{id}" className="agregar-carrito" >agregar<i className="bi bi-cart-plus"></i></button>
                             <Link className="detalles" to={"productos/"+ id}>Detalles</Link> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
			</div>	
		</React.Fragment>

		)
}