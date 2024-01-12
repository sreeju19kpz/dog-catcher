import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import LAndCS from "./LAndCS";
import { useRoute } from "@react-navigation/native";
import Author from "../../Posts/Author";
import { styles } from "../../../StyleSheet";

export default PostBanner = ({ post }) => {
  const route = useRoute();
  return (
    <View
      style={[
        styles.wid100p,
        styles.maxWid400,
        styles.borWid1,
        styles.borColWhiLigP1,
        styles.borRad10,
      ]}
    >
      <View style={[styles.wid100p, styles.jusConSpcAro]}>
        <View style={[styles.borBotWid1, styles.borColWhiLigP1]}>
          <View
            style={[
              styles.flexDirRow,
              styles.wid100p,
              styles.padHor20,
              styles.padVer5,
              styles.gap10,
              styles.jusConSpcBtw,
            ]}
          >
            <Author
              name={post?.reportedBy?.name}
              id={post?.reportedBy?._id}
              dp={post?.reportedBy?.dp}
            />
            <LAndCS id={post?._id} />
          </View>
          <View style={[styles.padHor20, { paddingTop: 10 }]}>
            <Text
              style={[
                styles.fonSiz15,
                styles.fonColWhi,
                { lineHeight: 30 },
                styles.padHor10,
              ]}
            >
              {post?.description}
            </Text>
          </View>
          <View style={[styles.padHor20]}>
            <Text
              style={[
                styles.fonSiz15,
                styles.fonColWhi,
                { lineHeight: 30 },
                styles.padHor10,
                post?.isAffectedByRabies
                  ? styles.bakColred
                  : styles.bakColgreen,
              ]}
            >
              {post?.isAffectedByRabies
                ? "rabbies affected"
                : "not affected by any virus"}
            </Text>
          </View>
          <View style={[styles.padHor20, styles.flexDirRow]}>
            <Text
              style={[
                styles.fonSiz15,
                styles.padHor10,
                styles.fonColWhi,
                { lineHeight: 30 },
              ]}
            >
              no of dogs:
            </Text>
            <Text
              style={[styles.fonSiz15, styles.fonColWhi, { lineHeight: 30 }]}
            >
              {post?.noOfDogs}
            </Text>
          </View>
          <View style={[styles.padHor20, styles.flexDirRow]}>
            <Text
              style={[
                styles.fonSiz15,
                styles.padHor10,
                styles.fonColWhi,
                { lineHeight: 30 },
              ]}
            >
              total attacks:
            </Text>
            <Text
              style={[styles.fonSiz15, styles.fonColWhi, { lineHeight: 30 }]}
            >
              {post?.noOfAttacks}
            </Text>
          </View>
          <View
            style={[styles.padHor20, styles.flexDirRow, { paddingBottom: 10 }]}
          >
            <Text
              style={[
                styles.fonSiz15,
                styles.padHor10,
                styles.fonColWhi,
                { lineHeight: 30 },
              ]}
            >
              current Status:
            </Text>
            <Text
              style={[
                styles.fonSiz15,
                styles.fonColWhi,
                styles.padHor10,
                { lineHeight: 30 },
                [
                  post?.status === "reported"
                    ? styles.bakColred
                    : post?.status === "working"
                    ? styles.bakColyellow
                    : styles.bakColgreen,
                ],
              ]}
            >
              {post?.status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
