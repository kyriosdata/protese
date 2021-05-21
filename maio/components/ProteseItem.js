import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import Card from "./Card";
import Cores from "../constants/Cores";
import Descricao from "./Descricao";

const ProteseItem = ({ id, descricao, imagem, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress.bind(this, id)}>
      <Card style={styles.card}>
        <View style={styles.foto}>
          <Image style={styles.imagem} source={imagem} />
        </View>
        <View style={styles.descricao}>
          <Descricao texto={descricao} />
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 8,
    marginHorizontal: 5,
    marginVertical: 6,
    backgroundColor: Cores.branco,
  },

  imagem: {
    width: 50,
    height: 50,
  },

  foto: {
    width: "25%",
    backgroundColor: "yellow",
  },

  descricao: {
    width: "70%",
  },
});

export default ProteseItem;
