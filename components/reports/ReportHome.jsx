import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ReportDetails from "../reports/ReportDetails";
import { Pressable, SafeAreaView, StatusBar, View } from "react-native";

const Tab = createMaterialTopTabNavigator();
import AllReports from "./AllReports";
import ReportsFromArea from "./ReportsFromArea";
export default ReportHome = () => {
  return (
    <Tab.Navigator initialRouteName="for you">
      <Tab.Screen name="for you" component={ReportsFromArea} />
      <Tab.Screen name="Latest" component={AllReports} />
    </Tab.Navigator>
  );
};
