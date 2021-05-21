import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Descricao = ({ texto }) => {
  return (
    <View>
      <Text>{texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descricao: {},
});

export default Descricao;
