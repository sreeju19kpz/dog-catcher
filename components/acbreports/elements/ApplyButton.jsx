import { View, Text, Button } from "react-native";
import React, { useCallback, useState } from "react";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useGetReportStatusMutation } from "../../Features/reports/reportsApiSlice";

export default ApplyButton = ({ jobId }) => {
  const navigation = useNavigation();
  const [getReportStatus, { isLoading }] = useGetReportStatusMutation();
  /*  const [applyForJob, { isLoading: applying }] = useApplyForJobMutation(); */
  const [status, setStatus] = useState("");

  useFocusEffect(
    useCallback(() => {
      async function refetch() {
        const data = await getReportStatus({ id: jobId }).unwrap();
        data && setStatus(data.status);
      }
      refetch();
    }, [navigation])
  );

  /*  const fetch = async () => {
    const data = await applyForJob({ job: jobId, status: "Applied" }).unwrap();

    data && setStatus(data.status);
  }; */
  return <Button title={status + " " || "Apply "} />;
};
