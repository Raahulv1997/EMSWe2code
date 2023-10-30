import React, { useEffect } from "react";

import { StyleSheet, View } from "react-native";
import { Button, RadioButton, Text, TextInput } from "react-native-paper";
import { Picker } from "react-native";
import useValidation from "../comman/UseValidaion";
import { useNavigation } from "@react-navigation/native";
import {
  CreateUserByAdmin,
  SubmitLeaveByUser,
  UpdateUserByAdmin,
} from "../Api/api";
import { useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";
export const AddLeaveForm = () => {
  let navigate = useNavigation();

  //   const route = useRoute();

  //   const value = route.params?.value || {};
  //   const userData = route.params?.IntialFormState || {};

  const IntialFormState = {
    leave_type: "",
    reason: "",
    leave_time: "",
    start_date: "",
    end_date: "",
  };
  const validators = {
    leave_type: [
      (value) =>
        value === null || value === ""
          ? "Leave type is required"
          : // : /[^A-Za-z 0-9]/g.test(value)
            // ? "Cannot use special character "
            null,
    ],
    reason: [
      (value) =>
        value === null || value === ""
          ? "Leave reason is required"
          : // : /[^A-Za-z 0-9]/g.test(value)
            // ? "Cannot use special character "
            null,
    ],

    start_date: [
      (value) =>
        value === null || value === ""
          ? "Start Date is required"
          : // : /[^A-Za-z 0-9]/g.test(value)
            // ? "Cannot use special character "
            null,
    ],
  };

  const { state, onInputChange, setState, setErrors, errors, validate } =
    useValidation(IntialFormState, validators);

  //   useEffect(() => {
  //     if (userData.id !== null) {
  //       setState(userData);
  //     }
  //   }, []);

  const OnLeaveRequest = async () => {
    if (validate()) {
      const response = await SubmitLeaveByUser(state);
      console.log("res-" + JSON.stringify(response));
      if (response.message === "Your Leave Request submitted") {
        Toast.show({
          type: "success", // success, error, info, or any custom type
          position: "top", // top, center, or bottom
          text1: "Leave Request",
          text2: "Your Leave Request successfully submitted",
          visibilityTime: 2000, // Duration in milliseconds
          autoHide: true,
          topOffset: 30, // Adjust the distance from the top
        });
        setTimeout(() => {
          navigate.navigate("userLeave");
        }, 3000);
      }
    }
  };

  //   const onUpdateUserClick = async () => {
  //     if (validate()) {
  //       console.log("state---" + JSON.stringify(state));

  //       const response = await UpdateUserByAdmin(state);

  //       if (response.message === "User updated.") {
  //         navigate.navigate("allusers");
  //       }
  //     }
  //   };

  return (
    <View style={styles.ParentDiv}>
      <View style={styles.mainFormDiv}>
        <View
          style={{
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          {" "}
          <Text variant="headlineMedium">Request For Leave</Text>
        </View>
        <View>
          <Picker
            style={styles.picker}
            selectedValue={state.leave_type}
            name="leave_type"
            value={state.leave_type}
            onValueChange={(value) => onInputChange("leave_type", value)}
          >
            <Picker.Item
              value=""
              label="Leave Type *"
              labelStyle={styles.labelItem}
            />
            <Picker.Item value="Medical" label="Medical Leave" />
            <Picker.Item value="Wedding" label="Wedding Leave" />
            <Picker.Item value="Half Day" label="Half Day Leave" />
          </Picker>

          {errors.leave_type && (
            <View>
              {errors.leave_type.map((error) => (
                <View key={error} style={styles.ErrorMsg}>
                  {" "}
                  {error}
                </View>
              ))}
            </View>
          )}
        </View>

        <View style={{ marginBottom: "8px" }}>
          {" "}
          <TextInput
            label="Leave Reason *"
            name="reason"
            mode="outlined"
            multiline={true} // Set to true to enable multi-line input
            numberOfLines={3}
            onChangeText={(text) => onInputChange("reason", text)}
            value={state.reason}
          />
          {errors.reason && (
            <View>
              {errors.reason.map((error) => (
                <View key={error} style={styles.ErrorMsg}>
                  {" "}
                  {error}
                </View>
              ))}
            </View>
          )}
        </View>

        <View>
          <Picker
            style={styles.picker}
            selectedValue={state.leave_time}
            name="leave_time "
            value={state.leave_time}
            onValueChange={(value) => onInputChange("leave_time", value)}
          >
            <Picker.Item value="" label="Leave Time" />
            <Picker.Item value="Full Day" label="Full Day" />
            <Picker.Item
              value="Before After Half Day"
              label="Leave before Half Day"
            />
            <Picker.Item value="Half Day" label="Leave Half Day" />
          </Picker>
        </View>
        <View style={styles.textBoxDivStyle}>
          <View>
            {" "}
            <TextInput
              label="Start Date *"
              name="start_date"
              mode="outlined"
              style={styles.TextBoxstyle}
              onChangeText={(text) => onInputChange("start_date", text)}
              value={state.start_date}
            />
            {errors.start_date && (
              <View>
                {errors.start_date.map((error) => (
                  <View key={error} style={styles.ErrorMsg}>
                    {" "}
                    {error}
                  </View>
                ))}
              </View>
            )}
          </View>
          <View>
            <TextInput
              label="End Date"
              name="end_date"
              mode="outlined"
              style={styles.TextBoxstyle}
              value={state.end_date}
              onChangeText={(text) => onInputChange("end_date", text)}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Button
            mode="contained"
            textColor="white"
            style={{
              width: "150px",
            }}
            onPress={OnLeaveRequest}
          >
            Submit Request
          </Button>

          <Button
            mode="outlined"
            textColor="black"
            style={{
              width: "150px",
            }}
            onPress={() => navigate.navigate("userLeave")}
          >
            Cancel
          </Button>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ParentDiv: {
    flex: 1,
  },

  mainFormDiv: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },
  textBoxDivStyle: {
    flexDirection: "row",

    justifyContent: "space-between",
  },
  eventDivStyle: {
    width: "306px",
  },
  eventAreaBox: {
    margin: "2px",
  },
  TextBoxstyle: {
    width: "150px",
    margin: "2px",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8, // Adjust as needed
    marginTop: 5,
  },
  ErrorMsg: {
    color: "red",
  },

  pickerContainer: {
    flex: 1,
    borderColor: "gray",
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  picker: {
    fontSize: 12,
    height: 40,
    width: "100%",
    color: "#3b3442",
    appearance: "none",
    backgroundColor: "rgb(255,251,254)te",
    borderRadius: 5,
    borderBottom: "1px solid black",

    boxSizing: "border-box",
    fontFamily: "System",
    fontSize: 14,
    margin: 0,
    padding: 0,
    resizeMode: "none",
  },

  labelItem: {
    marginLeft: "5px",
  },
});
