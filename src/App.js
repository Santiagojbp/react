import BienvenidoTag from './components/bienvenidos'
import CarruselImg from './components/carrusel'
import AgregarProductos from './components/productosAgregar'
import  './data/stock.json';
import './sass/App.scss';
import NavComponents from './components/Nav'


function App() {
  return (
    <div className="App">
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
  );
};

export default App;
