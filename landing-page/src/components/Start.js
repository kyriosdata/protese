import React from "react";
import Header from "./Header";

export default class Start extends React.Component {
  render() {
    return (
      <div>
        <div className="header">Uma ferramenta de ensino!</div>
        <div id="hero">
          <div className="linha">
            <div className="icone">
              <img src="protese-logo.png" height="80" />
            </div>
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
          <div className="expo">
            <img src="expo.png" height="20px" className="expo" />
          </div>
          <div className="stores">
            <img src="stores.png" height="20px" />
          </div>
        </div>

        <div className="realizacao">
          <img src="logo-fo.png" width="80" />
          <img src="logo-inf.png" height="75" />
          <img src="logo-ufg.png" width="65" />
        </div>
      </div>
    );
  }
}
