import React, { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useGetAllJoinedCommunitiesMutation } from "../Features/community/communityApiSlice";
import CommunityPicker from "../Elements/CommunityPicker";
import { styles } from "../../StyleSheet";
import CommunityPickerSkeleton from "./CommunityPickerSkeleton";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export default AllUserJoinedCommunities = () => {
  const [getAllJoinedCommunities, { isLoading }] =
    useGetAllJoinedCommunitiesMutation();
  const [cP, setCp] = useState(); //community picker
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const getAllC = async () => {
        const data = await getAllJoinedCommunities().unwrap();
        data && setCp(data);
      };
      getAllC();
    }, [navigation])
  );

  if (isLoading && cP) {
    return (
      <View style={[styles.pad20, styles.gap20, styles.flexDirRow]}>
        {cP?.map((item, index) => {
          return <CommunityPicker key={index} item={item} />;
        })}
      </View>
    );
  }
  if (isLoading && cP === undefined) {
    return (
      <>
        <View style={[styles.pad20, styles.gap20, styles.flexDirRow]}>
          {Array.from({ length: 5 }).map((_, i) => {
            return <CommunityPickerSkeleton key={i} />;
          })}
        </View>
      </>
    );
  }
  return (
    <View style={[styles.pad20, styles.gap20, styles.flexDirRow]}>
      {cP?.map((item, index) => {
        return <CommunityPicker key={index} item={item} />;
      })}
    </View>
  );
};
