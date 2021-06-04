import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ProteseScreen = ({ route }) => {
  return (
    <View style={styles.screen}>
      <Text>Exibir {route.params.id}</Text>
      <View style={styles.foto}>
        <Image style={styles.imagem} source={route.params.imagem} />
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

  imagem: {
    height: "100%",
    resizeMode: "contain",
  },

  foto: {
    flex: 1,
  },
});

export const proteseOptions = (navigation) => ({
  title: "Detalhe",
  headerBackTitle: "Retornar",
});

export default ProteseScreen;
