import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import historia from "./json/data";
import React, {Component} from "react";
import Opciones from "./components/Opciones";
import Recordatorio from "./components/Recordatorio";
import "./App.css";


const respuestas = [];

const MySwal = withReactContent(Swal);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          contador: 0,
          opcionAnterior: "",
        };
      }

      componentDidMount() {
        console.log("Las funciones son mejores que las clases")
      }
    
      componentDidUpdate(anterior) {
        if (anterior.contador !== this.state.contador) {
          respuestas.push(this.state.opcionAnterior);
        }
      }
    
      handleClick = (p) => {

        const id = p.target.id;

        if (this.state.contador >= 7) {
          MySwal.fire(
            'Has acabado la historia'
          );
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

      };
    
      render() {
        return (

          <div className="layout">

            <h1 className="historia">{historia[this.state.contador].historia}</h1>

            <Opciones
              handleClick={this.handleClick}
              opA={historia[this.state.contador].opciones.a}
              opB={historia[this.state.contador].opciones.b}
            />

            <Recordatorio
              opcionAnterior={this.state.opcionAnterior}
              respuestas={respuestas.map(
                (p , index) => (
                  <li key={index}>{p}</li>
                ),
                historia[this.state.contador].id
              )}
            />

          </div>

        );
      }
}

export default App;