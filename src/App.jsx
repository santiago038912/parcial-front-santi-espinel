import data from "./components/data";
import React, {Component} from "react";
import Opciones from "./components/Opciones";
import Recordatorio from "./components/Recordatorio";
import "./App.css";


const historial = [];

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          contador: 0,
          opcionAnterior: "",
        };
      }
    
      componentDidUpdate(prevState) {
        if (prevState.contador !== this.state.contador) {
          historial.push(this.state.opcionAnterior);
        }
      }
    
      handleClick = (p) => {

        const id = p.target.id;

        if (this.state.contador >= 7) {
          alert("Final sin desayuno :(");
        } else if (id === "A" && this.state.opcionAnterior !== "A") {
          this.setState({
            contador: this.state.contador + 1,
            opcionAnterior: "A",
          });
        } else if (id === "A" && this.state.opcionAnterior === "A") {
          this.setState({
            contador: this.state.contador + 2,
          });
        } else if (id === "B" && this.state.opcionAnterior === "A") {
          this.setState({
            contador: this.state.contador + 3,
            opcionAnterior: "B",
          });
        } else if (id === "B") {
          this.setState({
            contador: this.state.contador + 2,
            opcionAnterior: "B",
          });

        }

        console.log(historial);

      };
    
      render() {
        return (

          <div className="layout">
            <h1 className="historia">{data[this.state.contador].historia}</h1>

            <Opciones
              handleClick={this.handleClick}
              opA={data[this.state.contador].opciones.a}
              opB={data[this.state.contador].opciones.b}
            />

            <Recordatorio
              opcionAnterior={this.state.opcionAnterior}
              historial={historial.map(
                (p , index) => (
                  <li key={index}>{p}</li>
                ),
                data[this.state.contador].id
              )}
            />

          </div>

        );
      }
}

export default App;