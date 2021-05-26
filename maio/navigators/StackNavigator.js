import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ProtesesScreen from "../screens/ProtesesScreen";
import ProteseScreen, { proteseOptions } from "../screens/ProteseScreen";
import Cores from "../constants/Cores";

const logoHeader = () => (
  <View style={styles.logo}>
    <Image
      style={{
        resizeMode: "contain",
        width: 23,
        height: 23,
        tintColor: Cores.claro,
      }}
      source={require("../assets/logo.png")}
    />
  </View>
);

const stackNavigatorOptions = () => ({
  headerLeft: logoHeader,
  headerStyle: {
    backgroundColor: Cores.escuro,
  },
  headerTintColor: Cores.claro,
});

const styles = StyleSheet.create({
  logo: {
    paddingLeft: 7,
  },
});

const Stack = createStackNavigator();

const StackNavigator = ({ route }) => {
  if (route.params) {
    console.log("StackNavigator params received...");
    console.log(route.name);
  }

  return (
    <Stack.Navigator screenOptions={stackNavigatorOptions}>
      <Stack.Screen
        name="proteses"
        component={ProtesesScreen}
        options={{ title: route.name }}
        initialParams={route.params}
      />
      <Stack.Screen
        name="detalhe"
        component={ProteseScreen}
        options={proteseOptions}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
