import React, { useState, useEffect } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";

// import CardView from "../tindercard";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  useDerivedValue,
  interpolate,
  runOnJS,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

import LIKE from "../../../assets/images/LIKE.png";
import NOPE from "../../../assets/images/nope.png";

const ROTATION = 60;
const SWIPE_VELOCITY = 800;

const AnimatedStack = (props) => {
  const { data: users, renderItem, onSwipeLeft, onSwipeRight } = props;
  //   console.log({ users});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(currentIndex + 1);
  const currentProfile = users[currentIndex];
  const nextProfile = users[nextIndex];

  const { width: screenWidth, height } = useWindowDimensions();

  const hiddenTranslateX = 2 * screenWidth;

  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(
    () =>
      interpolate(translateX.value, [0, hiddenTranslateX], [0, ROTATION]) +
      "deg"
  );

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      },
    ],
  }));

  const nextCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          translateX.value,
          [-hiddenTranslateX, 0, hiddenTranslateX],
          [1, 0.8, 1]
        ),
      },
    ],
    opacity: interpolate(
      translateX.value,
      [-hiddenTranslateX, 0, hiddenTranslateX],
      [1, 0.5, 1]
    ),
  }));

  const likeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, hiddenTranslateX / 8], [0, 1]),
  }));
  const nopeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, -hiddenTranslateX / 8], [0, 1]),
  }));

  const onSwipe = (user, velocity) => {
    console.log(user);
    return velocity > 0 ? onSwipeRight : onSwipeLeft;
  };

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: (event, context) => {
      if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
        translateX.value = withSpring(0);

        return;
      }
      translateX.value = withSpring(
        hiddenTranslateX * Math.sign(event.velocityX),
        {},
        () => {
          runOnJS(setCurrentIndex)(currentIndex + 1);
        }
      );
      onSwipe && runOnJS(onSwipe)(currentProfile, event.velocityX);
    },
  });

  useEffect(() => {
    translateX.value = 0;
    setNextIndex(currentIndex + 1);
  }, [currentIndex, translateX]);

  return (
    <>
      <View style={styles.container}>
        {nextProfile && (
          <View style={styles.nextCardContainer}>
            <Animated.View style={[styles.animatedCard, nextCardStyle]}>
              {renderItem({ item: nextProfile })}
              {/* <CardView user={nextProfile} /> */}
            </Animated.View>
          </View>
        )}
        {currentProfile && (
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.animatedCard, cardStyle]}>
              <Animated.Image
                source={LIKE}
                style={[styles.LIKE, { left: 10 }, likeStyle]}
                resizeMode={"contain"}
              />
              <Animated.Image
                source={NOPE}
                style={[styles.LIKE, { right: 10 }, nopeStyle]}
                resizeMode={"contain"}
              />
              {renderItem({ item: currentProfile })}
              {/* <CardView user={currentProfile} /> */}
            </Animated.View>
          </PanGestureHandler>
        )}
        {/* <StatusBar style="auto" /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  animatedCard: {
    width: "90%",
    height: "70%",

    justifyContent: "center",
    alignItems: "center",
  },
  nextCardContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  LIKE: {
    width: 120,
    height: 120,
    position: "absolute",
    top: 10,
    zIndex: 1,
  },
});

export default AnimatedStack;
