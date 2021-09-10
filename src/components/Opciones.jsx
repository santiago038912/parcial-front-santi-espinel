import React, { Component } from "react";

class Opciones extends Component {

  componentDidMount() {
    console.log("Las funciones son mejores que las clases")
  }
  
  render() {
    return (

      <div className="opciones">

        <div className="opcion">

          <button id="A" className="botones" onClick={this.props.handleClick}>
            A
          </button>

          <h2>{this.props.opA}</h2>

        </div>
        
        <div className="opcion">

          <button id="B" className="botones" onClick={this.props.handleClick}>
            B
          </button>

          <h2>{this.props.opB}</h2>

        </div>
        
      </div>

    );
  }
}

export default Opciones;