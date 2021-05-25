import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProtesesScreen from "../screens/ProtesesScreen";
import ProteseScreen, { proteseOptions } from "../screens/ProteseScreen";

const ProteseStack = createStackNavigator();

const ProteseStackNavigator = ({ navigation }) => {
  console.log(navigation);
  return (
    <ProteseStack.Navigator>
      <ProteseStack.Screen name="A" component={ProtesesScreen} />
      <ProteseStack.Screen
        name="ProteseScreen B"
        component={ProteseScreen}
        options={proteseOptions}
      />
    </ProteseStack.Navigator>
  );
};

export default ProteseStackNavigator;
