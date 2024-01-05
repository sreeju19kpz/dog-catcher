import { View, Text, Pressable } from "react-native";
import React, { useCallback, useState } from "react";
import DropDown from "./Elements/DropDown";
import {
  useUpdateUserAreaMutation,
  useGetUserAreaMutation,
} from "../Features/user/userApiSlice";
import { useFocusEffect } from "@react-navigation/native";
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
    <View>
      <Pressable onPress={incCount}>
        <Text>aaa</Text>
      </Pressable>
      {area?.map((_, i) => {
        return (
          <View key={i} style={{ zIndex: 5 - i }}>
            <View style={{ zIndex: 5 - i }}>
              <DropDown
                text={area[i] || "select"}
                onSelect={(data) => selectArea(data, i)}
              />
            </View>
            <Pressable onPress={() => decCount(i)}>
              <Text>remove</Text>
            </Pressable>
          </View>
        );
      })}
      <Pressable onPress={update}>
        <Text>aaa</Text>
      </Pressable>
    </View>
  );
};
