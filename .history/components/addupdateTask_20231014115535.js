import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Picker } from "react-native";
import { TextInput } from "react-native-paper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AddTaskApi } from "./Api/api";
function AddUpdateTask({ id }) {
  initialFormState = {
    task_name: "",
    description: "",
    due_date: new Date(),
    assign: "",
    priority: "",
    status: "",
    project_id: id,
  };

  const validators = {
    task_name: [
      (value) =>
        value === "" || value.trim() === ""
          ? "Name is required"
          : /[-]?\d+(\.\d+)?/.test(value)
          ? "Name can not have a number."
          : value.length < 2
          ? "Name should have 2 or more letters"
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
    due_date: [(value) => (value === "" ? "Due Date is required" : null)],
    assign: [(value) => (value === "" ? "Assign by is required" : null)],
    priority: [
      (value) =>
        value === "" || value === null ? "Priority no is required" : null,
    ],
    status: [
      (value) =>
        value === "" || value.trim() === ""
          ? "Status is required"
          : value.length < 2
          ? "Status should have 2 or more letters"
          : "",
    ],
    // country: [
    //   (value) =>
    //     value === "" || value.trim() === ""
    //       ? "Country is required"
    //       : /[-]?\d+(\.\d+)?/.test(value)
    //       ? "Country can not have a number."
    //       : value.length < 2
    //       ? "Country should have 2 or more letters"
    //       : /[^A-Za-z 0-9]/g.test(value)
    //       ? "Cannot use special character "
    //       : "",
    // ],
    // state: [
    //   (value) =>
    //     value === "" || value.trim() === ""
    //       ? "State is required"
    //       : /[-]?\d+(\.\d+)?/.test(value)
    //       ? "State can not have a number."
    //       : value.length < 2
    //       ? "State should have 2 or more letters"
    //       : /[^A-Za-z 0-9]/g.test(value)
    //       ? "Cannot use special character "
    //       : "",
    // ],
    // city: [
    //   (value) =>
    //     value === "" || value.trim() === ""
    //       ? "City is required"
    //       : /[-]?\d+(\.\d+)?/.test(value)
    //       ? "City can not have a number."
    //       : value.length < 2
    //       ? "City should have 2 or more letters"
    //       : /[^A-Za-z 0-9]/g.test(value)
    //       ? "Cannot use special character "
    //       : "",
    // ],
  };
  // CUSTOM VALIDATIONS IMPORT
  const { state, setState, setErrors, onInputChange, errors, validate } =
    useValidation(initialFormState, validators);

  /*form Submit Function*/
  const handleSubmit = async () => {
    console.log(data);
    try {
      let res = await AddTaskApi(data);
      console.log(res);
    } catch (Err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.iconContainer}>
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={data.task_name}
          onChangeText={(text) => handleChange("task_name", text)}
          placeholder="Enter any task"
        />
        <Text>
          <DatePicker
            selected={data.due_date}
            onChangeText={(date) => handleChange("due_date", date)}
          />
        </Text>
      </View>

      <View style={styles.row}>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={data.assign}
            // name="assign"
            // id="assign"
            onValueChange={(value) => handleChange("assign", value)}
          >
            <Picker.Item label="assign" value="" />
            <Picker.Item value="1" label="Raj Sir" />
            <Picker.Item value="2" label="Niranter Sir" />
            <Picker.Item value="3" label="Nidhi" />
            <Picker.Item value="5" label="Aashi" />
            <Picker.Item value="6" label="HR" />
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={data.priority}
            // name="priority"
            // id="priority"
            onValueChange={(value) => handleChange("priority", value)}
          >
            <Picker.Item label="Priority" value="" />
            <Picker.Item label="High" value="High" />
            <Picker.Item label="Medium" value="Medium" />
            <Picker.Item label="Low" value="Low" />
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={data.status}
            // name="status"
            // id="status"
            onValueChange={(value) => handleChange("status", value)}
          >
            <Picker.Item label="Status" value="" />
            <Picker.Item label="Complete" value="complete" />
            <Picker.Item label="Working" value="working" />
            <Picker.Item label="Cancelled" value="cancelled" />
          </Picker>
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            value={data.description}
            onChangeText={(text) => handleChange("description", text)}
            placeholder="Enter description"
          />
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
          <Text style={styles.addButtonIcon}>+</Text>
          <Text style={styles.addButtonLabel}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconContainer: {
    backgroundColor: "blue",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  icon: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 10,
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
  },
  addButton: {
    backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  addButtonIcon: {
    color: "white",
    fontWeight: "bold",
    marginRight: 5,
  },
  addButtonLabel: {
    color: "white",
    fontWeight: "bold",
  },
});

export default AddUpdateTask;
