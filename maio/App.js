import React, { useState } from "react";
import { StyleSheet, Button, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Busca from "./screens/Busca";
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

function Home({ navigation }) {
  const [showInfo, setShowInfo] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  function fechaInformacao() {
    setShowInfo(false);
  }

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.log}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Prótese Dentária" />
      <Ionicons name="search" size={32} color="green" />
      <Ionicons name="information-circle-outline" size={32} color="black" />
      <Button title={"Informação"} onPress={() => setShowInfo(true)} />
      <Button title={"Busca"} onPress={() => navigation.navigate("Busca")} />
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

const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Prótese total" }}
        />
        <Stack.Screen name="Busca" component={Busca} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
