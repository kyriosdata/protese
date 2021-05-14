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
    descricao: "uma mensagem",
    imagem: "0.21415182342544048",
  },
  {
    descricao: "segunda mensagem",
    imagem: "0.44090005424089307",
  },
  {
    descricao: "terceira mensagem, talvez tenha algum item",
    imagem: "0.652043037690932",
  },
  {
    descricao: "quarta",
    imagem: "0.9222046648535486",
  },
  {
    descricao: "quinta",
    imagem: "0.7238691822264185",
  },
  {
    descricao: "Davi",
    imagem: "0.3591338417229475",
  },
  {
    descricao: "muitos itens nesta lista",
    imagem: "0.569799755915859",
  },
  {
    descricao: "oh, outro",
    imagem: "0.22913020774376025",
  },
  {
    descricao: "algo mais",
    imagem: "0.4595304898029434",
  },
  {
    descricao: "sim, ainda tem outro",
    imagem: "0.7256089916409116",
  },
  {
    descricao: "o último",
    imagem: "0.1877380922583025",
  },
  {
    descricao: "após o último",
    imagem: "0.580004857150314",
  },
  {
    descricao: "outro item inserido na lista, sem efeito",
    imagem: "0.5989844424249474",
  },
  {
    descricao: "não vai parar de inserir",
    imagem: "0.4315099555323624",
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
