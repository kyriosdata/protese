import React, { useState } from "react";
import { StyleSheet, Button, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import Header from "../components/Header";
import ProteseLista from "../components/ProteseLista";
import Proteses from "../data/Proteses";
import Informacao from "../components/Informacao";
import Cores from "../constants/Cores";

function onPress(chave) {
  console.log("item clicked", chave);
}

function ProtesesScreen(objeto) {
  if (objeto.route.params) {
    console.log("ProtesesScreen params received...");
  }

  const { navigation } = objeto;

  const [showInfo, setShowInfo] = useState(false);

  function fechaInformacao() {
    setShowInfo(false);
  }

  return (
    <View style={styles.container}>
      <Header title="Header temporário" />
      <Button title={"Informação"} onPress={() => setShowInfo(true)} />
      <Button title={"Busca"} onPress={() => navigation.navigate("Busca")} />
      <Button
        title={"Protese"}
        onPress={() => navigation.navigate("Protese")}
      />
      <Informacao visible={showInfo} onClose={fechaInformacao} />

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
