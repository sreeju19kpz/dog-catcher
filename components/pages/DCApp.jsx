import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import ReportHome from "../reports/ReportHome";
import ProfileHome from "../profile/ProfileHome";
import { styles } from "../../StyleSheet";

const Tab = createBottomTabNavigator();
export default function DCApp() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { paddingBottom: 4 },
        tabBarLabelStyle: { width: "100%" },
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={ReportHome}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
          headerRight: () => (
            <Pressable style={[styles.padHor4]}>
              <EvilIcons name="search" size={26} color="blue" />
            </Pressable>
          ),
          headerTitleAlign: "left",
        }}
      />
      <Tab.Screen
        name="alerts"
        component={ReportHome}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="exclamationcircleo" size={22} color={color} />
          ),
          headerRight: () => (
            <Pressable style={[styles.padHor4]}>
              <EvilIcons name="search" size={26} color="blue" />
            </Pressable>
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
            <AntDesign name="user" size={24} color={color} />
          ),
          headerStyle: { backgroundColor: "#1F51FF" },
          headerTintColor: "#ffffff",
        }}
      />
    </Tab.Navigator>
  );
}
