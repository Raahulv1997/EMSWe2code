// AddProjectForm.js
import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import useValidation from "../comman/UseValidaion";
const AddProjectForm = () => {
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
        value === "" || value.trim() === ""
          ? "Status is required"
          : value.length < 2
          ? "Status should have 2 or more letters"
          : "",
    ],
  };
  // CUSTOM VALIDATIONS IMPORT
  const { state, setState, setErrors, onInputChange, errors, validate } =
    useValidation(initialFormState, validators);

  const handleAddProject = () => {
    // Add code to handle submitting the form
    // You can send the formData to your backend or perform any other actions here
  };

  const handleCancel = () => {
    // Add code to handle cancel button press
  };

  return (
    <View>
      <TextInput
        label="Project Name"
        value={formData.project_name}
        onChangeText={(value) => handleInputChange("project_name", value)}
      />
      <TextInput
        label="Description"
        value={formData.description}
        onChangeText={(value) => handleInputChange("description", value)}
      />
      <TextInput
        label="Team Leader ID"
        value={formData.team_leader_id}
        onChangeText={(value) => handleInputChange("team_leader_id", value)}
      />
      <TextInput
        label="Start Date"
        value={formData.start_date}
        onChangeText={(value) => handleInputChange("start_date", value)}
      />
      <TextInput
        label="End Date"
        value={formData.end_date}
        onChangeText={(value) => handleInputChange("end_date", value)}
      />
      <TextInput
        label="Status"
        value={formData.status}
        onChangeText={(value) => handleInputChange("status", value)}
      />
      <Button mode="contained" onPress={handleAddProject}>
        Add Project
      </Button>
      <Button mode="outlined" onPress={handleCancel}>
        Cancel
      </Button>
    </View>
  );
};

export default AddProjectForm;
