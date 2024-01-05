import { View, Text } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./components/app/store";
import { StatusBar } from "expo-status-bar";
import Main from "./Main";

export default App = () => {
  return (
    <Provider store={store}>
      <Main />
      <StatusBar style="light" backgroundColor="#1F51FF" />
    </Provider>
  );
};
