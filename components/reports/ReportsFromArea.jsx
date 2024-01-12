import { Platform, ScrollView, StatusBar, Text, View } from "react-native";
import { styles } from "../../StyleSheet";
import PostBanner from "../Posts/PostBanner";
import { useCallback, useEffect, useState } from "react";
import JISkeleton from "../Elements/JISkeleton";
import { useFocusEffect } from "@react-navigation/native";
import CreatePost from "../Posts/CreatePost";
import { useGetAllReportsFromAreaMutation } from "../Features/reports/reportsApiSlice";
import { LinearGradient } from "expo-linear-gradient";
import PostBannerSkeleton from "../Posts/PostBannerSkeleton";
export default ReportsFromArea = () => {
  const [data, setData] = useState();
  const [myPosts, setMyPosts] = useState();
  const [getAllReports, { isLoading }] = useGetAllReportsFromAreaMutation();
  useFocusEffect(
    useCallback(() => {
      const getReports = async () => {
        const data = await getAllReports().unwrap();
        data && setData(data);
      };
      getReports();
    }, [])
  );
  const updatePosts = (data) => {
    setMyPosts((prev) => (prev ? [data, ...prev] : [data]));
  };
  if (isLoading) {
    if (data) {
      <ScrollView
        contentContainerStyle={[{ paddingBottom: 60 }, styles.bakColBla]}
        keyboardShouldPersistTaps="always"
        style={[styles.wid100p, styles.flex1, styles.bakColBla, styles.pad10]}
      >
        <View style={[styles.flex1, styles.bakColBla]}>
          <CreatePost setMypost={(data) => updatePosts(data)} />
          {data?.map((item, index) => {
            return <PostBanner post={item} key={index} />;
          })}
        </View>
      </ScrollView>;
    } else {
      return (
        <>
          <View
            style={[
              styles.wid100p,
              styles.flex1,
              styles.bakColBla,
              styles.pad10,
            ]}
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
  }
  return (
    <>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 90 }}
        keyboardShouldPersistTaps="always"
        style={[styles.wid100p, styles.flex1, styles.pad10, styles.bakColBla]}
      >
        <View style={[styles.flex1, styles.bakColBla, styles.gap10]}>
          <CreatePost setMypost={(data) => updatePosts(data)} />
          {myPosts?.map((item, index) => {
            return <PostBanner post={item} key={index} />;
          })}
          {data?.map((item, index) => {
            return <PostBanner post={item} key={index} />;
          })}
        </View>
      </ScrollView>
    </>
  );
};
