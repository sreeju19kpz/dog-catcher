import { View, Text, Pressable, Image } from "react-native";
import React, { useCallback, useState } from "react";
import { styles } from "../../StyleSheet";
import { useGetAllACBUserFollowsMutation } from "../Features/user/userApiSlice";
import { useFocusEffect } from "@react-navigation/native";
import dp from "../../assets/dp.jpg";
import { useNavigation } from "@react-navigation/native";
export default Messages = () => {
  const navigation = useNavigation();
  const [getAllACBUserFollows, { isLoading }] =
    useGetAllACBUserFollowsMutation();
  const [acbs, setAcbs] = useState();

  useFocusEffect(
    useCallback(() => {
      const fetch = async () => {
        const data = await getAllACBUserFollows().unwrap();
        data && setAcbs(data);
      };
      fetch();
    }, [navigation])
  );
  return (
    <View style={[styles.flex1, styles.pad10, styles.gap10, styles.bakColBla]}>
      {acbs?.map((item, i) => {
        return (
          <Pressable
            key={i}
            onPress={() => navigation.navigate("messagelist", { id: item._id })}
            style={[
              styles.wid100p,
              styles.hei70,
              styles.flexDirRow,
              styles.borWid1,
              styles.aliIteCnt,
              styles.pad10,
              styles.gap10,
              styles.borColWhiLigP1,
              { borderRadius: 15 },
            ]}
          >
            <View style={[styles.wid50, styles.hei50, { borderRadius: 25 }]}>
              <Image
                source={item?.dp || dp}
                style={[styles.wid100p, styles.hei100p, { borderRadius: 25 }]}
              />
            </View>
            <View>
              <Text style={[styles.fonSiz18, styles.fonColWhi]}>
                {item?.name}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};
