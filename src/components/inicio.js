import BienvenidoTag from './bienvenidos'
import CarruselImg from './carrusel'
import AgregarProductos from './productosAgregar'
import NavComponents from './Nav'
export default Inicio
function Inicio() {
	return(
		<div>
			<header className="App-header">
              <NavComponents/>
            </header>
            <section>
              <BienvenidoTag/>
              <CarruselImg/>
            </section>
            <section>
              <div id="contenedor-productos" className="row">
                <AgregarProductos/>
              </div>
            </section>
		</div>
		)
}
