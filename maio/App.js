import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ProteseLista from "./components/ProteseLista";
import Proteses from "./data/Proteses";

function onPress(chave) {
  console.log("item clicked", chave);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.boasvindas}>Protótipo Maio</Text>

      <ProteseLista lista={Proteses.totais()} onPress={onPress} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 30,
  },
});
