import { View, Text, Pressable } from "react-native";
import React, { useCallback, useState } from "react";
import DropDown from "./Elements/DropDown";
import {
  useUpdateUserAreaMutation,
  useGetUserAreaMutation,
} from "../Features/user/userApiSlice";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "../../StyleSheet";
import { Ionicons } from "@expo/vector-icons";
export default Settings = () => {
  const [updateUserArea, { isLoading }] = useUpdateUserAreaMutation();
  const [getUserArea, { isLoading: fetching }] = useGetUserAreaMutation();
  const [area, setArea] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const fetch = async () => {
        const data = await getUserArea().unwrap();
        data && setArea(data.area);
      };
      fetch();
    }, [])
  );

  const update = async () => {
    const data = await updateUserArea({ area }).unwrap();
    data && setArea(data.area);
  };
  const selectArea = (data, i) => {
    const nArea = [...area];
    if (!nArea.filter((item) => item === data).length > 0) {
      nArea[i] = data;
      setArea(nArea);
    }
  };
  const incCount = () => {
    setArea((prev) => (prev?.length >= 2 ? [...prev] : [...prev, ""]));
  };
  const decCount = async (i) => {
    const nArea = [...area];
    nArea.splice(i, 1);
    setArea(nArea);
  };
  return (
    <View
      style={[
        styles.flex1,
        styles.aliIteCnt,
        styles.jusConCnt,
        styles.bakColBla,
        styles.gap10,
      ]}
    >
      <View
        style={[
          styles.gap10,
          styles.aliIteCnt,
          styles.flexDirRow,
          styles.jusConCnt,
        ]}
      >
        <Text
          style={[
            styles.fonColWhi,
            styles.fonSiz18,
            styles.fonWei500,
            { lineHeight: 25 },
          ]}
        >
          {`Area `}
        </Text>
        <Pressable onPress={incCount}>
          <Ionicons name="add-circle-outline" size={24} color="white" />
        </Pressable>
      </View>
      {area?.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.flexDirRow,
              styles.aliIteCnt,
              styles.gap10,
              { zIndex: 5 - i },
            ]}
          >
            <View style={{ zIndex: 5 - i }}>
              <DropDown
                text={area[i] || "select"}
                onSelect={(data) => selectArea(data, i)}
              />
            </View>
            <Pressable onPress={() => decCount(i)}>
              <Ionicons name="close-circle-outline" size={24} color="white" />
            </Pressable>
          </View>
        );
      })}
      <Pressable onPress={update}>
        <Ionicons name="save" size={24} color="blue" />
      </Pressable>
    </View>
  );
};
