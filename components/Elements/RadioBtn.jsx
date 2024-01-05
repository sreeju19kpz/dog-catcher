import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "../../StyleSheet";

export default RadioBtn = ({ state, value, title, onClick }) => {
  const [lState, setLState] = useState(value);
  const onPress = () => {
    onClick(lState);
  };
  return (
    <Pressable
      onPress={onPress}
      style={[styles.flexDirRow, styles.aliIteCnt, styles.gap5]}
    >
      <View
        style={[
          styles.borWid1,
          styles.aliIteCnt,
          styles.jusConCnt,
          { width: 13, height: 13, borderRadius: 6.5 },
        ]}
      >
        {state === value && (
          <View
            style={[{ width: 8, height: 8, borderRadius: 4 }, styles.bacColBlu]}
          />
        )}
      </View>
      <Text>{title}</Text>
    </Pressable>
  );
};
