import React from "react";
import { StyleSheet, View } from "react-native";

import ProteseLista from "../components/ProteseLista";
import Cores from "../constants/Cores";

function ProtesesScreen({ route, navigation }) {
  const onPress = (id, imagem) =>
    navigation.navigate("detalhe", { id, imagem });

  return (
    <View style={styles.container}>
      <ProteseLista lista={route.params.proteses} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Cores.verde,
    alignItems: "center",
  },
});

export default ProtesesScreen;
