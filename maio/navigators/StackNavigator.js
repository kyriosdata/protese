import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ProtesesScreen from "../screens/ProtesesScreen";
import ProteseScreen, { proteseOptions } from "../screens/ProteseScreen";
import Cores from "../constants/Cores";

const header = (titulo) => {
  return (
    <View style={styles.logo}>
      <Image
        style={{
          resizeMode: "contain",
          width: 23,
          height: 23,
          tintColor: Cores.claro,
        }}
        source={require("../assets/protese-logo.png")}
      />
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
};

const protesesScreenOptions = (titulo) => ({
  headerTitle: () => header(titulo),
});

const stackNavigatorOptions = () => ({
  headerStyle: {
    backgroundColor: Cores.escuro,
  },
  headerTintColor: Cores.claro,
});

const styles = StyleSheet.create({
  logo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 7,
  },

  titulo: {
    fontSize: 21,
    color: Cores.claro,
    paddingLeft: 10,
  },
});

const Stack = createStackNavigator();

const StackNavigator = ({ route }) => (
  <Stack.Navigator screenOptions={stackNavigatorOptions}>
    <Stack.Screen
      name="proteses"
      component={ProtesesScreen}
      options={() => protesesScreenOptions(route.name)}
      initialParams={route.params}
    />
    <Stack.Screen
      name="detalhe"
      component={ProteseScreen}
      options={proteseOptions}
    />
  </Stack.Navigator>
);

export default StackNavigator;
