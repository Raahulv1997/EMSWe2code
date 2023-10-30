// AddProjectForm.js
import React, { useEffect, useState } from "react";
import { View, Picker, StyleSheet, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import useValidation from "../comman/UseValidaion";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AddProjectApi, GetAllUserList, UpdateProjectApi } from "../Api/api";
import { Flex } from "@react-native-material/core";
import Toast from "react-native-toast-message";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import moment from "moment";
const AddProjectForm = () => {
  const route = useRoute();
  const [getUserlist, setGetUserList] = useState([]);
  const value = route.params?.value || {};
  const projectData = route.params?.initialFormState || {};

  let Token = localStorage.getItem("token");
  var head = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  };

  let navigate = useNavigation();

  let initialFormState = {
    project_name: "",
    description: "",
    team_leader_id: "",
    start_date: "",
    end_date: "",
    status: "progress",
  };

  const GetUserListFuntion = async () => {
    const response = await GetAllUserList(head);
    setGetUserList(response.users || []);
  };

  useEffect(() => {
    GetUserListFuntion();
  }, []);
  const validators = {
    project_name: [
      (value) =>
        value === "" || value.trim() === ""
          ? "Project Name is required"
          : /[-]?\d+(\.\d+)?/.test(value)
          ? "Project Name can not have a number."
          : value.length < 2
          ? "Project Name should have 2 or more letters"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : "",
    ],
    description: [
      (value) =>
        value === "" || value.trim() === ""
          ? "Description is required"
          : value.length < 2
          ? "Description should have 2 or more letters"
          : null,
    ],
    team_leader_id: [
      (value) => (value === "" ? "Team leader is required" : null),
    ],
    start_date: [(value) => (value === "" ? "Start date is required" : null)],
    end_date: [
      (value) =>
        value === "" || value === null ? "End date  is required" : null,
    ],
    // status: [
    //   (value) =>
    //     value === "" || value.trim() === "" ? "Status is required" : "",
    // ],
  };
  // CUSTOM VALIDATIONS IMPORT
  const { state, setState, setErrors, onInputChange, errors, validate } =
    useValidation(initialFormState, validators);

  /*Function to add peoject */

  useEffect(() => {
    if (projectData.id !== undefined) {
      setState(projectData);
    } else {
      setState(initialFormState);
    }
  }, []);
  const handleAddProject = async () => {
    if (validate()) {
      try {
        let res = await AddProjectApi(state, head);
        if (res.message === "Project Created.") {
          Toast.show({
            type: "success", // success, error, info, or any custom type
            position: "top", // top, center, or bottom
            text1: "Project Created",
            text2: "Project Create successfully",
            visibilityTime: 1000, // Duration in milliseconds
            autoHide: true,
            topOffset: 30, // Adjust the distance from the top
          });
          setTimeout(() => {
            navigate.navigate("project");
          }, 1000);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleUpdateProject = async () => {
    if (validate()) {
      try {
        let res = await UpdateProjectApi(state, head);
        if (res.message === "Updated.") {
          Toast.show({
            type: "success", // success, error, info, or any custom type
            position: "top", // top, center, or bottom
            text1: "Project Update",
            text2: "Project Update successfully",
            visibilityTime: 1000, // Duration in milliseconds
            autoHide: true,
            topOffset: 30, // Adjust the distance from the top
          });
          setTimeout(() => {
            navigate.navigate("project");
          }, 1000);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Flex style={styles.scrollContainer}>
      <View style={styles.contentBody}>
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>
              {value === "update" ? "Update Project" : "Add Project"}
            </Text>
            <View style={{ marginBottom: "10px" }}>
              <View>
                {" "}
                <TextInput
                  label="Project Name"
                  value={state.project_name}
                  onChangeText={(value) => onInputChange("project_name", value)}
                />
                {errors.project_name && (
                  <View>
                    {errors.project_name.map((error) => (
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
                  label="Description"
                  value={state.description}
                  onChangeText={(value) => onInputChange("description", value)}
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
                  selectedValue={state.team_leader_id}
                  // name="assign"
                  // id="assign"
                  onValueChange={(value) =>
                    onInputChange("team_leader_id", value)
                  }
                >
                  {" "}
                  <Picker.Item label="Team Leader ID" value="" />
                  {getUserlist.map((item, id) => {
                    return (
                      <React.Fragment key={id}>
                        <Picker.Item label={item.name} value={item.id} />
                      </React.Fragment>
                    );
                  })}
                </Picker>
                {errors.team_leader_id && (
                  <View>
                    {errors.team_leader_id.map((error) => (
                      <View key={error} style={styles.ErrorMsg}>
                        {" "}
                        {error}
                      </View>
                    ))}
                  </View>
                )}
              </View>
              {/* <DatePicker
                selected={state.start_date}
                onChange={(value) =>
                  onInputChange(
                    "start_date",
                    moment(value).format("DD-MM-YYYY")
                  )
                }
              />
              <DatePicker
                selected={state.end_date}
                onChange={(value) =>
                  onInputChange("end_date", moment(value).format("DD-MM-YYYY"))
                }
              /> */}{" "}
              {value === "update" ? (
                <View>
                  {" "}
                  <Picker
                    style={styles.picker}
                    selectedValue={state.status}
                    // name="status"
                    // id="status"
                    onValueChange={(value) => onInputChange("status", value)}
                  >
                    <Picker.Item label="Status" value="" />
                    <Picker.Item label="progress" value="progress" />
                    <Picker.Item label="Complete" value="complete" />
                    <Picker.Item label="pending" value="pending" />
                    <Picker.Item label="Cancelled" value="cancelled" />
                  </Picker>
                  {errors.name && (
                    <View>
                      {errors.name.map((error) => (
                        <View key={error} style={styles.ErrorMsg}>
                          {" "}
                          {error}
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              ) : null}
              <View style={styles.textBoxDivStyle}>
                <View>
                  {" "}
                  <TextInput
                    label="Start Date *"
                    name="start_date"
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
                    style={styles.TextBoxstyle}
                    value={state.end_date}
                    onChangeText={(text) => onInputChange("end_date", text)}
                  />
                  {errors.end_date && (
                    <View>
                      {errors.end_date.map((error) => (
                        <View key={error} style={styles.ErrorMsg}>
                          {" "}
                          {error}
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              </View>
            </View>
            {value === "update" ? (
              <Button mode="contained" onPress={handleUpdateProject}>
                Update Project
              </Button>
            ) : (
              <Button mode="contained" onPress={handleAddProject}>
                Add Project
              </Button>
            )}

            <Button
              mode="outlined"
              onPress={() => navigate.navigate("project")}
              style={{ marginTop: "10px" }}
            >
              Cancel
            </Button>
          </View>
        </View>
      </View>
    </Flex>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "10px",
    height: "calc(100vh - 145px)",
    padding: "10px",
    flexWrap: "wrap",
    overflow: "scroll",
    marginTop: 50,
    marginBottom: 50,
  },
  contentBody: {
    flex: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    marginTop: "100px",
  },
  textHead: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
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
    color: "rgba(73, 69, 79, 1)",
    appearance: "none",
    backgroundColor: "rgb(231,224,236)",
    borderRadius: 0,
    borderWidth: 0,
    boxSizing: "border-box",
    fontFamily: "System",
    fontSize: 14,
    margin: 0,
    padding: 0,
    resizeMode: "none",
    borderColor: "black",
  },
  textBoxDivStyle: {
    flexDirection: "row",

    justifyContent: "space-between",
  },
  TextBoxstyle: {
    width: "190px",
    margin: "2px",
  },
  ErrorMsg: {
    color: "red",
  },
});
export default AddProjectForm;
