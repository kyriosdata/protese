import React from "react";

export default class Start extends React.Component {
  render() {
    return (
      <div>
        <section class="hero is-fullheight">
          <div className="hero-head">
            <div className="cabecalho">Uma ferramenta de ensino!</div>
          </div>
          <div className="hero-body has-text-centered">
            <div className="container">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <img src="protese-logo.png" width="40" />
                  </div>
                  <div className="level-item">
                    <div className="has-text-left">
                      <div>
                        <h1 className="title is-1">Próteses dentárias</h1>
                      </div>
                      <p className="subtitle is-3">
                        Ambiente-se com os mais variados tipos de próteses
                      </p>
                    </div>
                  </div>
                  <div className="level-item">
                    <img src="telas.png" width="400px" />
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="columns is-vcentered">
                  <div className="column is-3"></div>
                  <div className="column is-6">
                    <div className="columns is-vcentered">
                      <div class="column is-4">
                        <span className="icon-text">
                          <ion-icon name="heart"></ion-icon>
                          <span>Expo Go</span>
                        </span>
                      </div>
                      <div className="column is-4">App Store</div>
                      <div className="column is-4">Google Play</div>
                    </div>
                  </div>
                  <div className="column is-3"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-foot">
            <div className="realizacao">
              <img src="logo-fo.png" width="80" />
              <img src="logo-inf.png" width="92" />
              <img src="logo-ufg.png" width="95" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
