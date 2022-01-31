import React from "react";
class Abrir extends React.Component{
    state={
        abierto:false
    }
    cerrarCarrito=()=>{
        this.setState({abierto: !this.cerrado.abierto})
    }
}
export default Abrir