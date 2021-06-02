import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProteseScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Detalhe de uma prótese</Text>
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

export const proteseOptions = (navData) => {
  return { title: "Prótese" };
};

export default ProteseScreen;
