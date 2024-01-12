import { createStackNavigator } from "@react-navigation/stack";
import ReportsFromArea from "../acbreports/ReportsFromArea";
import AlertsDetails from "./AlertsDetails";

const Stack = createStackNavigator();

export default AlertsHome = () => {
  return (
    <Stack.Navigator
      initialRouteName="acbreports"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="acbreports" component={ReportsFromArea} />
      <Stack.Screen name="acbdetails" component={AlertsDetails} />
    </Stack.Navigator>
  );
};
