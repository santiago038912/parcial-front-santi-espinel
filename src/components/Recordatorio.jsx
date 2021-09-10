import React, { Component } from "react";

class Recordatorio extends Component {

  componentDidMount() {
    console.log("Las funciones son mejores que las clases")
  }

  render() {

    return (

      <div className="recordatorio">

        <h3>Selección anterior: {this.props.opcionAnterior}</h3>

        <h4>Historial de opciones elegidas: </h4>

        <ul>{this.props.respuestas}</ul>

      </div>

    );
    
  }
}

export default Recordatorio;
