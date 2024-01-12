import { Image, Text, View } from "react-native";
import { styles } from "../../StyleSheet";
import img from "../../assets/dp.jpg";
export default Author = ({ name, dp }) => {
  return (
    <View style={[styles.flexDirRow]}>
      <View style={[styles.flexDirRow, styles.gap10]}>
        <View style={[styles.hei33, styles.wid33]}>
          <Image
            source={dp ? { uri: dp } : img}
            style={[
              styles.wid100p,
              styles.hei100p,
              styles.objFitCov,
              { borderRadius: 33 / 2 },
            ]}
          ></Image>
        </View>
        <View>
          <Text style={[styles.fonColWhi]}>{name} </Text>
        </View>
      </View>
    </View>
  );
};
