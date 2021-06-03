import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ProtesesScreen from "../screens/ProtesesScreen";
import ProteseScreen, { proteseOptions } from "../screens/ProteseScreen";
import Cores from "../constants/Cores";

// Acrescente em stackNavigatorsOptions return
//   headerLeft: logoHeader,
const logoHeader = () => (
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
  </View>
);

const stackNavigatorOptions = () => ({
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
