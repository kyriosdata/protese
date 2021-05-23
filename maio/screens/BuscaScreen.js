import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BuscaScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Busca</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
});

export const buscaOptions = (navData) => {
  return {
    title: "Busca",
  };
};

export default BuscaScreen;
