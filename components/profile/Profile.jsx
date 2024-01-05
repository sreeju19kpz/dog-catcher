import "react-native-gesture-handler";

import { View, Text, Image, Animated, Pressable } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { styles } from "../../StyleSheet";
import { useGetuserBannerMutation } from "../Features/user/userApiSlice";
import dp from "../../assets/dp.jpg";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import AllPostsFromUser from "./AllPostsFromUser";
import { useDispatch } from "react-redux";
import { logout } from "../Features/auth/authSlice";
import { AntDesign } from "@expo/vector-icons";

const Profile = () => {
  const [getUserBanner, { isLoading }] = useGetuserBannerMutation();
  const [data, setData] = useState(); // community posts
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllC = async () => {
      const data = await getUserBanner().unwrap();
      data && setData(data);
    };
    getAllC();
  }, []);

  if (isLoading) return <View style={[styles.flex1, styles.bakColWhi]}></View>;

  return (
    <>
      <View style={[styles.wid100p, styles.bakColWhi]}>
        <View style={[styles.wid100p]}>
          <View
            style={[
              styles.hei70,
              styles.wid100p,
              styles.flexDirRow,
              styles.jusConSpcBtw,
              styles.aliIteCnt,
              styles.padHor20,
              styles.borBotWid1,
              styles.borColBlaLigP1,
              styles.padVer1,
            ]}
          >
            <View style={[styles.flexDirRow, styles.aliIteCnt, styles.gap10]}>
              <Image
                style={[styles.wid50, styles.hei50, { borderRadius: 35 }]}
                source={data?.dp ? { uri: data?.dp } : dp}
              />
              <Text style={[styles.fonSiz18, styles.fonWei700]}>
                {data?.name}
              </Text>
            </View>
            <Pressable onPress={() => dispatch(logout())}>
              <AntDesign name="logout" size={14} color="blue" />
            </Pressable>
          </View>
        </View>
      </View>
      <AllPostsFromUser />
    </>
  );
};

export default Profile;
