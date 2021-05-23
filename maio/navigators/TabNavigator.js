import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Busca, { buscaOptions } from "../screens/BuscaScreen";
import ProtesesScreen from "../screens/ProtesesScreen";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="PT"
          component={ProtesesScreen}
          options={{ title: "PT" }}
        />
        <Tab.Screen
          name="PF"
          component={ProtesesScreen}
          options={{ title: "PF" }}
        />
        <Tab.Screen
          name="PR"
          component={ProtesesScreen}
          options={{ title: "PR" }}
        />
        <Tab.Screen name="Busca" component={Busca} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
