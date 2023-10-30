import React, { useState } from "react";

import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Switch, Text } from "react-native-paper";

import { Box, Flex } from "@react-native-material/core";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import UserDeleteAlert from "./UserDeleteAlert";
import { UserStatusUpdateByAdmin } from "../Api/api";
import Toast from "react-native-toast-message";
export default function UserBox({ item, setapicall }) {
  let navigate = useNavigation();
  var UserValue = item.approved === 1 ? true : false;

  const [isSwitchOn, setIsSwitchOn] = useState(UserValue);
  const [isDeleteAlert, setDeleteAlert] = useState(false);

  const onToggleSwitch = async () => {
    console.log("idd---" + item.id);
    if (isSwitchOn === true) {
      let status = 0;
      const response = await UserStatusUpdateByAdmin(item.id, status);
      if (response.message === "Inactive successfully") {
        Toast.show({
          type: "success", // success, error, info, or any custom type
          position: "top", // top, center, or bottom
          text1: "Employee Status",
          text2: "Employee Inactive successfully",
          visibilityTime: 1000, // Duration in milliseconds
          autoHide: true,
          topOffset: 30, // Adjust the distance from the top
        });
        setTimeout(() => {
          setIsSwitchOn(false);
          setapicall(true);
        }, 1000);
      }
    } else {
      let status = 1;
      const response = await UserStatusUpdateByAdmin(item.id, status);
      if (response.message === "Account Activeted successfully") {
        Toast.show({
          type: "success", // success, error, info, or any custom type
          position: "top", // top, center, or bottom
          text1: "Employee Status",
          text2: "Employee Activeted successfully",
          visibilityTime: 1000, // Duration in milliseconds
          autoHide: true,
          topOffset: 30, // Adjust the distance from the top
        });
        setTimeout(() => {
          setIsSwitchOn(true);
          setapicall(true);
        }, 1000);
      }
    }
  };

  let value = true;
  const IntialFormState = {
    id: item.id,
    name: item.name,
    email: item.email,
    phone: item.phone,
    institution_id: item.institution_id ? item.institution_id.id : 1,

    gender: item.gender,
    date_of_birth: item.date_of_birth,
  };

  return (
    <View>
      <Flex key={item.id} flexDirection="row" style={styles.Card}>
        <View>
          <Avatar.Image size={40} source={require("./images.png")} />
        </View>
        <Box>
          <Text variant="titleMedium">{item.name}</Text>
          <Text variant="bodySmall">{item.email} </Text>
          <Text variant="bodySmall">{item.phone}</Text>
        </Box>
        <View
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#fff",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigate.navigate("adduserform", { value, IntialFormState });
            }}
          >
            <Icon name="edit" size={20} color="green" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: "10px" }}
            onPress={() => {
              setDeleteAlert(true);
            }}
          >
            <Icon name="trash" size={20} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: "10px" }}>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </TouchableOpacity>
        </View>
      </Flex>
      <UserDeleteAlert
        isDeleteAlert={isDeleteAlert}
        setDeleteAlert={setDeleteAlert}
        id={item.id}
        userName={item.name}
        setapicall={setapicall}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  Card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 14,
    margin: 5,
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    gap: 8,
    borderColor: "#ccc",
    justifyContent: "start",
    alignItems: "center",
    position: "relative",
  },
});
