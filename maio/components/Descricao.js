import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Descricao = ({ texto }) => {
  return (
    <View>
      <Text style={styles.descricao}>{texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descricao: {
    fontFamily: "raleway-regular",
  },
});

export default Descricao;
