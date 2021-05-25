import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Proteses from "../screens/ProtesesScreen";
import Protese, { proteseOptions } from "../screens/ProteseScreen";

const Stack = createStackNavigator();

const ProtesesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Proteses A" component={Proteses} />
      <Stack.Screen
        name="Protese B"
        component={Protese}
        options={proteseOptions}
      />
    </Stack.Navigator>
  );
};

export default ProtesesNavigator;
