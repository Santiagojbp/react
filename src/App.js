
import React from "react";
import "./sass/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect  } from "react";
import Inicio from "./components/Inicio";
import Ayudar from "./components/Ayuda";
import CrearCuenta from "./components/CrearCuenta";
import Quienes from "./components/Quienes";
import ThemeContext from "./components/context/ThemeContext";

function App () {
  const ThemeContext = React.createContext() 
  const [state, setState] = useState('test')
    return (
      <ThemeContext.Provider value={state} >
        <BrowserRouter className="App">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/cuenta" element={<CrearCuenta/>} />
            <Route path="/ayuda" element={<Ayudar/>} />
            <Route path="/quienes" element={<Quienes />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider> 
    );

}
export default App;

