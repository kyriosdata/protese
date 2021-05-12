import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("Bem-vindo!");
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        title="Altere o texto"
        onPress={() => setOutputText("Você clicou no botão, parabéns...")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
