import React, { useEffect, useRef, useState } from "react";
import { Linking } from "react-native";
import * as Notifications from "expo-notifications";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Authentication from "./components/pages/Authentication";
import { selectCurrentState } from "./components/Features/auth/authSlice";
import DCApp from "./components/pages/DCApp";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Button, Platform } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default Main = () => {
  const isLoggedIn = useSelector(selectCurrentState);

  return (
    <NavigationContainer
      linking={{
        prefixes: ["https://mydcapp.com", "mydcapp://"],
        config: {
          // Configuration for linking
          screens: {
            profile: "profile",
            alerts: "alerts/acbreports/:id",
          },
        },
        async getInitialURL() {
          // First, you may want to do the default deep link handling
          // Check if app was opened from a deep link
          const url = await Linking.getInitialURL();

          if (url != null) {
            return url;
          }

          // Handle URL from expo push notifications
          const response =
            await Notifications.getLastNotificationResponseAsync();

          return response?.notification.request.content.data.url;
        },
        subscribe(listener) {
          const onReceiveURL = ({ url }) => listener(url);

          // Listen to incoming links from deep linking
          const eventListenerSubscription = Linking.addEventListener(
            "url",
            onReceiveURL
          );

          // Listen to expo push notifications
          const subscription =
            Notifications.addNotificationResponseReceivedListener(
              (response) => {
                const url = response.notification.request.content.data.url;

                // Any custom logic to see whether the URL needs to be handledr
                //...

                // Let React Navigation handle the URL

                listener(url);
              }
            );

          return () => {
            // Clean up the event listeners
            eventListenerSubscription.remove();
            subscription.remove();
          };
        },
      }}
    >
      {isLoggedIn === undefined ? (
        <UndefinedScreen />
      ) : isLoggedIn ? (
        <DCApp />
      ) : (
        <Authentication />
      )}
    </NavigationContainer>
  );
};
export const UndefinedScreen = () => {
  return (
    <View>
      <Text>loading</Text>
    </View>
  );
};
