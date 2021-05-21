import React, { useState } from "react";
import { StyleSheet, Button, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import Header from "./components/Header";
import ProteseLista from "./components/ProteseLista";
import Proteses from "./data/Proteses";
import Informacao from "./components/Informacao";
import Cores from "./constants/Cores";

const fetchFonts = () => {
  return Font.loadAsync({
    "raleway-regular": require("./assets/fontes/Raleway-Regular.ttf"),
    "raleway-bold": require("./assets/fontes/Raleway-Bold.ttf"),
  });
};

function onPress(chave) {
  console.log("item clicked", chave);
}

function informacao() {
  console.log("abrir modal");
}

export default function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.log}
      />
    );
  }

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
