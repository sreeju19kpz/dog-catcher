import { ScrollView, Text, View } from "react-native";
import { styles } from "../../StyleSheet";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import ApplyButton from "./elements/ApplyButton";
import { useGetReportDetailsMutation } from "../Features/reports/reportsApiSlice";

export default ReportDetails = ({ route }) => {
  const { id } = route.params;
  const [data, setData] = useState();
  const [getReportDetails, { isLoading }] = useGetReportDetailsMutation();
  useEffect(() => {
    const getReports = async () => {
      const data = await getReportDetails({ id: id }).unwrap();
      data && setData(data);
    };
    getReports();
  }, []);
  return isLoading ? (
    <View>
      <Text>loading</Text>
    </View>
  ) : (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.wid100p, , styles.bakColWhi, styles.pad10, styles.posRel]}
    >
      <View
        style={[
          styles.wid100p,
          styles.gap20,
          { paddingRight: 5, marginBottom: 20 },
        ]}
      >
        <View style={[styles.wid100p, styles.gap10]}>
          <View style={[styles.gap20]}>
            <Text style={[styles.fonSiz22, styles.fonWei900]}>
              {data?.title}
            </Text>
            <View style={[styles.gap5]}>
              <View style={[styles.flexDirRow, styles.gap10, styles.aliIteCnt]}>
                <MaterialCommunityIcons
                  name="office-building"
                  style={[styles.marTop5]}
                  size={12}
                  color="black"
                />
                <Text style={[styles.fonSiz15, styles.fonColBlaLig1]}>
                  {data?.companyName}
                </Text>
              </View>
              <View style={[styles.flexDirRow, styles.gap10, styles.aliIteCnt]}>
                <Feather
                  name="map-pin"
                  style={[styles.marTop5, { marginLeft: 1 }]}
                  size={11}
                  color="black"
                />
                <Text style={[styles.fonSiz15]}>{data?.location}</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.wid100p,
            styles.gap10,
            styles.borBotWid1,
            styles.borColBlaLigP1,
          ]}
        >
          <View>
            <Text style={[styles.fonSiz18, styles.fonWei700]}>
              Skills required
            </Text>
          </View>
          <View style={[styles.flexDirRow, styles.gap10, styles.marBot20]}>
            {data?.skills.map((item, index) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.bacColgreLig1,
                    styles.padHor4,
                    styles.padVer1,
                    { borderRadius: 5 },
                  ]}
                >
                  <Text>{item}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View
          style={[
            styles.wid100p,
            styles.gap10,
            styles.borBotWid1,
            styles.borColBlaLigP1,
          ]}
        >
          <View>
            <Text style={[styles.fonSiz18, styles.fonWei700]}>Job details</Text>
          </View>
          <View style={[styles.gap10, styles.marBot20]}>
            <View style={[styles.padVer1, styles.flexDirRow, styles.gap10]}>
              <FontAwesome
                name="rupee"
                style={[styles.marTop5]}
                size={14}
                color="black"
              />
              <Text style={[styles.fonWei700]}> salary :</Text>
              <Text>{data?.salary}</Text>
            </View>
            <View style={[styles.padVer1, styles.flexDirRow, styles.gap10]}>
              <AntDesign
                name="paperclip"
                style={[styles.marTop5]}
                size={13}
                color="black"
              />
              <Text style={[styles.fonWei700]}>job Type :</Text>
              <Text>{data?.jobType}</Text>
            </View>
            <View style={[styles.padVer1, styles.flexDirRow, styles.gap10]}>
              <AntDesign
                name="calendar"
                style={[styles.marTop5]}
                size={12}
                color="black"
              />
              <Text style={[styles.fonWei700]}>experience required:</Text>
              <Text>{data?.experience}</Text>
            </View>
            <View style={[styles.padVer1, styles.flexDirRow, styles.gap10]}>
              <AntDesign
                name="star"
                style={[styles.marTop5]}
                size={12}
                color="black"
              />
              <Text style={[styles.fonWei700]}>seniority :</Text>
              <Text>{data?.seniority}</Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.gap20,
            styles.borBotWid1,
            styles.borColBlaLigP1,
            { paddingRight: 20 },
          ]}
        >
          <View>
            <Text style={[styles.fonSiz18, styles.fonWei700]}>
              Job description
            </Text>
          </View>
          <View style={[styles.gap10, styles.marBot20]}>
            {data?.jobDescription.map((item, index) => {
              return (
                <View
                  key={index}
                  style={[styles.flexDirRow, styles.gap10, styles.aliIteCnt]}
                >
                  <Entypo name="key" size={12} color="black" />
                  <Text style={[]}>{item}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View
          style={[
            styles.gap20,
            styles.borBotWid1,
            styles.borColBlaLigP1,
            { paddingRight: 20 },
          ]}
        >
          <View>
            <Text style={[styles.fonSiz18, styles.fonWei700]}>
              required skills
            </Text>
          </View>
          <View style={[styles.gap10, styles.marBot20]}>
            {data?.skillsDescription.map((item, index) => {
              return (
                <View
                  key={index}
                  style={[styles.flexDirRow, styles.gap20, styles.aliIteCnt]}
                >
                  <Entypo name="key" size={12} color="black" />
                  <Text style={[]}>{item}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={[styles.gap10]}>
          <Text style={[styles.fonSiz18, styles.fonWei700]}>
            No. of openings
          </Text>
          <Text style={[styles.fonWei700]}>{data?.slots}</Text>
        </View>
      </View>

      <View style={[styles.hei33, styles.wid100p, { marginBottom: 20 }]}>
        <ApplyButton jobId={id} />
      </View>
    </ScrollView>
  );
};
