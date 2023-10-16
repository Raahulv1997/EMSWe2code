import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Picker } from "react-native";
import { TextInput, Button } from "react-native-paper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddUpdateTask() {
  const initialvalues = {
    taskName: "",
    description: "",
    dueDate: new Date(),
    assign: "",
    priority: "",
    status: "",
  };

  const [data, setData] = useState(initialvalues);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleChange = (inputName, inputValue) => {
    setData({ ...data, [inputName]: inputValue });
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate !== undefined) {
      handleChange("dueDate", selectedDate);
    }
  };

  const handleSubmit = () => {
    console.log("data-----" + JSON.stringify(data));
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.iconContainer}>
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={data.taskName}
          onChangeText={(text) => handleChange("taskName", text)}
          placeholder="Enter any task"
        />
        <Text>
          <DatePicker
            selected={data.dueDate}
            onChangeText={(date) => handleChange("dueDate", date)}
          />
        </Text>
      </View>

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={data.assign}
          onChangeText={(text) => handleChange("assign", text)}
          placeholder="Assign"
        />
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
    // borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    paddingHorizontal: 10, // Add some padding to the picker container
  },
  picker: {
    fontSize: 12,
    height: 40, // Set a fixed height for the picker
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
