import inventario from './../data/inventario'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
export default AgregarProductos
function AgregarProductos() {
return(
    <>  
      {inventario.map( producto=>{
              return(
                <div className="col-lg-2 contenedor-card" id="producto">
                  <div className="contenedorCard">
                    <div className="card img">
                      <img className="card__img img-card" src="{producto.imagen} " alt="Imagen de {producto.nombre} "/>
                      <div className="card__text producto-datos">
                        <input value="{producto.id}" type="hidden"/>
                        <h3 className="card__title producto-nombre">{producto.nombre}</h3>
                        <p className="precio">"$"{producto.precio}</p>
                        <div>
                            <button id="boton{producto.id}" className="agregar-carrito" >agregar<i className="bi bi-cart-plus"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        )}
      )}
  </>
)
}

