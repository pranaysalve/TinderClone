import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { SwippingCard } from "./src/screen/SwippingCard.screen";
import Matches from "./src/screen/Matches.screen";

export default function App() {
  return (
    <>
      {/* <View style={styles.container}> */}
      <Matches />
      {/* <SwippingCard /> */}
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
