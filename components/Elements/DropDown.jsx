import {
  View,
  Text,
  Pressable,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import React, { useState } from "react";
import { styles } from "../../StyleSheet";
import { areaList } from "../List/AreaList";

export default DropDown = ({ onSelect, text }) => {
  const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } =
    Dimensions.get("window");

  const [open, setOpen] = useState(false);
  const changeStates = (item) => {
    onSelect(item);
    setOpen(!open);
  };

  spinValue = new Animated.Value(0);

  const handleAnimation = () => {
    setOpen(!open);
  };

  return (
    <View style={[styles.wid100, styles.hei50, styles.jusConCnt]}>
      <Pressable
        onPress={handleAnimation}
        style={[
          styles.wid100p,
          styles.hei100p,
          styles.aliIteCnt,
          styles.jusConSpcBtw,
          styles.flexDirRow,
          styles.bakColWhi,
          styles.padHor4,
          styles.borRad10,
          styles.borWid1,
          styles.borColBlaLigP1,
          { elevation: 5, zIndex: 1, height: 28 },
        ]}
      >
        <Text style={[styles.fonSiz15]}>{text}</Text>
      </Pressable>

      {open && (
        <View
          style={[
            styles.posAbs,
            styles.bakColred,
            styles.hei150,
            styles.wid100,
            { top: 45 },
          ]}
        >
          {areaList.map((item, i) => {
            return (
              <Pressable key={i} onPress={() => changeStates(item)}>
                <Text>{item}</Text>
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
};
