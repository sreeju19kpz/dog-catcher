import { Platform, ScrollView, StatusBar, Text, View } from "react-native";
import { styles } from "../../StyleSheet";
import PostBanner from "../Posts/PostBanner";
import { useEffect, useState } from "react";
import JISkeleton from "../Elements/JISkeleton";
import { useGetAllReportsMutation } from "../Features/reports/reportsApiSlice";
import CreatePost from "../Posts/CreatePost";
import PostBannerSkeleton from "../Posts/PostBannerSkeleton";
export default AllReports = () => {
  const [data, setData] = useState();
  const [myPosts, setMyPosts] = useState();
  const [getAllReports, { isLoading }] = useGetAllReportsMutation();
  useEffect(() => {
    const getReports = async () => {
      const data = await getAllReports().unwrap();
      data && setData(data);
    };
    getReports();
  }, []);
  const updatePosts = (data) => {
    setMyPosts((prev) => (prev ? [data, ...prev] : [data]));
  };
  if (isLoading || data === undefined) {
    return (
      <>
        <View
          style={[styles.wid100p, styles.flex1, styles.bakColBla, styles.pad10]}
        >
          <View style={[styles.flex1, styles.bakColBla, styles.gap10]}>
            <CreatePost setMypost={(data) => updatePosts(data)} />
            {Array.from({ length: 3 }).map((_, i) => {
              return <PostBannerSkeleton key={i} />;
            })}
          </View>
        </View>
      </>
    );
  }
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 90 }}
      keyboardShouldPersistTaps="always"
      style={[styles.wid100p, styles.flex1, styles.bakColBla, styles.pad10]}
    >
      <View style={[styles.flex1, styles.gap10]}>
        <CreatePost setMypost={(data) => updatePosts(data)} />
        {myPosts?.map((item, index) => {
          return <PostBanner post={item} key={index} />;
        })}
        {data?.map((item, index) => {
          return <PostBanner post={item} key={index} />;
        })}
      </View>
    </ScrollView>
  );
};
