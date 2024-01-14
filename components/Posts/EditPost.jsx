import { View, Text, Image, Pressable, Modal, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "../../StyleSheet";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
  useCreateReportMutation,
  useUpdateDataMutation,
} from "../Features/reports/reportsApiSlice";
import DropDown from "../Elements/DropDown";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import DropDownStatus from "./DropDownStatus";
export default EditPost = ({ id }) => {
  const [state, setState] = useState(false);
  const [status, setStatus] = useState();
  const [update, { isLoading }] = useUpdateDataMutation();
  const ref = useRef();
  const report = async () => {
    await update({
      status,
      id,
    });
    setState(() => !state);
  };
  return (
    <>
      <View>
        <View>
          <Pressable
            onPress={() => setState(!state)}
            style={[styles.JusConFleStr, styles.aliIteFleStr, styles.pad10]}
          >
            <Entypo name="edit" size={12} color="blue" />
          </Pressable>
        </View>
      </View>
      {state && (
        <Modal animationType="slide" transparent>
          <LinearGradient
            colors={["#0000cd", "#000000"]}
            style={[
              styles.hei50,
              styles.wid100p,
              styles.jusConSpcBtw,
              styles.aliIteCnt,
              styles.flexDirRow,
              styles.padHor10,
            ]}
          >
            <Pressable onPress={() => setState(!state)}>
              <AntDesign name="arrowleft" size={24} color="white" />
            </Pressable>
          </LinearGradient>
          <View
            style={[styles.flex1, styles.bakColBla, styles.pad20, styles.gap20]}
          >
            <View style={{ zIndex: 1 }}>
              <Text style={[styles.fonColWhi]}>area :</Text>
              <DropDownStatus
                onSelect={(data) => setStatus(data)}
                text={status}
              />
            </View>
            <Pressable onPress={report}>
              <Feather name="send" size={24} color="blue" />
            </Pressable>
          </View>
        </Modal>
      )}
    </>
  );
};
