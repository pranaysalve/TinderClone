import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { BlurView } from "expo-blur";

const CardView = (props) => {
  const { name, image, bio } = props.user;
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: `${image}`,
        }}
        style={styles.image}
      >
        <BlurView intensity={8} style={styles.cardtext}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </BlurView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
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
  },
  cardtext: {
    padding: 10,
  },
});

export default CardView;
