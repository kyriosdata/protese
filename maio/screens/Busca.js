import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Busca = () => {
  return (
    <View style={styles.busca}>
      <Text>Busca</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  busca: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
});

export default Busca;
