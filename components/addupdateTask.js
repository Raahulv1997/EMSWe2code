import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from "react-native";

function AddUpdateTask() {
  return (
    <View style={styles.row}>
      <View style={styles.cell}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>+</Text>
        </View>
      </View>
      <View style={styles.cell}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="input-rounded"
          />
        </View>
      </View>
      <View style={styles.cell}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="date"
            type="date"
          />
        </View>
      </View>
      <View style={styles.cell}>
        <View style={styles.pickerContainer}>
          <Picker style={styles.picker}>
            <Picker.Item label="Assign" value="" />
            <Picker.Item label="Raj Patidar" value="Raj Patidar" />
            <Picker.Item label="Chetan B" value="Chetan B" />
            <Picker.Item label="Rohit P" value="Rohit P" />
          </Picker>
        </View>
      </View>
      <View style={styles.cell}>
        <View style={styles.pickerContainer}>
          <Picker style={styles.picker}>
            <Picker.Item label="Priority" value="" />
            <Picker.Item label="High" value="High" />
            <Picker.Item label="Medium" value="Medium" />
            <Picker.Item label="Low" value="Low" />
          </Picker>
        </View>
      </View>
      <View style={styles.cell} colSpan={2}>
        <TouchableOpacity style={styles.addButton}>
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
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: "gray",
    width: "100%",
    padding: 5,
  },
  input: {
    fontSize: 14,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    width: "100%",
    padding: 5,
  },
  picker: {
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
