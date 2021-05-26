import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProtesesScreen from "../screens/ProtesesScreen";
import ProteseScreen, { proteseOptions } from "../screens/ProteseScreen";

const Stack = createStackNavigator();

const StackNavigator = ({ navigation }) => {
  console.log(navigation);
  return (
    <Stack.Navigator>
      <Stack.Screen name="A" component={ProtesesScreen} />
      <Stack.Screen
        name="ProteseScreen B"
        component={ProteseScreen}
        options={proteseOptions}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
