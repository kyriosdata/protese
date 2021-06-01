import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import ProteseLista from "../components/ProteseLista";
import Cores from "../constants/Cores";

function onPress(chave) {
  console.log("item clicked", chave);
}

function ProtesesScreen(objeto) {
  if (objeto.route.params) {
    console.log("ProtesesScreen params received...", objeto.route.name);
  }

  return (
    <View style={styles.container}>
      <ProteseLista lista={objeto.route.params.proteses} onPress={onPress} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Cores.verde,
    alignItems: "center",
  },
});

export default ProtesesScreen;
