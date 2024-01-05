import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./Profile";
import Settings from "./Settings";
const Drawer = createDrawerNavigator();
export default ProfileHome = () => {
  return (
    <Drawer.Navigator initialRouteName="account">
      <Drawer.Screen
        options={{
          headerStyle: { backgroundColor: "#1F51FF" },
          headerTitleStyle: { color: "#ffffff" },
        }}
        name="account"
        component={Profile}
      />
      <Drawer.Screen
        options={{
          headerStyle: { backgroundColor: "#1F51FF" },
          headerTitleStyle: { color: "#ffffff" },
        }}
        name="settings"
        component={Settings}
      />
    </Drawer.Navigator>
  );
};
