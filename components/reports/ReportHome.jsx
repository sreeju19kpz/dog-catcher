import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ReportDetails from "../reports/ReportDetails";
import { Pressable, SafeAreaView, StatusBar, View } from "react-native";
import { useTheme } from "react-native-paper";

const Tab = createMaterialTopTabNavigator();

import AllReports from "./AllReports";
import ReportsFromArea from "./ReportsFromArea";
import { styles } from "../../StyleSheet";
export default ReportHome = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transparent";
  return (
    <Tab.Navigator
      initialRouteName="for you"
      screenOptions={{
        tabBarStyle: { backgroundColor: "transparent" },
      }}
      sceneContainerStyle={{ backgroundColor: "transparent" }}
    >
      <Tab.Screen name="for you" component={ReportsFromArea} />
      <Tab.Screen name="latest" component={AllReports} />
    </Tab.Navigator>
  );
};
