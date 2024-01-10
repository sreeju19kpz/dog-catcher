import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Messages from "./Messages";
import messageList from "./messageList";

const Stack = createStackNavigator();
export default MessagesHome = () => {
  return (
    <Stack.Navigator initialRouteName="message">
      <Stack.Screen name="message" component={Messages} />
      <Stack.Screen name="messagelist" component={messageList} />
    </Stack.Navigator>
  );
};
