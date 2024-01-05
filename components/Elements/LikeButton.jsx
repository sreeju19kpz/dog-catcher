import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "../../StyleSheet";

export default LikeButton = ({ onClick, isLiked }) => {
  return (
    <View style={[styles.jusConCnt, styles.wid33]}>
      <Pressable
        onPress={onClick}
        style={[
          styles.jusConCnt,
          styles.aliIteCnt,
          styles.flexDirRow,
          styles.gap20,
          styles.hei100p,
        ]}
      >
        <View style={[styles.traScaM1]}>
          {isLiked ? (
            <AntDesign name="star" size={20} color="blue" />
          ) : (
            <AntDesign name="staro" size={20} color="black" />
          )}
        </View>
      </Pressable>
    </View>
  );
};
