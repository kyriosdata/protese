import React from "react";
import Header from "./Header";

export default class Start extends React.Component {
  render() {
    return (
      <div>
        <div className="header">Uma ferramenta de ensino!</div>
        <div id="hero">
          <img src="protese-logo.png" width="100" />
          <Header
            title={"Próteses dentárias"}
            subtitle={"Ambiente-se com os mais variados tipos de próteses"}
          />
          <img src="telas.png" />
        </div>

        <img src="expo.png" />
        <img src="stores.png" />
        <div className="realizacao">
          <img src="logo-fo.png" width="80" />
          <img src="logo-inf.png" width="65" />
          <img src="logo-ufg.png" width="65" />
        </div>
      </div>
    );
  }
}
