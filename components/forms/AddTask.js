import React, { useEffect, useState } from "react";

import { StyleSheet, View } from "react-native";
import { Button, RadioButton, Text, TextInput } from "react-native-paper";
import { Picker } from "react-native";
import useValidation from "../comman/UseValidaion";
import { useNavigation } from "@react-navigation/native";
import {
  AddTaskApi,
  CreateUserByAdmin,
  GetAllUserList,
  UpdateUserByAdmin,
} from "../Api/api";
import { useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";
export const AddTask = () => {
  let navigate = useNavigation();
  const [getUserlist, setGetUserList] = useState([]);

  const route = useRoute();

  const taskId = route.params?.taskId || "";
  // const projectData = route.params?.initialFormState || {};

  const IntialFormState = {
    project_id: taskId,
    task_name: "",
    description: "",
    assign: "",
    due_date: "",
    status: "pending",
    priority: "",
  };

  const validators = {
    task_name: [
      (value) =>
        value === null || value === ""
          ? "Task is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
    description: [
      (value) =>
        value === null || value === ""
          ? "Task Description is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],

    assign: [
      (value) =>
        value === null || value === ""
          ? "Assign is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
    due_date: [
      (value) =>
        value === null || value === ""
          ? "Due Date is required"
          : // : /[^A-Za-z 0-9]/g.test(value)
            // ? "Cannot use special character "
            null,
    ],
    priority: [
      (value) =>
        value === null || value === ""
          ? "Priority is required"
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
  const GetUserListFuntion = async () => {
    const response = await GetAllUserList();
    setGetUserList(response.users || []);
  };

  useEffect(() => {
    GetUserListFuntion();
  }, []);
  const OnCreateTaskClick = async () => {
    if (validate()) {
      console.log("sttate--" + JSON.stringify(state));

      const response = await AddTaskApi(state);

      if (response.message === "task Created.") {
        Toast.show({
          type: "success", // success, error, info, or any custom type
          position: "top", // top, center, or bottom
          text1: "Task Create",
          text2: "Task Created successfully",
          visibilityTime: 1000, // Duration in milliseconds
          autoHide: true,
          topOffset: 30, // Adjust the distance from the top
        });
        setTimeout(() => {
          navigate.navigate("project");
        }, 1000);
      }
    }
  };

  //   const onUpdateUserClick = async () => {
  //     if (validate()) {
  //       const response = await UpdateUserByAdmin(state);

  //       if (response.message === "User updated.") {
  //         Toast.show({
  //           type: "success", // success, error, info, or any custom type
  //           position: "top", // top, center, or bottom
  //           text1: "Employee Update",
  //           text2: "Employee Updated successfully",
  //           visibilityTime: 2000, // Duration in milliseconds
  //           autoHide: true,
  //           topOffset: 30, // Adjust the distance from the top
  //         });
  //         setTimeout(() => {
  //           navigate.navigate("allusers");
  //         }, 2000);
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
          <Text variant="headlineMedium">Create Task</Text>
        </View>

        <View>
          {" "}
          <TextInput
            label="Task *"
            name="task_name"
            mode="outlined"
            onChangeText={(text) => onInputChange("task_name", text)}
            value={state.task_name}
          />
          {errors.task_name && (
            <View>
              {errors.task_name.map((error) => (
                <View key={error} style={styles.ErrorMsg}>
                  {" "}
                  {error}
                </View>
              ))}
            </View>
          )}
        </View>
        <View>
          {" "}
          <TextInput
            label="Task Description * "
            name="description"
            mode="outlined"
            onChangeText={(text) => onInputChange("description", text)}
            value={state.description}
          />
          {errors.description && (
            <View>
              {errors.description.map((error) => (
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
            selectedValue={state.assign}
            name="assign "
            value={state.assign}
            onValueChange={(value) => onInputChange("assign", value)}
          >
            <Picker.Item value="" label="Assign  *" />
            {getUserlist.map((item, id) => {
              return (
                <React.Fragment key={id}>
                  <Picker.Item label={item.name} value={item.id} />
                </React.Fragment>
              );
            })}
          </Picker>
          {errors.assign && (
            <View>
              {errors.assign.map((error) => (
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
            selectedValue={state.priority}
            name="priority "
            value={state.priority}
            onValueChange={(value) => onInputChange("priority", value)}
          >
            <Picker.Item value="" label="Priority  *" />
            <Picker.Item value="high" label="High" />
            <Picker.Item value="medium" label="Medium" />
            <Picker.Item value="low" label="Low" />
          </Picker>
          {errors.priority && (
            <View>
              {errors.priority.map((error) => (
                <View key={error} style={styles.ErrorMsg}>
                  {" "}
                  {error}
                </View>
              ))}
            </View>
          )}
        </View>

        <View>
          {" "}
          <TextInput
            label="Due Date*"
            name="due_date"
            mode="outlined"
            onChangeText={(text) => onInputChange("due_date", text)}
            value={state.due_date}
          />
          {errors.due_date && (
            <View>
              {errors.due_date.map((error) => (
                <View key={error} style={styles.ErrorMsg}>
                  {" "}
                  {error}
                </View>
              ))}
            </View>
          )}
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
            onPress={OnCreateTaskClick}
          >
            Create Task
          </Button>

          <Button
            mode="outlined"
            textColor="black"
            style={{
              width: "150px",
            }}
            onPress={() => navigate.navigate("project")}
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
    // borderRadius: 4,
    paddingHorizontal: 10,
  },
  picker: {
    fontSize: 12,
    height: 40,
    width: "100%",
    color: "Black",
    appearance: "none",
    backgroundColor: "#FFFBFE",
    borderRadius: 0,
    borderBottom: "1px solid black",

    boxSizing: "border-box",
    fontFamily: "System",
    fontSize: 14,
    marginTop: 5,
    padding: 0,
    resizeMode: "none",
  },
});
