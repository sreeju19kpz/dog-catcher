import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../loginPage/LoginPage";
import Register from "../loginPage/Register";
const Stack = createNativeStackNavigator();
export default Authentication = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "none",
      }}
      initialRouteName="login"
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#1F51FF" },
          headerTitleStyle: { color: "#ffffff" },
        }}
        name="login"
        component={LoginPage}
      />
      <Stack.Screen
        options={{
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#1F51FF" },
          headerTitleStyle: { color: "#ffffff" },
          headerTintColor: "#ffffff",
        }}
        name="register"
        component={Register}
      />
    </Stack.Navigator>
  );
};
