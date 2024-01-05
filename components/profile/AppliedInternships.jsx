import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useGetAllAppliedInternshipsMutation } from "../Features/internships/internshipApiSlice";
import AppliedInternship from "./Elements/AppliedInternship";
import { styles } from "../../StyleSheet";

export default AppliedInternships = () => {
  const [getAllAppliedInternships, { isLoading }] =
    useGetAllAppliedInternshipsMutation();
  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      const data = await getAllAppliedInternships().unwrap();
      setData(data);
    };
    fetch();
  }, []);
  return (
    <ScrollView
      style={[styles.bakColWhi]}
      contentContainerStyle={[styles.pad10, styles.jusConCnt, styles.aliIteCnt]}
    >
      {data?.map((item, index) => {
        return <AppliedInternship key={index} internship={item} />;
      })}
    </ScrollView>
  );
};
