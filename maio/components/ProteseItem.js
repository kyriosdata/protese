import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProteseItem = (props) => {
  return (
    <View style={styles.itemLista} key={props.descricao}>
      <Text>{props.descricao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemLista: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    marginVertical: 10,
    backgroundColor: "lightblue",
  },
});

export default ProteseItem;
