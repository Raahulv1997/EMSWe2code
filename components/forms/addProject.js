// AddProjectForm.js
import React from "react";
import { View, Picker, StyleSheet, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import useValidation from "../comman/UseValidaion";
import { useNavigation } from "@react-navigation/native";
import { AddProjectApi } from "../Api/api";
import { Flex } from "@react-native-material/core";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import moment from "moment";
const AddProjectForm = () => {
  let navigate = useNavigation();
  let initialFormState = {
    project_name: "",
    description: "",
    team_leader_id: "",
    start_date: "2023-10-01",
    end_date: "2023-10-31",
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
    if (validate()) {
      try {
        let res = await AddProjectApi(state);
        if (res.message === "Project Created.") {
          navigate.navigate("project");
          // Toast.show({
          //   type: "success",
          //   position: "top",
          //   text1: "Project Created successfully",
          // });
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
            <Text style={styles.heading}>Add Project</Text>
            <View style={{ marginBottom: "10px" }}>
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
              <Picker
                style={styles.picker}
                selectedValue={state.status}
                // name="status"
                // id="status"
                onValueChange={(value) => onInputChange("status", value)}
              >
                <Picker.Item label="Status" value="" />
                <Picker.Item label="Complete" value="complete" />
                <Picker.Item label="Working" value="working" />
                <Picker.Item label="Cancelled" value="cancelled" />
              </Picker>
            </View>
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
    marginTop: 50,
    marginBottom: 50,
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
    color: "rgba(73, 69, 79, 1)",
    appearance: "none",
    backgroundColor: "rgba(0, 0, 0, 0)",
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
});
export default AddProjectForm;
