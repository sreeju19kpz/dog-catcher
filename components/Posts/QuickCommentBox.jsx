import { Dimensions, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { styles } from "../../StyleSheet";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const QuickCommentBox = React.forwardRef(({ End, children }, ref) => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });
  function close() {
    setTimeout(() => {
      runOnJS(End)();
    }, 400);
  }
  const scrollTo = useCallback((des) => {
    "worklet";
    translateY.value = withTiming(des);
  }, []);
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 1.4) {
        scrollTo(0);
        runOnJS(close)();
      }
      if (translateY.value <= -SCREEN_HEIGHT / 1.4) {
        scrollTo(-SCREEN_HEIGHT);
      }
    });

  useEffect(() => {
    scrollTo(-SCREEN_HEIGHT);
  }, []);
  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [-SCREEN_HEIGHT + 100, -SCREEN_HEIGHT],
      [20, 0],
      Extrapolate.CLAMP
    );
    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          styles.wid100p,
          styles.posAbs,
          styles.bakColWhi,
          styles.borRad20,
          rBottomSheetStyle,
          {
            height: "100%",
            top: SCREEN_HEIGHT,
          },
        ]}
      >
        <View
          style={[
            styles.wid70,
            styles.hei4,
            styles.bakColblap5,
            styles.borRad10,
            styles.marVer5,
            styles.aliSelCnt,
          ]}
        />
        {children}
      </Animated.View>
    </GestureDetector>
  );
});

export default QuickCommentBox;
