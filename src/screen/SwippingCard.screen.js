import React from "react";
import { StyleSheet } from "react-native";

import CardView from "../components/tindercard";
import users from "../../assets/data/users";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import AnimatedStack from "../components/animatedstack";

export const SwippingCard = () => {
  const onSwipeLeft = (user) => {
    console.warn("swipe left", user.name);
    console.log("swipe left", user.name);
  };
  const onSwipeRight = (user) => {
    console.warn("swipe right", user.name);
    console.log("swipe right", user.name);
  };
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AnimatedStack
          data={users}
          renderItem={({ item }) => (
            <CardView
              user={item}
              onSwipeLeft={onSwipeLeft}
              onSwipeRight={onSwipeRight}
            />
          )}
        />
        {/* <StatusBar style="auto" /> */}
      </GestureHandlerRootView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
