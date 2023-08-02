import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG",
          }}
          style={styles.image}
        >
          <View style={styles.cardtext}>
            <Text style={styles.name}>Vadim Savin</Text>
            <Text style={styles.bio}>
              I willbe the semicolons to your codeI will be the semicolons to
              your codeI will be the semicolons to your codeI will be the
              semicolons to your codeI will be the semicolons to your codeI will
              be the semicolons to your code
            </Text>
          </View>
        </ImageBackground>
      </View>
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
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  card: {
    width: "95%",
    height: "70%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  name: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  bio: {
    color: "white",
    fontSize: 18,
    lineHeight: 28,
    // fontWeight: "regular",
  },
  cardtext: {
    padding: 10,
    backgroundColor: "red",
  },
});
