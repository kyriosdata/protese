import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import TabNavigator from "./navigators/TabNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "raleway-regular": require("./assets/fontes/Raleway-Regular.ttf"),
    "raleway-bold": require("./assets/fontes/Raleway-Bold.ttf"),
  });
};

function start() {
  const [naoCarregado, setNaoCarregado] = useState(true);

  if (naoCarregado) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setNaoCarregado(false)}
        onError={console.log}
      />
    );
  }

  return <TabNavigator />;
}

export default start;
