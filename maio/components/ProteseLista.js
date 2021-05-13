import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import ProteseItem from "./ProteseItem";

const ProteseLista = ({ lista, onPress }) => {
  return (
    <View style={styles.lista}>
      <FlatList
        data={lista}
        renderItem={({ item }) => (
          <ProteseItem
            id={item.imagem}
            onPress={onPress}
            descricao={item.descricao}
          />
        )}
        keyExtractor={(elemento) => elemento.imagem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lista: {
    flex: 1,
    flexDirection: "row",
  },
});

export default ProteseLista;
