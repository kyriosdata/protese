import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProteseScreen = ({ route }) => {
  return (
    <View style={styles.screen}>
      <Text>Exibir {route.params.imagem}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "magenta",
  },
});

export const proteseOptions = (navigation) => ({
  title: "Detalhe",
  headerBackTitle: "Retornar",
});

export default ProteseScreen;
