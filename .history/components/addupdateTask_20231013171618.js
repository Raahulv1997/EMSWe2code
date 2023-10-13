import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import DatePicker from "react-datepicker";
import RNPickerSelect from "react-native-picker-select";
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
    <View style={styles.row}>
      {/* ... other components ... */}
      <View style={styles.cell}>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(value) => handleChange("priority", value)}
            items={[
              { label: "Priority", value: "" },
              { label: "High", value: "High" },
              { label: "Medium", value: "Medium" },
              { label: "Low", value: "Low" },
            ]}
          />
        </View>
      </View>
      <View style={styles.cell}>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={(value) => handleChange("status", value)}
            items={[
              { label: "Status", value: "" },
              { label: "Complete", value: "complete" },
              { label: "Working", value: "working" },
              { label: "Cancelled", value: "cancelled" },
            ]}
          />
        </View>
      </View>
      {/* ... other components ... */}
    </View>
  );
}

// The rest of your code remains the same
