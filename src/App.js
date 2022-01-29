import { Link } from 'react-router-dom';
import React from 'react'
import './sass/App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Inicio from './components/inicio';
import Ayudar from './components/Ayuda'
import Cuenta from './components/crearCuenta'
import Quienes from './components/quienes'
const ThemeContext = React.createContext()

function App() {
  const Home = ()=> <Inicio/>
  const Cuentaa = ()=> <Cuenta/>
  const Ayudaa = ()=> <Ayudar/>
  const Quieness = ()=> <Quienes/>
  return (
    <BrowserRouter className="App"> 
        <Routes>    
            <Route exact path="/" element={<Home></Home>}/>
            <Route exact path="/Cuentaa" element={<Home></Home>}/>
            <Route exact path="/Ayudaa" element={<Ayudaa></Ayudaa>}/>
            <Route exact path="/Quieness" element={<Quieness></Quieness>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
