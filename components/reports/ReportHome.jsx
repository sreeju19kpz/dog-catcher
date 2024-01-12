import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ReportDetails from "../reports/ReportDetails";
import { Pressable, SafeAreaView, StatusBar, View } from "react-native";
const Tab = createMaterialTopTabNavigator();

import AllReports from "./AllReports";
import ReportsFromArea from "./ReportsFromArea";
import { LinearGradient } from "expo-linear-gradient";

export default ReportHome = () => {
  return (
    <Tab.Navigator
      initialRouteName="for you"
      screenOptions={{
        tabBarStyle: { backgroundColor: "black" },
        tabBarLabelStyle: { color: "white" },
        tabBarContentContainerStyle: { backgroundColor: "transparent" },
      }}
      sceneContainerStyle={{ backgroundColor: "transparent" }}
    >
      <Tab.Screen name="for you" component={ReportsFromArea} />
      <Tab.Screen name="latest" component={AllReports} />
    </Tab.Navigator>
  );
};
