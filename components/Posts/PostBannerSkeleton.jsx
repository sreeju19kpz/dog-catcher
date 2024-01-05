import { Text, View } from "react-native";
import { styles } from "../../StyleSheet";

import { useRoute } from "@react-navigation/native";
import { Skeleton } from "moti/skeleton";

export default PostBannerSkeleton = ({ post }) => {
  const route = useRoute();
  return (
    <View
      style={[
        styles.wid100p,
        styles.maxWid400,
        styles.borWid1,
        styles.borColBlaLigP1,
        styles.borRad10,
        styles.bakColWhi,
      ]}
    >
      <View style={[styles.wid100p, styles.gap10, styles.jusConSpcAro]}>
        <View
          style={[
            styles.flexDirRow,
            styles.wid100p,
            styles.padHor20,
            styles.padVer10,
          ]}
        >
          <View style={[styles.flexDirRow]}>
            <View style={[styles.flexDirRow, styles.gap10]}>
              <Skeleton
                colorMode="light"
                width={33}
                height={33}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 1000,
                }}
              ></Skeleton>
              <Skeleton
                colorMode="light"
                width={80}
                height={10}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 1000,
                }}
              ></Skeleton>
            </View>
          </View>
          <View style={[styles.flexDirRow, styles.fleGro1, { paddingLeft: 5 }]}>
            <Skeleton
              colorMode="light"
              width={80}
              height={10}
              radius={"round"}
              transition={{
                type: "timing",
                duration: 1000,
              }}
            ></Skeleton>
          </View>
        </View>
        <View style={[styles.padHor20, styles.gap10]}>
          <Skeleton
            colorMode="light"
            width={"90%"}
            height={3}
            radius={"round"}
            transition={{
              type: "timing",
              duration: 1000,
            }}
          ></Skeleton>
          <Skeleton
            colorMode="light"
            width={"90%"}
            height={3}
            radius={"round"}
            transition={{
              type: "timing",
              duration: 1000,
            }}
          ></Skeleton>
          <Skeleton
            colorMode="light"
            width={"90%"}
            height={3}
            radius={"round"}
            transition={{
              type: "timing",
              duration: 1000,
            }}
          ></Skeleton>
          <Skeleton
            colorMode="light"
            width={"90%"}
            height={3}
            radius={"round"}
            transition={{
              type: "timing",
              duration: 1000,
            }}
          ></Skeleton>
          <Skeleton
            colorMode="light"
            width={"90%"}
            height={3}
            radius={"round"}
            transition={{
              type: "timing",
              duration: 1000,
            }}
          ></Skeleton>
          <Skeleton
            colorMode="light"
            width={"90%"}
            height={3}
            radius={"round"}
            transition={{
              type: "timing",
              duration: 1000,
            }}
          ></Skeleton>
        </View>
        <View style={[styles.wid100p, styles.gap5, styles.padVer10]}>
          <View
            style={[
              styles.wid100p,
              styles.flexDirRow,
              styles.jusConSpcAro,
              styles.hei50,
            ]}
          >
            <View style={[styles.jusConCnt, styles.wid140, styles.aliIteCnt]}>
              <Skeleton
                colorMode="light"
                width={80}
                height={22}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 1000,
                }}
              ></Skeleton>
            </View>
            <View style={[styles.jusConCnt, styles.wid140, styles.aliIteCnt]}>
              <Skeleton
                colorMode="light"
                width={80}
                height={22}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 1000,
                }}
              ></Skeleton>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
