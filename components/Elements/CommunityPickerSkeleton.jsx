import { Pressable, Text, View } from "react-native";
import { styles } from "../../StyleSheet";

import { Skeleton } from "moti/skeleton";
export default CommunityPickerSkeleton = ({ item }) => {
  return (
    <View
      style={[styles.wid70, styles.hei70, styles.aliIteCnt, styles.jusConCnt]}
    >
      {
        <View
          style={[
            styles.jusConCnt,
            styles.aliIteCnt,
            styles.hei100p,
            styles.wid100p,
            styles.borRad10,
            { backgroundColor: "white", gap: 2 },
          ]}
        >
          <Skeleton
            colorMode="light"
            width={50}
            height={50}
            radius={5}
            transition={{
              type: "timing",
              duration: 2000,
            }}
          />
          <View style={{ gap: 2 }}>
            <Skeleton
              colorMode="light"
              width={40}
              height={3}
              radius={5}
              transition={{
                type: "timing",
                duration: 2000,
              }}
            />
            <Skeleton
              colorMode="light"
              width={40}
              height={3}
              radius={5}
              transition={{
                type: "timing",
                duration: 2000,
              }}
            />
          </View>
        </View>
      }
    </View>
  );
};
