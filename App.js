import { View, Text } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./components/app/store";
import { StatusBar } from "expo-status-bar";
import Main from "./Main";
import { registerRootComponent } from "expo";

export default App = () => {
  return (
    <Provider store={store}>
      <Main />
      <StatusBar style="light" backgroundColor="#000090" />
    </Provider>
  );
};

registerRootComponent(App);
