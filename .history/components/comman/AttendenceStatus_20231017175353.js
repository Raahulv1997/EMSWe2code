import React from "react";
import { View, TouchableOpacity } from "react-native";

const AttendenceStatus = () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          borderRadius: 5,
          marginTop: 2,
        }}
      >
        <Text style={styles.optionButtonText}>Present</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          padding: 10,
          borderRadius: 5,
          marginTop: 2,
        }}
      >
        <Text style={styles.optionButtonText}>Absent</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "rgb(255 222 11)",
          padding: 10,
          borderRadius: 5,
          marginTop: 2,
        }}
      >
        <Text style={styles.optionButtonText}>Late</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 5,
          marginTop: 2,
        }}
      >
        <Text style={styles.optionButtonText}>Half Day</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          borderRadius: 5,
          marginTop: 2,
        }}
      >
        <Text style={styles.optionButtonText}>WFH</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          padding: 10,
          borderRadius: 5,
          marginTop: 2,
        }}
      >
        <Text style={styles.optionButtonText}>CL</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          padding: 10,
          borderRadius: 5,
          marginTop: 2,
        }}
      >
        <Text style={styles.optionButtonText}>EL</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  optionButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 2,
  },
  optionButtonText: {
    color: "white",
    fontSize: 16,
  },
});
export default AttendenceStatus;
