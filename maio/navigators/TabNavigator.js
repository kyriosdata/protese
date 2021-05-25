import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Busca, { buscaOptions } from "../screens/BuscaScreen";
import ProtesesScreen from "../screens/ProtesesScreen";
import ProteseStackNavigator from "./ProteseStackNavigator";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="PT"
          component={ProteseStackNavigator}
          screenOptions={{ title: "PT" }}
          options={{ title: "Total", headerShown: false }}
        />
        <Tab.Screen
          name="PF"
          component={ProteseStackNavigator}
          options={{ title: "Fixa", headerShown: false }}
        />
        <Tab.Screen
          name="PR"
          component={ProteseStackNavigator}
          options={{ title: "Removível", headerShown: false }}
        />
        <Tab.Screen name="Busca" component={Busca} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
