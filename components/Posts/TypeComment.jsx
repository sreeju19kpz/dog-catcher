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
    <View style={[styles.bakColWhi]}>
      <KeyboardAvoidingView>
        <View
          style={[
            styles.wid100p,
            styles.bakColWhi,
            styles.borWid1,
            styles.borColBlaLigP1,
            styles.posAbs,
            styles.bot0,
            styles.flexDirRow,
            styles.jusConSpcBtw,
          ]}
        >
          <TextInput
            o
            value={typedComment}
            onChangeText={setTypedComment}
            style={[
              styles.minHei50,
              styles.fleGro1,
              styles.padHor10,
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
