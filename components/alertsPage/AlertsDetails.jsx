import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useAcbGetReportDetailsMutation } from "../Features/acbReports/reportsApiSlice";
import { styles } from "../../StyleSheet";
import PostBannerSkeleton from "../Posts/PostBannerSkeleton";

export default AlertsDetails = ({ route }) => {
  const [post, setPost] = useState();
  const { id } = route.params;

  const [getDetails, { isLoading }] = useAcbGetReportDetailsMutation();
  useEffect(() => {
    const fetch = async () => {
      const data = await getDetails({ id }).unwrap();
      data && setPost(data);
    };
    fetch();
  }, []);
  if (isLoading) {
    return (
      <View
        style={[styles.flex1, styles.gap10, styles.bakColBla, styles.pad10]}
      >
        <PostBannerSkeleton />
      </View>
    );
  }
  return (
    <View style={[styles.flex1, styles.gap10, styles.bakColBla, styles.pad10]}>
      <PostBanner post={post} />
    </View>
  );
};
