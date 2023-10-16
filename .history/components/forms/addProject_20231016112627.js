// AddProjectForm.js
import React from "react";
import { View, Picker, StyleSheet, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import useValidation from "../comman/UseValidaion";
import { useNavigation } from "@react-navigation/native";
import { AddProjectApi } from "../Api/api";
import { Flex } from "@react-native-material/core";
const AddProjectForm = () => {
  let navigate = useNavigation();
  let initialFormState = {
    project_name: "",
    description: "",
    team_leader_id: "",
    start_date: "",
    end_date: "",
    status: "",
  };
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
    start_date: [
      (value) => (value === "" ? "Start date by is required" : null),
    ],
    end_date: [
      (value) =>
        value === "" || value === null ? "End date no is required" : null,
    ],
    status: [
      (value) =>
        value === "" || value.trim() === "" ? "Status is required" : "",
    ],
  };
  // CUSTOM VALIDATIONS IMPORT
  const { state, setState, setErrors, onInputChange, errors, validate } =
    useValidation(initialFormState, validators);

  /*Function to add peoject */
  const handleAddProject = async () => {
    console.log(state);
    if (validate()) {
      try {
        let res = await AddProjectApi(state);
        console.log(res);
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
            <Text style={styles.heading}>Add Project</Text>
            <View>
              <TextInput
                label="Project Name"
                value={state.project_name}
                onChangeText={(value) => onInputChange("project_name", value)}
              />
              <TextInput
                label="Description"
                value={state.description}
                onChangeText={(value) => onInputChange("description", value)}
              />
              <Picker
                style={styles.picker}
                selectedValue={state.team_leader_id}
                // name="assign"
                // id="assign"
                onValueChange={(value) =>
                  onInputChange("team_leader_id", value)
                }
              >
                <Picker.Item label="Team Leader ID" value="" />
                <Picker.Item value="1" label="Raj Sir" />
                <Picker.Item value="2" label="Niranter Sir" />
                <Picker.Item value="3" label="Nidhi" />
                <Picker.Item value="5" label="Aashi" />
                <Picker.Item value="6" label="HR" />
              </Picker>
              <TextInput
                label="Start Date"
                value={state.start_date}
                onChangeText={(value) => onInputChange("start_date", value)}
              />
              <TextInput
                label="End Date"
                value={state.end_date}
                onChangeText={(value) => onInputChange("end_date", value)}
              />
              <TextInput
                label="Status"
                value={state.status}
                onChangeText={(value) => onInputChange("status", value)}
              />
              <Button mode="contained" onPress={handleAddProject}>
                Add Project
              </Button>
              <Button
                mode="outlined"
                onPress={() => navigate.navigate("project")}
              >
                Cancel
              </Button>
            </View>
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
    height: "calc(100vh - 200px)",
    padding: "10px",
    flexWrap: "wrap",
    overflow: "scroll",
  },
  contentBody: {
    flex: 1,
    padding: 10,
  },
  container: {
    flex: 1,
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
    color: "black",
    appearance: "none", // No direct equivalent in React Native
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderRadius: 0,
    borderWidth: 0, // Equivalent to border: 0px solid black
    boxSizing: "border-box", // Not applicable in React Native
    fontFamily: "System", // Font name may vary based on platform
    fontSize: 14,
    margin: 0,
    padding: 0,
    resizeMode: "none", //
  },
});
export default AddProjectForm;
