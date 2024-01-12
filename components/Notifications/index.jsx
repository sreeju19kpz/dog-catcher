import { View } from "moti";
import { styles } from "../../StyleSheet";
import { Pressable, ScrollView, Text } from "react-native";
import { useGetAllNotificationsMutation } from "../Features/user/userApiSlice";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
export default NotificationScreen = () => {
  const [notifications, setNotifications] = useState([]);
  const [getAllNotifications, { isLoading }] = useGetAllNotificationsMutation();
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      const fetch = async () => {
        const data = await getAllNotifications().unwrap();
        data && setNotifications(data.notifications);
      };
      fetch();
    }, [])
  );

  return (
    <View style={[styles.flex1, styles.bakColBla]}>
      <ScrollView
        style={[styles.flex1, styles.bakColBla]}
        contentContainerStyle={[
          styles.flex1,
          styles.bakColBla,
          styles.pad10,
          styles.gap10,
        ]}
      >
        {notifications?.map((item, i) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("alerts", {
                  screen: "acbdetails",
                  params: { id: item.postId },
                })
              }
              key={i}
              style={[
                styles.wid100p,
                styles.hei50,
                styles.aliIteCnt,
                styles.jusConCnt,
                styles.borWid1,
                styles.borColWhiLigP1,
                styles.borRad10,
              ]}
            >
              <Text style={[styles.fonSiz18, styles.fonColIndBlu]}>
                {item?.notification}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};
