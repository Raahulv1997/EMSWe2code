import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ChangAttendanceStatus } from "../Api/api";
import moment from "moment";
const AttendenceStatus = ({ userId }) => {
  let date = moment(new Date()).format("YYYY-MM-DD");
  /*Function to se the Status */
  const MarkAttendenc = async (status) => {
    try {
      let res = await ChangAttendanceStatus(userId, date, status);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          padding: 10,
          borderRadius: 5,
          marginTop: 2,
        }}
        onPress={() => MarkAttendenc("P")}
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
        onPress={() => MarkAttendenc("A")}
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
        onPress={() => MarkAttendenc("L")}
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
        onPress={() => MarkAttendenc("HD")}
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
        onPress={() => MarkAttendenc("WH")}
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
        onPress={() => MarkAttendenc("CL")}
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
        onPress={() => MarkAttendenc("ML")}
      >
        <Text style={styles.optionButtonText}>EL/ML</Text>
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
