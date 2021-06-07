import React from "react";
import Header from "./Header";

export default class Start extends React.Component {
  render() {
    return (
      <div>
        <div className="header">Uma ferramenta de ensino!</div>
        <div id="hero">
          <img src="protese-logo.png" width="80" />
          <div className="linha">
            <div className="titulo">
              <Header
                title={"Próteses dentárias"}
                subtitle={"Ambiente-se com os mais variados tipos de próteses"}
              />
            </div>
            <div className="telas">
              <img src="telas.png" height="400px" />
            </div>
          </div>
        </div>

        <div className="download">
          <img src="expo.png" height="30px" className="expo" />
          <div className="stores">
            <img src="stores.png" />
          </div>
        </div>

        <div className="realizacao">
          <img src="logo-fo.png" width="80" />
          <img src="logo-inf.png" width="65" />
          <img src="logo-ufg.png" width="65" />
        </div>
      </div>
    );
  }
}
