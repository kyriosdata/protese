import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Cores from "../constants/Cores";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Cores.verde,
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
  },
});

export default Header;
