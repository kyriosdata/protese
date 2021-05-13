import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import ProteseItem from "./components/ProteseItem";

const mensagens = [
  "uma mensagem",
  "segunda mensagem",
  "terceira mensagem, talvez tenha algum item, talvez mais de um...",
  "quarta",
  "quinta",
  "Davi",
  "muitos itens nesta lista",
  "oh, outro",
  "algo mais",
  "sim, ainda tem outro",
  "o último",
  "após o último",
  "outro item inserido na lista, sem efeito",
  "não vai parar de inserir",
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.boasvindas}>Uma lista</Text>
      <View style={styles.wrapper}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={mensagens}
          renderItem={(msg) => <ProteseItem descricao={msg.item} />}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 30,
  },

  wrapper: {
    flex: 1,
    flexDirection: "row",
  },
});
