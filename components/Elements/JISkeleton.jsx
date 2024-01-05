import { View } from "react-native";
import { styles } from "../../StyleSheet";
import { Skeleton } from "moti/skeleton";
export default Job = () => {
  return (
    <Skeleton.Group show>
      <View style={[styles.wid100p, styles.pad10]}>
        <View
          style={[
            styles.wid100p,
            styles.pad10,
            styles.gap20,
            styles.borStySol,
            styles.borColBlaLigP1,
            styles.borWid1,
            styles.borRad10,
            styles.bakColWhi,
          ]}
        >
          <View style={[styles.wid100p, styles.gap10]}>
            <View style={[styles.wid100p]}>
              <Skeleton
                colorMode="light"
                width={220}
                height={28}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 2000,
                }}
              ></Skeleton>
            </View>
            <View
              style={[
                styles.wid100p,
                styles.flexDirRow,
                styles.gap10,
                styles.aliIteCnt,
              ]}
            >
              <Skeleton
                colorMode="light"
                width={220}
                height={8}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 2000,
                }}
              ></Skeleton>
            </View>
            <View
              style={[
                styles.wid100p,
                styles.flexDirRow,
                styles.gap10,
                styles.aliIteCnt,
              ]}
            >
              <Skeleton
                colorMode="light"
                width={15}
                height={15}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 2000,
                }}
              ></Skeleton>
              <Skeleton
                colorMode="light"
                width={80}
                height={10}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 2000,
                }}
              ></Skeleton>
            </View>
            <View
              style={[
                styles.wid100p,
                styles.flexDirRow,
                styles.gap10,
                styles.aliIteCnt,
              ]}
            >
              <Skeleton
                colorMode="light"
                width={15}
                height={15}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 2000,
                }}
              ></Skeleton>
              <Skeleton
                colorMode="light"
                width={80}
                height={10}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 2000,
                }}
              ></Skeleton>
            </View>
            <View
              style={[
                styles.wid100p,
                styles.flexDirRow,
                styles.gap10,
                styles.aliIteCnt,
              ]}
            >
              <Skeleton
                colorMode="light"
                width={15}
                height={15}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 2000,
                }}
              ></Skeleton>
              <Skeleton
                colorMode="light"
                width={80}
                height={10}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 2000,
                }}
              ></Skeleton>
            </View>
            <View style={[styles.flexDirRow, styles.gap10, styles.aliIteCnt]}>
              <Skeleton
                colorMode="light"
                width={15}
                height={15}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 2000,
                }}
              ></Skeleton>
              <Skeleton
                colorMode="light"
                width={80}
                height={10}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 2000,
                }}
              ></Skeleton>
            </View>
            <View style={[styles.flexDirRow, styles.gap10]}>
              {Array.from({ length: 3 }).map((_, i) => {
                return (
                  <Skeleton
                    key={i}
                    colorMode="light"
                    width={50}
                    height={18}
                    radius={"round"}
                    transition={{
                      type: "timing",
                      duration: 2000,
                    }}
                  ></Skeleton>
                );
              })}
            </View>
          </View>
          <View
            style={[
              styles.wid100p,
              styles.JusConFleEnd,
              styles.padTop5,
              styles.aliIteFleEnd,
              styles.flexDirRow,
              styles.gap10,
            ]}
          >
            <View style={[styles.wid100]}>
              <Skeleton
                colorMode="light"
                width={100}
                height={20}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 2000,
                }}
              />
            </View>
            <View style={[styles.wid100]}>
              <Skeleton
                colorMode="light"
                width={100}
                height={20}
                radius={"round"}
                transition={{
                  type: "timing",
                  duration: 2000,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Skeleton.Group>
  );
};
