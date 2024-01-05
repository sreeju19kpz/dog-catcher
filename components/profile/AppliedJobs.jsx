import { View, Text, ScrollView } from "react-native";
import React, { useCallback, useEffect, useState } from "react";

import AppliedJob from "./Elements/AppliedJob";
import { styles } from "../../StyleSheet";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useGetAllSavedReportsMutation } from "../Features/reports/reportsApiSlice";

export default AppliedJobs = () => {
  const [getAllSavedReports, { isLoading }] = useGetAllSavedReportsMutation();
  const [data, setData] = useState();
  const { navigation } = useNavigation();
  useFocusEffect(
    useCallback(() => {
      const fetch = async () => {
        const data = await getAllSavedReports().unwrap();
        setData(data);
      };
      fetch();
    }, [navigation])
  );
  return (
    <ScrollView
      style={[styles.bakColWhi]}
      contentContainerStyle={[
        styles.pad10,
        styles.jusConCnt,
        styles.aliIteCnt,
        styles.gap10,
      ]}
    >
      {data?.map((item, index) => {
        return <AppliedJob key={index} job={item} />;
      })}
    </ScrollView>
  );
};
