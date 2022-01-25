import { Link } from 'react-router-dom';
import React from 'react'
import './sass/App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Inicio from './components/inicio';
import Ayuda from './components/Ayuda'
import Cuenta from './components/crearCuenta'
import Quienes from './components/quienes'
const ThemeContext = React.createContext()
const Home = ()=> <Inicio/>

function App() {
  return (
    <BrowserRouter className="App"> 
        <Routes>    
            <Route exact path="/" element={<Home></Home>}/>
            <Route exact path="/Cuenta" element={<Cuenta></Cuenta>}/>
            <Route exact path="/Ayuda" element={<Ayuda></Ayuda>}/>
            <Route exact path="/Quienes" element={<Quienes></Quienes>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
