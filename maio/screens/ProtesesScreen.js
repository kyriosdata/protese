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

function ProtesesScreen({ navigation }) {
  const [showInfo, setShowInfo] = useState(false);

  function fechaInformacao() {
    setShowInfo(false);
  }

  return (
    <View style={styles.container}>
      <Header title="Prótese Dentária" />
      <Ionicons name="search" size={32} color="green" />
      <Ionicons name="information-circle-outline" size={32} color="black" />
      <Button title={"Informação"} onPress={() => setShowInfo(true)} />
      <Button title={"Busca"} onPress={() => navigation.navigate("Busca")} />
      <Button
        title={"Protese"}
        onPress={() => navigation.navigate("Protese")}
      />
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

export default ProtesesScreen;
