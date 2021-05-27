import React from "react";
import { View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from "./TabNavigator";
import Informacao from "../components/Informacao";

const CreateNew = () => (
  <View style={{ flex: 1, backgroundColor: "blue" }}></View>
);

const ModalStack = createStackNavigator();

function MainNavigator() {
  return (
    <ModalStack.Navigator
      presentation="modal"
      screenOptions={{ headerShown: false }}
    >
      <ModalStack.Screen name="TabNavigator" component={TabNavigator} />
      <ModalStack.Screen name="CreateNew" component={Informacao} />
    </ModalStack.Navigator>
  );
}

export default MainNavigator;
