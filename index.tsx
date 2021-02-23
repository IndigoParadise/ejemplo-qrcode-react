import React, { Component } from "react";
import { render } from "react-dom";
import QRCode from "qrcode.react";
import "./style.css";

interface AppProps {}
interface AppState {}
class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
   
  }

  render() {
    return (
      <div>
        <p>Ejemplo de como generar codigo qr con qrcode.react</p>
        <div className="centrar-div">
          <QRCode renderAs='canvas' level='H' includeMargin={true} value="www.refactorizando.blog" />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
