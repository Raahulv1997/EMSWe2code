import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

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
    <View style={styles.row}>
      <View style={styles.cell}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>+</Text>
        </View>
      </View>
      <View style={styles.cell}>
        <TextInput
          style={styles.input}
          value={data.taskName}
          onChangeText={(text) => handleChange("taskName", text)}
          placeholder="Enter any task"
        />
      </View>
      <View style={styles.cell}>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text>{data.dueDate.toISOString().split("T")[0]}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={data.dueDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>
      <View style={styles.cell}>
        <TextInput
          style={styles.input}
          value={data.assign}
          onChangeText={(text) => handleChange("assign", text)}
          placeholder="Assign"
        />
      </View>
      <View style={styles.cell}>
        <TextInput
          style={styles.input}
          value={data.priority}
          onChangeText={(text) => handleChange("priority", text)}
          placeholder="Priority"
        />
      </View>
      <View style={styles.cell}>
        <TextInput
          style={styles.input}
          value={data.status}
          onChangeText={(text) => handleChange("status", text)}
          placeholder="Status"
        />
      </View>
      <View style={styles.cell} colSpan={2}>
        <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
          <Text style={styles.addButtonIcon}>+</Text>
          <Text style={styles.addButtonLabel}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  cell: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "blue",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    width: 150,
    height: 40,
    fontSize: 14,
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
