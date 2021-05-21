import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import ProteseItem from "./ProteseItem";
import Cores from "../constants/Cores";

const ProteseLista = ({ lista, onPress }) => {
  return (
    <View style={styles.lista}>
      <FlatList
        data={lista}
        renderItem={({ item }) => (
          <ProteseItem
            id={item.id}
            onPress={onPress}
            descricao={item.descricao}
            imagem={item.imagem}
          />
        )}
        keyExtractor={(elemento) => elemento.id}
        contentContainerStyle={styles.flatlist}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lista: {
    width: "100%",
    alignItems: "center",
    backgroundColor: Cores.claro,
  },

  flatlist: {
    paddingLeft: 0,
  },
});

export default ProteseLista;
