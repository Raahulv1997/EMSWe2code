// AddProjectForm.js
import React from "react";
import { View, Picker } from "react-native";
import { TextInput, Button } from "react-native-paper";
import useValidation from "../comman/UseValidaion";
import { useNavigation } from "@react-navigation/native";
import { AddProjectApi } from "../Api/api";
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
        // style={styles.picker}
        selectedValue={state.team_leader_id}
        // name="assign"
        // id="assign"
        onValueChange={(value) => onInputChange("team_leader_id", value)}
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
      <Button mode="outlined" onPress={() => navigate.navigate("project")}>
        Cancel
      </Button>
    </View>
  );
};

export default AddProjectForm;
