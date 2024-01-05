import { View, Text, ImageBackground, Pressable, Button } from "react-native";
import React, { useCallback, useState } from "react";
import { styles } from "../../StyleSheet";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import thumbnail from "../../assets/thumbnail.png";
import {
  useGetIsUserJoinedCommunityMutation,
  useJoinCommunityMutation,
} from "../Features/community/communityApiSlice";

export default DiscoverItem = ({ item }) => {
  const [state, setState] = useState();
  const navigation = useNavigation();
  const [getIsUserJoinedCommunity, { isLoading }] =
    useGetIsUserJoinedCommunityMutation();
  const [joinCommunity, { isLoading: joining }] = useJoinCommunityMutation();

  useFocusEffect(
    useCallback(() => {
      const refetch = async () => {
        const data = await getIsUserJoinedCommunity({ id: item.id }).unwrap();
        data && setState(data.isMember);
      };
      refetch();
    }, [navigation])
  );

  const joinGroup = async () => {
    const data = await joinCommunity({ id: item.id }).unwrap();
    data && setState(data.isMember);
  };

  return (
    <View style={[styles.wid100p, styles.hei70]}>
      <Pressable
        onPress={() => navigation.navigate("group", { id: item?.id })}
        style={[styles.wid100p, styles.hei70]}
      >
        <ImageBackground
          source={item?.thumbnail ? { uri: item?.thumbnail } : thumbnail}
          style={[
            styles.wid100p,
            styles.hei70,
            styles.objFitCov,
            styles.borRad10,
            { overflow: "hidden" },
          ]}
        />
        <View
          style={[
            styles.wid100p,
            styles.flexDirRow,
            styles.jusConSpcBtw,
            styles.aliIteCnt,
            styles.posAbs,
            styles.hei100p,
            styles.pad10,
          ]}
        >
          <View style={[styles.aliIteCnt, styles.hei100p, styles.jusConCnt]}>
            <Text
              style={[
                styles.padHor4,
                styles.fonColWhi,
                styles.bakColWhiP3,
                styles.fonSiz18,
                styles.fonWei700,
                styles.jusConCnt,
                styles.aliIteCnt,
                { borderRadius: 5, paddingBottom: 3 },
              ]}
            >
              {item?.name}
            </Text>
          </View>
          <View>
            <Button onPress={joinGroup} title={state ? "leave " : "join "} />
          </View>
        </View>
      </Pressable>
    </View>
  );
};
