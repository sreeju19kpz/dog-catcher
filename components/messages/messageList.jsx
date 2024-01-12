import {
  View,
  Text,
  ScrollView,
  TextInput,
  Keyboard,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  useGetAllMessagesFromUserMutation,
  useSendMessageMutation,
} from "../Features/user/userApiSlice";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "../../StyleSheet";

export default messageList = ({ route }) => {
  const windowWidth = Dimensions.get("window").width;
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [sendMessage, { isLoading: sending }] = useSendMessageMutation();
  const [message, setMessage] = useState();
  useEffect(() => {
    const showListner = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardShown(true)
    );
    const hideListner = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardShown(false)
    );
    return () => {
      showListner.remove();
      hideListner.remove();
    };
  }, []);
  const { id } = route.params;
  const [getAllMessages, { isLoading }] = useGetAllMessagesFromUserMutation();
  const [typedMessage, setTypedMessage] = useState();

  useFocusEffect(
    useCallback(() => {
      const fetch = async () => {
        const data = await getAllMessages(id).unwrap();
        data && setMessage(data);
      };
      fetch();
    }, [])
  );

  const send = async () => {
    const data = await sendMessage({
      reportedTo: id,
      description: typedMessage,
    }).unwrap();
    data && setMessage((prev) => (prev ? [...prev, data] : [data]));
  };
  if (isLoading) {
    return <View style={[styles.flex1, styles.bakColBla]}></View>;
  }
  return (
    <>
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={[
          styles.flex1,
          styles.gap10,
          styles.pad10,
          styles.bakColBla,
        ]}
      >
        {message?.map((item, i) => {
          return (
            <View
              key={i}
              style={[
                styles.wid100p,
                styles.flexDirRow,
                styles.JusConFleEnd,
                styles.bakColBla,
              ]}
            >
              <View
                style={[
                  styles.aliIteCnt,
                  styles.jusConCnt,
                  styles.padHor10,
                  styles.padVer5,
                  styles.bacColBlu,
                  { maxWidth: 200, borderRadius: 5 },
                ]}
              >
                <Text style={[styles.fonColWhi]}>{item.description}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View
        style={[
          styles.posAbs,
          { bottom: keyboardShown ? 0 : 48, left: 0, borderTopWidth: 1 },
          styles.wid100p,
          styles.flexDirRow,
          styles.borColWhiLigP1,
          styles.jusConSpcBtw,
        ]}
      >
        <TextInput
          value={typedMessage}
          onChangeText={setTypedMessage}
          style={[
            styles.padHor10,
            styles.padVer5,
            styles.fonColWhi,
            styles.fleGro1,
            { maxWidth: windowWidth - 55, maxHeight: 100 },
          ]}
          multiline
        />
        <Pressable
          onPress={send}
          style={[styles.aliIteCnt, styles.jusConCnt, styles.padHor4]}
        >
          <Ionicons name="send-sharp" size={24} color="blue" />
        </Pressable>
      </View>
    </>
  );
};
