import { View, Text, TextInput, Pressable } from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "../../StyleSheet";
import { useLoginMutation } from "../Features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { logout, setCredentials } from "../Features/auth/authSlice";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default LoginPage = () => {
  const navigation = useNavigation();
  const userRef = useRef();
  const errRef = useRef();
  const [email, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [errmsg, setErrmsg] = useState();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ email, password }).unwrap();
      console.log(userData);
      dispatch(setCredentials(userData));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View
      style={[
        styles.flex1,
        styles.jusConCnt,
        styles.aliIteCnt,
        styles.bakColWhi,
      ]}
    >
      <View style={[styles.pad10, styles.gap20]}>
        <View
          style={[
            styles.flexDirRow,
            styles.hei50,
            styles.aliIteCnt,
            styles.padHor10,
            styles.jusConSpcBtw,
            styles.borWid1,
            styles.borColBlu1,
            { borderRadius: 9999 },
          ]}
        >
          <View
            style={[
              styles.hei100p,
              styles.aliIteCnt,
              styles.jusConCnt,
              styles.wid50,
              styles.borColBlu1,
              { borderRightWidth: 1 },
            ]}
          >
            <Entypo
              style={{ marginRight: 6 }}
              name="mail-with-circle"
              size={20}
              color="blue"
            />
          </View>
          <TextInput
            style={[styles.wid200, , styles.hei33, , styles.padHor10]}
            placeholder="enter your email"
            value={email}
            onChangeText={setUser}
          />
        </View>
        <View
          style={[
            styles.flexDirRow,
            styles.hei50,
            styles.aliIteCnt,
            styles.borWid1,
            styles.borColBlu1,
            styles.padHor10,
            styles.jusConSpcBtw,
            { borderRadius: 9999 },
          ]}
        >
          <View
            style={[
              styles.hei100p,
              styles.aliIteCnt,
              styles.jusConCnt,
              styles.wid50,
              styles.borColBlu1,
              { borderRightWidth: 1 },
            ]}
          >
            <Entypo
              style={{ marginRight: 6 }}
              name="key"
              size={18}
              color="blue"
            />
          </View>
          <TextInput
            style={[styles.wid200, styles.hei33, styles.padHor10]}
            placeholder="enter your password"
            value={password}
            onChangeText={setPwd}
          />
        </View>
        <View style={[styles.aliIteCnt]}>
          <Pressable
            style={[
              styles.wid100,
              styles.hei33,
              styles.aliIteCnt,
              styles.jusConCnt,
              styles.bacColBlu,
              { elevation: 4 },
            ]}
            onPress={handleSubmission}
          >
            <Text style={[styles.fonColWhi]}>login</Text>
          </Pressable>
        </View>
        <View
          style={[
            styles.aliIteCnt,
            styles.flexDirRow,
            styles.jusConCnt,
            styles.gap5,
          ]}
        >
          <Text style={[styles.fonWei500]}>don't have an account</Text>
          <Pressable
            style={[styles.aliIteCnt, styles.jusConCnt]}
            onPress={() => navigation.navigate("register")}
          >
            <Text style={[styles.fonColIndBlu]}>sign up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
