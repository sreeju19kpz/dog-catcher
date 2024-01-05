import { Image, Pressable, Text, View } from "react-native";
import { styles } from "../../StyleSheet";
import { useNavigation } from "@react-navigation/native";

export default Author = ({ name, id }) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.flexDirRow, styles.fleGro1, { paddingLeft: 5 }]}>
      <Pressable onPress={() => navigation.navigate("group", { id: id })}>
        <Text>{name} </Text>
      </Pressable>
    </View>
  );
};
