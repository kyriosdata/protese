import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Card from "./Card";
import Cores from "../constants/Cores";

const ProteseItem = ({ id, descricao, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress.bind(this, id)}>
      <Card style={styles.item}>
        <View style={styles.foto}>
          <Text>Foto</Text>
        </View>
        <View style={styles.descricao}>
          <Text>{descricao}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 8,
    marginHorizontal: 5,
    marginVertical: 6,
    backgroundColor: Cores.branco,
  },

  foto: {
    width: "25%",
    backgroundColor: Cores.verde,
  },

  descricao: {
    width: "70%",
    backgroundColor: Cores.verde,
  },
});

export default ProteseItem;
