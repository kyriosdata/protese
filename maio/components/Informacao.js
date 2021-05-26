import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Informacao = ({ onClose }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.linha}>
        <Text>Prótese Dentária</Text>
        <Button title={"Fechar"} onPress={onClose} />
      </View>

      <View style={styles.info}>
        <View style={styles.bloco}>
          <View style={styles.rotulo}>
            <Text style={styles.vertical}>Professores</Text>
          </View>
          <View>
            <Text>Érica Miranda de Torres</Text>
            <Text>Aderico Santana Guilherme</Text>
            <Text>Carlos de Paula e Souza</Text>
            <Text>Célio Umberto de Araújo</Text>
            <Text>Cláudio Rodrigues Leles</Text>
            <Text>Fábio Nogueira de Lucena</Text>
            <Text>Hugo de Carvalho Júnior</Text>
            <Text>Ricardo Alexandre Zavanelli</Text>
            <Text>Willian Barnabé</Text>
          </View>
        </View>

        <View style={styles.bloco}>
          <View style={styles.rotulo}>
            <Text style={styles.vertical}>Estudantes</Text>
          </View>
          <View>
            <Text>Fábio Lisita Moreira Filho</Text>
            <Text>Fernandes de Carvalho</Text>
            <Text>Larissa Mendes de Souza Jorge</Text>
            <Text>Mariana Luísa Fernandes de Carvalho</Text>
            <Text>Marisa Alves Araújo</Text>
            <Text>Matheus Pereira Marques</Text>
            <Text>Thalita Fernanes Fleury Curado</Text>
            <Text>Thiêssy Tamylla de Freitas</Text>
          </View>
        </View>
      </View>

      <View style={styles.linha}>
        <Text>os três ícones</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  linha: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  info: {
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "yellow",
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
});

export default Informacao;
