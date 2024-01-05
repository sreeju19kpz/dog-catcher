import { View, Text, Image, Pressable, Modal, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "../../StyleSheet";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useCreateReportMutation } from "../Features/reports/reportsApiSlice";
import DropDown from "../Elements/DropDown";
import RadioBtn from "../Elements/RadioBtn";

export default CreatePost = ({ setMypost }) => {
  const [description, setDescription] = useState();
  const [state, setState] = useState(false);
  const [area, setArea] = useState("select");
  const [isRabbiesAffected, setIsRabbiesAffected] = useState();
  const [noOfDogs, setNoOfDogs] = useState("");
  const [noOfAttacks, setNoOfAttacks] = useState("");
  const [createReport, { isLoading }] = useCreateReportMutation();

  const report = async () => {
    const data = await createReport({
      noOfAttacks: noOfAttacks,
      noOfDogs: noOfDogs,
      isAffectedByRabies: isRabbiesAffected,
      area: area,
      description: description,
    });
    data && setMypost(data.data);
    setDescription("");
    setNoOfAttacks("");
    setNoOfDogs("");
    setArea("select");
    setIsRabbiesAffected(undefined);
    setState(() => !state);
  };
  return (
    <>
      <View style={[styles.wid100p]}>
        <View style={[styles.wid100p, styles.hei150]}>
          <Pressable
            onPress={() => setState(!state)}
            style={[
              styles.wid100p,
              styles.hei100p,
              styles.JusConFleStr,
              styles.aliIteFleStr,
              styles.borWid1,
              styles.borRad10,
              styles.pad10,
              styles.borColBlaLigP1,
              styles.borWid1,
            ]}
          >
            <Text style={[styles.wid100p, styles.hei33, styles.fonColBlaLig1]}>
              type here something...
            </Text>
          </Pressable>
        </View>
      </View>
      {state && (
        <Modal animationType="slide" transparent>
          <View
            style={[
              styles.hei50,
              styles.bacColBlu,
              styles.wid100p,
              styles.jusConSpcBtw,
              styles.aliIteCnt,
              styles.flexDirRow,
              styles.padHor10,
            ]}
          >
            <Pressable onPress={() => setState(!state)}>
              <AntDesign name="arrowleft" size={24} color="white" />
            </Pressable>
          </View>
          <View
            style={[
              styles.wid100p,
              styles.hei100p,
              styles.bakColWhi,
              styles.pad20,
              styles.gap20,
            ]}
          >
            <TextInput
              style={[
                styles.borRad10,

                styles.pad10,
                styles.hei150,
                styles.aliIteFleStr,
                styles.borWid1,
                styles.borColBlu1,
                {
                  textAlign: "left",
                  textAlignVertical: "top",
                },
              ]}
              value={description}
              onChangeText={setDescription}
              placeholder="type something here..."
            />
            <View style={[styles.gap20]}>
              <View>
                <View>
                  <Text style={[styles.fonSiz12]}>No. of dogs in the area</Text>
                </View>
                <View>
                  <TextInput
                    value={noOfDogs}
                    onChangeText={setNoOfDogs}
                    keyboardType="numeric"
                    style={[styles.borWid1]}
                  />
                  <Text
                    style={[
                      styles.fonSiz12,
                      styles.fonColRed,
                      styles.posAbs,
                      styles.padHor10,
                      styles.bakColWhi,
                      { top: 20, marginHorizontal: 10 },
                    ]}
                  >
                    * this field is required
                  </Text>
                </View>
              </View>
              <View>
                <View>
                  <Text style={[styles.fonSiz12]}>
                    No. of people got attacked by dogs
                  </Text>
                </View>
                <View>
                  <TextInput
                    value={noOfAttacks}
                    onChangeText={setNoOfAttacks}
                    keyboardType="numeric"
                    style={[styles.borWid1]}
                  />
                  <Text
                    style={[
                      styles.fonSiz12,
                      styles.fonColRed,
                      styles.posAbs,
                      styles.padHor10,
                      styles.bakColWhi,
                      { top: 20, marginHorizontal: 10 },
                    ]}
                  >
                    * this field is required
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.flexDirRow,
                styles.hei50,
                styles.aliIteCnt,
                styles.gap20,
              ]}
            >
              <View
                style={[
                  styles.hei50,
                  styles.flexDirRow,
                  styles.aliIteCnt,
                  styles.gap10,
                  { zIndex: 1 },
                ]}
              >
                <Text>area :</Text>
                <DropDown onSelect={(data) => setArea(data)} text={area} />
              </View>
              <View
                style={[
                  styles.flexDirRow,
                  styles.gap10,
                  styles.hei50,
                  styles.aliIteCnt,
                ]}
              >
                <RadioBtn
                  title={"yes"}
                  state={isRabbiesAffected}
                  value={true}
                  onClick={() => setIsRabbiesAffected(true)}
                />
                <RadioBtn
                  title={"no"}
                  state={isRabbiesAffected}
                  value={false}
                  onClick={() => setIsRabbiesAffected(false)}
                />
              </View>
            </View>
            <View
              style={[styles.jusConSpcBtw, styles.aliIteCnt, styles.flexDirRow]}
            >
              <View
                style={[
                  styles.flexDirRow,
                  styles.gap10,
                  styles.aliIteCnt,
                  styles.padHor10,
                ]}
              >
                <MaterialCommunityIcons
                  name="map-marker-outline"
                  size={18}
                  color="#1F51FF"
                />
                <Feather name="image" size={17} color="#1F51FF" />
                <MaterialIcons name="gif" s size={22} color="#1F51FF" />
                <FontAwesome name="smile-o" size={18} color="#1F51FF" />
                <AntDesign name="link" size={14} color="#1F51FF" />
              </View>
              <View style={[styles.padHor10]}>
                <Pressable onPress={report}>
                  <Ionicons
                    name={description ? "send-sharp" : "send-outline"}
                    size={24}
                    color="#1F51FF"
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};
