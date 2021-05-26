import React from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Busca from "../screens/BuscaScreen";
import StackNavigator from "./StackNavigator";
import Cores from "../constants/Cores";
import Proteses from "../data/Proteses";

const totalIconTabBar = ({ color }) => {
  return (
    <Image
      style={{ ...styles.imagem, tintColor: color }}
      source={require("../assets/total.png")}
    />
  );
};

const fixaIconTabBar = ({ color }) => {
  return (
    <Image
      style={{ ...styles.imagem, tintColor: color }}
      source={require("../assets/fixa.png")}
    />
  );
};

const removivelIconTabBar = ({ color }) => {
  return (
    <Image
      style={{ ...styles.imagem, tintColor: color }}
      source={require("../assets/removivel.png")}
    />
  );
};

const buscaIconTabBar = ({ color }) => {
  return <Ionicons name="search-outline" size={22} color={color} />;
};

const infoIconTabBar = ({ color }) => {
  return <Ionicons name="information-circle-outline" size={22} color={color} />;
};

const totalTabOptions = () => ({
  title: "Total",
  tabBarIcon: totalIconTabBar,
});

const parcialTabOptions = () => ({
  title: "Fixa",
  tabBarIcon: fixaIconTabBar,
});

const removivelTabOptions = () => ({
  title: "Removível",
  tabBarIcon: removivelIconTabBar,
});

const buscaTabOptions = () => ({
  title: "Busca",
  tabBarIcon: buscaIconTabBar,
});

const infoTabOptions = () => ({
  title: "Informações",
  tabBarIcon: infoIconTabBar,
});

const Tab = createBottomTabNavigator();

function TabNavigator(objeto) {
  const tabScreenOptions = (interno) => {
    return {
      headerShown: false,

      tabBarActiveTintColor: Cores.claro,
      tabBarActiveBackgroundColor: Cores.escuro,

      tabBarInactiveTintColor: Cores.escuro,
      tabBarInactiveBackgroundColor: Cores.claro,
    };
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={tabScreenOptions}>
        <Tab.Screen
          name="Prótese total"
          component={StackNavigator}
          options={totalTabOptions}
          initialParams={{ proteses: Proteses.totais() }}
        />
        <Tab.Screen
          name="Prótete parcial fixa"
          component={StackNavigator}
          options={parcialTabOptions}
          initialParams={{ proteses: Proteses.parciaisFixas() }}
        />
        <Tab.Screen
          name="Prótese parcial removível"
          component={StackNavigator}
          options={removivelTabOptions}
          initialParams={{ proteses: Proteses.parciaisRemoviveis() }}
        />
        <Tab.Screen name="Busca" component={Busca} options={buscaTabOptions} />
        <Tab.Screen name="Info" component={Busca} options={infoTabOptions} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  imagem: {
    width: 25,
    height: 25,
  },
});

export default TabNavigator;
