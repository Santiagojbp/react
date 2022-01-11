import './sass/App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Inicio from './components/inicio';
const Home = ()=> <Inicio/>

function App() {
  return (
    <BrowserRouter> 
        <Routes exact path="/Home" element={<Home></Home>}/>
    </BrowserRouter>
  );
};

export default App;
