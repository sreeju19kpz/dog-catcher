import { Platform, ScrollView, StatusBar, Text, View } from "react-native";
import { styles } from "../../StyleSheet";
import PostBanner from "./elements/PostBanner";
import { useCallback, useEffect, useState } from "react";
import JISkeleton from "../Elements/JISkeleton";
import { useFocusEffect } from "@react-navigation/native";
import CreatePost from "../Posts/CreatePost";
import { useGetAllReportsForUserMutation } from "../Features/acbReports/reportsApiSlice";
export default ReportsFromArea = () => {
  const [data, setData] = useState();
  const [myPosts, setMyPosts] = useState();
  const [getAllReports, { isLoading }] = useGetAllReportsForUserMutation();
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
        contentContainerStyle={{ paddingBottom: 60 }}
        keyboardShouldPersistTaps="always"
        style={[
          styles.wid100p,
          styles.flex1,
          styles.bakColWhi,
          {
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          },
        ]}
      >
        <View style={[styles.flex1, styles.bakColWhi]}>
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
              styles.bakColWhi,
              {
                paddingTop:
                  Platform.OS === "android" ? StatusBar.currentHeight : 0,
              },
            ]}
          >
            <View style={[styles.flex1, styles.bakColWhi]}>
              {Array.from({ length: 3 }).map((_, i) => {
                return <JISkeleton key={i} />;
              })}
            </View>
          </View>
        </>
      );
    }
  }
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 60 }}
      keyboardShouldPersistTaps="always"
      style={[
        styles.wid100p,
        styles.flex1,
        styles.bakColWhi,
        { paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
      ]}
    >
      <View style={[styles.flex1, styles.bakColWhi]}>
        {data?.map((item, index) => {
          return <PostBanner post={item} key={index} />;
        })}
      </View>
    </ScrollView>
  );
};
