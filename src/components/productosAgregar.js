import inventario from './../data/inventario';
function AgregarProductos() {
  return(
    <>  
      {inventario.map( producto=>{
              return(
                <div class="col-lg-2 contenedor-card" id="producto">
                  <div class="contenedorCard">
                      <div class="card img">
                        <img class="card__img img-card" src="{producto.imagen} " alt="Imagen de {producto.nombre} "/>
                        <div class="card__text producto-datos">
                            <input value="{producto.id}" type="hidden"/>
                            <h3 class="card__title producto-nombre">{producto.nombre}</h3>
                            <p class="precio">"$"{producto.precio}</p>
                        <div>
                            <button id="boton{producto.id}" class="agregar-carrito" style="margin-bottom:3px;margin-left:3px">agregar<i class="bi bi-cart-plus"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      )}
  </>
)
}
