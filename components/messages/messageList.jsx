import {
  View,
  Text,
  ScrollView,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import {
  useGetAllMessagesFromUserMutation,
  useSendMessageMutation,
} from "../Features/user/userApiSlice";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "../../StyleSheet";

export default messageList = ({ route }) => {
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

  return (
    <>
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={[styles.flex1, styles.gap10, styles.pad10]}
      >
        {message?.map((item, i) => {
          return (
            <View
              key={i}
              style={[styles.wid100p, styles.flexDirRow, styles.JusConFleEnd]}
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
                <Text>{item.description}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View
        style={[
          styles.posAbs,
          { bottom: keyboardShown ? 0 : 48, left: 0 },
          styles.wid100p,
          styles.flexDirRow,
        ]}
      >
        <TextInput
          value={typedMessage}
          onChangeText={setTypedMessage}
          style={[
            styles.bakColWhi,
            styles.padHor10,
            styles.padVer5,
            styles.fleGro1,
          ]}
        />
        <Pressable onPress={send}>
          <Text>submit</Text>
        </Pressable>
      </View>
    </>
  );
};
