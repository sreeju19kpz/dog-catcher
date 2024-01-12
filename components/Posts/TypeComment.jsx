import {
  View,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { styles } from "../../StyleSheet";
import { Ionicons } from "@expo/vector-icons";

export default TypeComment = ({ onClick }) => {
  const windowWidth = Dimensions.get("window").width;
  const [typedComment, setTypedComment] = useState("");
  const postC = () => {
    onClick(typedComment);
    setTypedComment("");
  };
  return (
    <View style={[styles.bakColBla]}>
      <KeyboardAvoidingView>
        <View
          style={[
            styles.wid100p,
            styles.bakColBla,
            styles.borColWhiLigP1,
            styles.posAbs,
            styles.bot0,
            styles.flexDirRow,
            styles.jusConSpcBtw,
            { borderTopWidth: 1 },
          ]}
        >
          <TextInput
            value={typedComment}
            onChangeText={setTypedComment}
            style={[
              styles.minHei50,
              styles.fleGro1,
              styles.padHor10,
              styles.fonColWhi,
              { maxWidth: windowWidth - 55 },
            ]}
            placeholder="enter"
            multiline
          />
          <Pressable
            onPress={postC}
            style={[styles.aliIteCnt, styles.jusConCnt, styles.wid50]}
          >
            <Ionicons
              name={typedComment ? "ios-send" : "ios-send-outline"}
              size={20}
              color={typedComment ? "blue" : "grey"}
            />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
