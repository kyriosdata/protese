import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const BuscaScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Busca</Text>
      <Button
        title={"Protese"}
        onPress={() => navigation.navigate("Protese")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
});

export const buscaOptions = (navData) => {
  return {
    title: "Busca",
  };
};

export default BuscaScreen;
