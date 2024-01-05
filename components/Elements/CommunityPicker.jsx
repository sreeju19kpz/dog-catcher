import { Image, Pressable, Text, View } from "react-native";
import { styles } from "../../StyleSheet";
import { useNavigation } from "@react-navigation/native";
import thumbnail from "../../assets/thumbnail.png";
export default CommunityPicker = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View
      style={[styles.wid70, styles.hei70, styles.aliIteCnt, styles.jusConCnt]}
    >
      {
        <Pressable
          onPress={() => navigation.navigate("group", { id: item?.id })}
          style={[
            styles.jusConCnt,
            styles.aliIteCnt,
            styles.hei100p,
            styles.wid100p,
            styles.borRad10,
            { backgroundColor: "white" },
          ]}
        >
          <Image
            source={item?.thumbnail ? { uri: item?.thumbnail } : thumbnail}
            style={[
              styles.hei50,
              styles.wid50,
              styles.objFitCov,
              styles.borRad10,
              ,
              { marginTop: 5 },
            ]}
          />
          <Text
            numberOfLines={2}
            style={[
              styles.texAliCnt,
              { overflow: "hidden", width: 50, fontSize: 10, height: 24 },
            ]}
          >
            {item?.name}
          </Text>
        </Pressable>
      }
    </View>
  );
};
