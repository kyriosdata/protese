import React from "react";

/**
 * Há três tipos de próteses: (a) total; (b) parcial fixa e
 * (c) parcial removível.
 *
 * Cada exemplo, qualquer que seja
 * o tipo, é descrito por uma
 * mesma estrutura ({@link ProteseEstrutura}),
 * formada por imagem e descrição.
 */

/**
 * Estrutura que representa uma prótese.
 * @typedef {Object} ProteseEstrutura
 * @property {string} imagem - Nome do arquivo de imagem. Este nome é único (chave).
 * @property {string} descricao - Descrição sobre a imagem.
 */

const totais = [
  {
    id: "3_1",
    descricao: "uma mensagem",
    imagem: require("../assets/fotos/3_1.jpg"),
  },
  {
    id: "3_2",
    descricao: "uma mensagem",
    imagem: require("../assets/fotos/3_2.jpg"),
  },
];

export default class Proteses {
  static totais() {
    return totais;
  }

  static parciaisFixas() {
    return totais;
  }

  static parciaisRemoviveis() {
    return totais;
  }
}
