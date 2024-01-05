import { View, Text, Image } from "react-native";
import React from "react";

import { styles } from "../../StyleSheet";

import { Skeleton } from "moti/skeleton";
const SingleCommentSkeleton = () => {
  return (
    <Skeleton.Group show>
      <View
        style={[styles.wid100p, styles.pad10, styles.flexDirRow, styles.gap10]}
      >
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
        <View
          style={[
            styles.bacColgreLig1,
            styles.fleGro1,
            styles.padHor10,
            styles.padVer5,
            styles.hei50,
            styles.borRad15,
            styles.jusConSpcAro,
          ]}
        >
          <Skeleton
            colorMode="light"
            width={"40%"}
            height={6}
            radius={"round"}
            transition={{
              type: "timing",
              duration: 1000,
            }}
          ></Skeleton>
          <Skeleton
            colorMode="light"
            width={"80%"}
            height={5}
            radius={"round"}
            transition={{
              type: "timing",
              duration: 1000,
            }}
          ></Skeleton>
          <Skeleton
            colorMode="light"
            width={"80%"}
            height={5}
            radius={"round"}
            transition={{
              type: "timing",
              duration: 1000,
            }}
          ></Skeleton>
        </View>
      </View>
    </Skeleton.Group>
  );
};

export default SingleCommentSkeleton;
