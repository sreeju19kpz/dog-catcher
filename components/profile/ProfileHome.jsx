import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./Profile";
import Settings from "./Settings";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../StyleSheet";
const Drawer = createDrawerNavigator();
export default ProfileHome = () => {
  return (
    <Drawer.Navigator
      initialRouteName="account"
      screenOptions={{
        headerBackground: () => (
          <LinearGradient
            style={[styles.flex1]}
            colors={["#0000cd", "#000000"]}
          />
        ),
        headerTintColor: "white",
        drawerStyle: { backgroundColor: "black" },
        drawerActiveBackgroundColor: "#68f",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "grey",
      }}
    >
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
