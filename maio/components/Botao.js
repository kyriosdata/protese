import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import Cores from "../constants/Cores";

const Botao = ({ titulo, aoClicar }) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={aoClicar}>
      <Text style={styles.textobotao}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    alignItems: "center",
    backgroundColor: Cores.escuro,
    padding: 10,
    borderRadius: 8,
  },

  textobotao: {
    color: Cores.claro,
  },
});

export default Botao;
