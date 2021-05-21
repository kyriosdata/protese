import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Button, View } from "react-native";

import Header from "./components/Header";
import ProteseLista from "./components/ProteseLista";
import Proteses from "./data/Proteses";
import Informacao from "./components/Informacao";
import Cores from "./constants/Cores";

function onPress(chave) {
  console.log("item clicked", chave);
}

function informacao() {
  console.log("abrir modal");
}

export default function App() {
  const [showInfo, setShowInfo] = useState(false);

  function fechaInformacao() {
    setShowInfo(false);
  }
  return (
    <View style={styles.container}>
      <Header title="Prótese Dentária" />
      <Button title={"Informação"} onPress={() => setShowInfo(true)} />
      <Informacao visible={showInfo} onClose={fechaInformacao} />

      <ProteseLista lista={Proteses.totais()} onPress={onPress} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Cores.verde,
    alignItems: "center",
    marginTop: 30,
  },
});
