// likes and comments session
import { useFocusEffect } from "@react-navigation/native";

import { View, Text } from "react-native";
import { styles } from "../../StyleSheet";
import LikeButton from "../Elements/LikeButton";
import CommentButton from "../Elements/CommentButton";
import { useCallback, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import {
  useLikeMutation,
  useGetIsUserLikedMutation,
} from "../Features/reports/reportsApiSlice";

export default LAndCS = ({ id }) => {
  const navigation = useNavigation();
  const [like, { isLoading }] = useLikeMutation();
  const [getIsUserLiked, { isLoading: loadingIsLiked }] =
    useGetIsUserLikedMutation();
  const [liked, setLiked] = useState(); // user like

  const getAllC = async () => {
    const data = await like({ id: id }).unwrap();
    data && setLiked(data?.data);
  };
  useFocusEffect(
    useCallback(() => {
      const refetch = async () => {
        const data = await getIsUserLiked({ id: id }).unwrap();
        data && setLiked(data.isLiked);
      };
      refetch();
    }, [navigation])
  );

  return (
    <View style={[styles.wid100p, styles.gap5, { paddingVertical: 3 }]}>
      <View
        style={[
          styles.wid100p,
          styles.flexDirRow,
          styles.jusConSpcAro,
          styles.hei33,
        ]}
      >
        <LikeButton isLiked={liked} onClick={getAllC} />
        <CommentButton id={id} />
      </View>
    </View>
  );
};
