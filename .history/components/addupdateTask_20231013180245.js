import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Picker } from "react-native";
import { TextInput, Button } from "react-native-paper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddUpdateTask({ initialvalues }) {
  const [data, setData] = useState(
    initialvalues || {
      task_name: "",
      description: "",
      due_date: new Date(),
      assign: "",
      priority: "",
      status: "",
      project_id: "",
    }
  );

  /*Onchangr Function */
  const handleChange = (inputName, inputValue) => {
    setData({ ...data, [inputName]: inputValue });
  };

  /*form Submit Function*/
  const handleSubmit = () => {
    console.log(data);
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
            name="assign"
            id="assign"
            onValueChange={(value) => handleChange("assign", value)}
          >
            <Picker.Item label="assign" value="" />
            <Picker.Item label="1" value="Raj Sir" />
            <Picker.Item label="2" value="Niranter Sir" />
            <Picker.Item label="3" value="Nidhi" />
            <Picker.Item label="5" value="Aashi" />
            <Picker.Item label="6" value="HR" />
          </Picker>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={data.priority}
            name="priority"
            id="priority"
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
            name="status"
            id="status"
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
