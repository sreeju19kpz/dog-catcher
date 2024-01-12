import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Messages from "./Messages";
import messageList from "./messageList";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../StyleSheet";

const Stack = createStackNavigator();
export default MessagesHome = () => {
  return (
    <Stack.Navigator
      initialRouteName="message"
      screenOptions={{
        headerBackground: () => (
          <LinearGradient
            style={[styles.flex1]}
            colors={["#0000cd", "#000000"]}
          />
        ),
        animationEnabled: false,
        headerTitleStyle: { color: "white" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="message" component={Messages} />
      <Stack.Screen name="messagelist" component={messageList} />
    </Stack.Navigator>
  );
};
