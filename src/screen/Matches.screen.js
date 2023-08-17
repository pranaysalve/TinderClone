import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import users from "../../assets/data/users";

const Matches = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.someview}>
          <Text style={styles.heading}>New Matches</Text>
          <View style={styles.usercontainer}>
            {users.map((user) => {
              return (
                <>
                  <View key={user.id} style={styles.user}>
                    <Image source={{ uri: user.image }} style={styles.image} />
                  </View>
                </>
              );
            })}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    flex: 1,
  },
  someview: {
    padding: 10,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#FE3C72",
  },
  usercontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  user: {
    width: 100,
    height: 100,
    margin: 10,

    borderWidth: 2,
    padding: 3,
    borderRadius: 50,
    borderColor: "#FE3C72",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
});

export default Matches;
