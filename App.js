import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, Button } from "react-native"

import Zendrive from "react-native-zendrive"

export default function App() {
  const buttonHandler = () => {
    Zendrive.setup({
      driverId: "zd-rn-integration",
      sdkKey: "",
    }).then((result) => {
      console.log(result)
    })
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Initialise ZD" onPress={buttonHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
