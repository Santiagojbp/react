import { Link } from 'react-router-dom';
import React from 'react'
import './sass/App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Inicio from './components/inicio';
const ThemeContext = React.createContext()
const Home = ()=> <Inicio/>

function App() {
  return (
    <BrowserRouter className="App"> 
        <Routes>    
            <Route exact path="/" element={<Home></Home>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
