import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Busca, { buscaOptions } from "../screens/BuscaScreen";
import ProtesesScreen from "../screens/ProtesesScreen";
import StackNavigator from "./StackNavigator";

const tabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "Total") {
      iconName = focused ? "information" : "help";
    } else if (route.name === "Settings") {
      iconName = focused ? "help" : "information";
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarOptions: barOptions,
});

const barOptions = {
  activeTintColor: "tomato",
  inactiveTintColor: "gray",
};

const totalIconTabBar = () => {
  return <Ionicons name={"information"} size={23} color={"yellow"} />;
};

const proteseTotalTab = () => ({
  title: "X",
  headerShown: false,
  tabBarIcon: totalIconTabBar,
});

const proteseParcialFixaTab = () => ({
  title: "Fixa",
  headerShown: false,
});

const proteseParcialRemovivelTab = () => ({
  title: "Removível",
  headerShown: false,
});

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Total"
          component={StackNavigator}
          screenOptions={{ title: "PT" }}
          options={proteseTotalTab}
        />
        <Tab.Screen
          name="Fixa"
          component={StackNavigator}
          options={proteseParcialFixaTab}
        />
        <Tab.Screen
          name="Removível"
          component={StackNavigator}
          options={proteseParcialRemovivelTab}
        />
        <Tab.Screen name="Busca" component={Busca} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
