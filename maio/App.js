import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigators/MainNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "raleway-regular": require("./assets/fontes/Raleway-Regular.ttf"),
    "raleway-bold": require("./assets/fontes/Raleway-Bold.ttf"),
  });
};

function AppNavigatorContainer() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

function start() {
  const [naoCarregado, setNaoCarregado] = useState(true);
  const [tipo, setTipo] = useState("PT");

  if (naoCarregado) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setNaoCarregado(false)}
        onError={console.log}
      />
    );
  }

  return <AppNavigatorContainer tipo={tipo} setTipo={setTipo} />;
}

export default start;
