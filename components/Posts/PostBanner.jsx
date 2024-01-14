import { Pressable, Text, View } from "react-native";
import Author from "./Author";
import { styles } from "../../StyleSheet";
import { AntDesign } from "@expo/vector-icons";
import LAndCS from "./LAndCS";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../Features/auth/authSlice";
import { useNavigation } from "@react-navigation/native";
import EditPost from "./EditPost";

export default PostBanner = ({ post }) => {
  const navigation = useNavigation();
  const user = useSelector(selectCurrentUser);
  const route = useRoute();
  return (
    <View
      style={[
        styles.wid100p,
        styles.maxWid400,
        styles.borWid1,
        styles.borColWhiLigP1,
        styles.borRad10,
        styles.bakColBla,
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
            {user === post?.reportedBy?._id && <EditPost id={post?._id} />}
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
              ]}
            >
              {post?.status}
            </Text>
          </View>
        </View>
        <LAndCS id={post?._id} />
      </View>
    </View>
  );
};
