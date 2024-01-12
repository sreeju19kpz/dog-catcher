import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "../../../StyleSheet";
import { areaList } from "../../List/AreaList";

export default DropDown = ({ onSelect, text, onRemove }) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");
  const changeStates = (item) => {
    setCurrent(item);
    onSelect(item);
    setOpen(!open);
  };
  const RemoveStates = (item) => {
    setCurrent("");
    onRemove(item);
    setOpen(!open);
  };
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
          styles.borColWhiLigP1,
          styles.flexDirRow,
          styles.bakColBla,
          styles.padHor4,
          styles.borRad10,
          styles.borWid1,
          { elevation: 5, zIndex: 1, height: 24 },
        ]}
      >
        <Text style={[styles.fonSiz15, styles.fonColWhi, { lineHeight: 16 }]}>
          {text}
        </Text>
      </Pressable>

      {open && (
        <View
          style={[
            styles.posAbs,
            styles.bakColBla,
            styles.hei150,
            styles.wid100,
            { top: 45 },
          ]}
        >
          {areaList?.map((item, i) => {
            return (
              <Pressable key={i} onPress={() => changeStates(item)}>
                <Text style={[styles.fonColWhi]}>{item}</Text>
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
};
