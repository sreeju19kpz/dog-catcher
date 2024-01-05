import { View, Text, Image } from "react-native";
import React from "react";

import { styles } from "../../StyleSheet";
import dp from "../../assets/dp.jpg";

const SingleComment = ({ comment }) => {
  return (
    <View>
      <View
        style={[styles.wid100p, styles.pad10, styles.flexDirRow, styles.gap10]}
      >
        <View style={[]}>
          <Image
            style={[
              styles.hei33,
              styles.wid33,
              styles.objFitCov,
              { borderRadius: 33 / 2 },
            ]}
            source={comment?.user?.dp ? { uri: `${comment?.user?.dp}` } : dp}
          />
        </View>

        <View
          style={[
            styles.bacColgreLig1,
            styles.fleGro1,
            styles.padHor10,
            styles.padVer1,
            styles.borRad15,
            styles.hei50,
            { paddingBottom: 4 },
          ]}
        >
          <Text style={[styles.linHig20, styles.fonWei700]}>
            {comment?.user?.name}
          </Text>

          <Text style={[styles.linHig20]}>{comment?.comment}</Text>
        </View>
      </View>
    </View>
  );
};

export default SingleComment;
