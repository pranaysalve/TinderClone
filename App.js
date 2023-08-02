import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";
import CardView from "./src/components/tindercard";
import users from "./assets/data/users";

export default function App() {
  return (
    <View style={styles.container}>
      <CardView user={users[3]} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
