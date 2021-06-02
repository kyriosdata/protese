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
    descricao: "uma mensagem, possivelmente em texto bem mais extenso",
    imagem: require("../assets/fotos/3_1.jpg"),
  },
  {
    id: "3_2",
    descricao: "uma mensagem",
    imagem: require("../assets/fotos/3_2.jpg"),
  },
  {
    id: "3_3",
    descricao: "uma mensagem",
    imagem: require("../assets/fotos/3_3.jpg"),
  },
  {
    id: "3_4",
    descricao: "uma mensagem",
    imagem: require("../assets/fotos/3_4.jpg"),
  },
  {
    id: "3_5",
    descricao: "uma mensagem",
    imagem: require("../assets/fotos/3_5.jpg"),
  },
  {
    id: "3_6",
    descricao: "uma mensagem",
    imagem: require("../assets/fotos/3_6.jpg"),
  },
  {
    id: "3_7",
    descricao: "uma mensagem",
    imagem: require("../assets/fotos/3_7.jpg"),
  },
];

const fixas = [
  {
    id: "3_8",
    descricao: "uma mensagem, possivelmente em texto bem mais extenso",
    imagem: require("../assets/fotos/3_8.jpg"),
  },
  {
    id: "3_9",
    descricao: "uma mensagem, possivelmente em texto bem mais extenso",
    imagem: require("../assets/fotos/3_9.jpg"),
  },
  {
    id: "3_10",
    descricao: "uma mensagem, possivelmente em texto bem mais extenso",
    imagem: require("../assets/fotos/3_10.jpg"),
  },
  {
    id: "3_11",
    descricao: "uma mensagem, possivelmente em texto bem mais extenso",
    imagem: require("../assets/fotos/3_11.jpg"),
  },
];

const removiveis = [
  {
    id: "3_12",
    descricao: "uma mensagem, possivelmente em texto bem mais extenso",
    imagem: require("../assets/fotos/3_12.jpg"),
  },
  {
    id: "3_13",
    descricao: "uma mensagem, possivelmente em texto bem mais extenso",
    imagem: require("../assets/fotos/3_13.jpg"),
  },
  {
    id: "3_14",
    descricao: "uma mensagem, possivelmente em texto bem mais extenso",
    imagem: require("../assets/fotos/3_14.jpg"),
  },
  {
    id: "3_15",
    descricao: "uma mensagem, possivelmente em texto bem mais extenso",
    imagem: require("../assets/fotos/3_15.jpg"),
  },
];

export default class Proteses {
  static totais() {
    return totais;
  }

  static parciaisFixas() {
    return fixas;
  }

  static parciaisRemoviveis() {
    return removiveis;
  }
}
