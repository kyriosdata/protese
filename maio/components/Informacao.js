import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Botao from "../components/Botao";
import Cores from "../constants/Cores";

const Informacao = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.safearea}>
        <View style={styles.linha}>
          <Image
            style={styles.logo}
            source={require("../assets/protese-logo.png")}
          />
          <Text style={styles.titulo}>Prótese Dentária</Text>
          <Botao titulo={"Fechar"} aoClicar={() => navigation.goBack()} />
        </View>

        <View style={styles.info}>
          <View style={styles.bloco}>
            <View style={styles.rotulo}>
              <Text style={styles.vertical}>Professores</Text>
            </View>
            <View>
              <Text style={styles.texto}>
                Érica Miranda de Torres{"\n"}
                Aderico Santana Guilherme{"\n"}
                Carlos de Paula e Souza{"\n"}
                Célio Umberto de Araújo{"\n"}
                Cláudio Rodrigues Leles{"\n"}
                Fábio Nogueira de Lucena{"\n"}
                Hugo de Carvalho Júnior{"\n"}
                Ricardo Alexandre Zavanelli{"\n"}
                Willian Barnabé{"\n"}
              </Text>
            </View>
          </View>

          <View style={styles.bloco}>
            <View style={styles.rotulo}>
              <Text style={styles.vertical}>Estudantes</Text>
            </View>
            <View>
              <Text style={styles.texto}>
                Fábio Lisita Moreira Filho{"\n"}
                Fernandes de Carvalho{"\n"}
                Larissa Mendes de Souza Jorge{"\n"}
                Mariana Luísa Fernandes de Carvalho{"\n"}
                Marisa Alves Araújo{"\n"}
                Matheus Pereira Marques{"\n"}
                Thalita Fernanes Fleury Curado{"\n"}
                Thiêssy Tamylla de Freitas{"\n"}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.linha}>
          <Image
            style={styles.marca}
            source={require("../assets/logo-fo.png")}
          />
          <Image
            style={styles.marca}
            source={require("../assets/logo-inf.png")}
          />
          <Image
            style={styles.marca}
            source={require("../assets/logo-ufg.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  safearea: {
    height: "85%",
    width: "100%",
  },

  titulo: {
    fontSize: 23,
  },

  logo: {
    width: 40,
    height: 40,
  },

  marca: {
    resizeMode: "contain",
    width: 80,
    height: 80,
  },

  linha: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
  },

  info: {
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: Cores.claro,
  },

  bloco: {
    flexDirection: "row",
    alignItems: "center",
  },

  rotulo: {
    width: 80,
  },

  vertical: {
    transform: [{ rotate: "270deg" }],
  },

  texto: {
    fontSize: 12,
  },
});

export default Informacao;
