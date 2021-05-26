import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
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
  return (
    <View style={styles.foto}>
      <Image style={styles.imagem} source={require("../assets/total.png")} />
    </View>
  );
};

const fixaIconTabBar = () => {
  return (
    <View style={styles.foto}>
      <Image style={styles.imagem} source={require("../assets/fixa.png")} />
    </View>
  );
};

const removivelIconTabBar = () => {
  return (
    <View style={styles.foto}>
      <Image
        style={styles.imagem}
        source={require("../assets/removivel.png")}
      />
    </View>
  );
};

const proteseTotalTab = () => ({
  title: "Total",
  headerShown: false,
  tabBarIcon: totalIconTabBar,
});

const proteseParcialFixaTab = () => ({
  title: "Fixa",
  headerShown: false,
  tabBarIcon: fixaIconTabBar,
});

const proteseParcialRemovivelTab = () => ({
  title: "Removível",
  headerShown: false,
  tabBarIcon: removivelIconTabBar,
});

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Total"
          component={StackNavigator}
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

const styles = StyleSheet.create({
  foto: {
    width: "25%",
  },

  imagem: {
    width: 25,
    height: 25,
  },
});

export default TabNavigator;
