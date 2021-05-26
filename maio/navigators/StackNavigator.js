import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProtesesScreen from "../screens/ProtesesScreen";
import ProteseScreen, { proteseOptions } from "../screens/ProteseScreen";

const Stack = createStackNavigator();

const StackNavigator = (objeto) => {
  if (objeto.route.params) {
    console.log("StackNavigator params received...");
  }
  const { route } = objeto;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PT"
        component={ProtesesScreen}
        options={{ title: route.name }}
        initialParams={objeto.route.params}
      />
      <Stack.Screen
        name="ProteseScreen B"
        component={ProteseScreen}
        options={proteseOptions}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
