import { Button, ThreeColumn, SideNav } from "@metaphor-xyz/ui";
import { registerRootComponent } from "expo";
import React from "react";
import { StyleSheet, View, Typography } from "react-native";

const delay3Sec = () => {
  return new Promise((resolve, _reject) => {
    setTimeout(resolve, 3000);
  });
};

function TypoTest() {
  return (
    <View>
      <Typography type="h1">Header 1</Typography>
      <Typography type="h2">Header 2</Typography>
      <Typography type="h3">Header 3</Typography>
    </View>
  );
}

function App() {
  return (
    <View style={styles.container}>
      <ThreeColumn
        leftComponent={
          <SideNav items={<Button title="Click me" onPress={delay3Sec} />} />
        }
        middleComponent={<TypoTest />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default registerRootComponent(App);
