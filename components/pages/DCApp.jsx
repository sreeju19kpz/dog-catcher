import React, { useEffect } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import ReportHome from "../reports/ReportHome";
import { Ionicons } from "@expo/vector-icons";
import acbReportsFromArea from "../acbreports/ReportsFromArea";
import ProfileHome from "../profile/ProfileHome";
import { socket } from "../utils";
import Notifications from "../Notifications/index";
import { View } from "react-native";
import { styles } from "../../StyleSheet";
import { LinearGradient } from "expo-linear-gradient";
import MessagesHome from "../messages/MessagesHome";

const Tab = createBottomTabNavigator();

export default function DCApp() {
  useEffect(() => {
    socket.emit("createNewGroup", "aaa");
  });
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerStyle: {
          backgroundColor: "transparent",
          elevation: 0,
        },
        tabBarBackground: () => (
          <LinearGradient
            style={[styles.flex1]}
            colors={["#0000cd", "#000000"]}
          />
        ),
        tabBarStyle: {
          elevation: 0,
          position: "absolute",
        },
        headerBackgroundContainerStyle: { backgroundColor: "transparent" },
        tabBarActiveBackgroundColor: "transparent",
        tabBarInactiveBackgroundColor: "transparent",
      }}
    >
      <Tab.Screen
        name="Home"
        component={ReportHome}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={18} color={color} />
          ),
          headerTitleAlign: "left",
          headerStyle: { backgroundColor: "transparent", elevation: 0 },
        }}
      />
      <Tab.Screen
        name="alerts"
        component={acbReportsFromArea}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="exclamationcircleo" size={17} color={color} />
          ),
          headerTitleAlign: "left",
        }}
      />
      <Tab.Screen
        name="messages"
        component={MessagesHome}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={18} color={color} />
          ),
          headerTitleAlign: "left",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={21} color={color} />
          ),
          headerTitleAlign: "left",
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileHome}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={18} color={color} />
          ),
          headerStyle: { backgroundColor: "#1F51FF" },
          headerTintColor: "#ffffff",
        }}
      />
    </Tab.Navigator>
  );
}
