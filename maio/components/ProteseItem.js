import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ProteseItem = ({ id, descricao, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress.bind(this, id)}>
      <View style={styles.item}>
        <Text>{descricao}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    marginVertical: 10,
    backgroundColor: "lightgreen",
  },
});

export default ProteseItem;
