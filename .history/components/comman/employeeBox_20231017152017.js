import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
const EmployeeBox = ({ employee }) => {
  let navigate = useNavigation();
  let Attendance = employee.attendance[0];
  return (
    <TouchableOpacity
      onPress={() => navigate.navigate("userattendancehistory")}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: employee
                ? employee.image
                : "https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0&h=220",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>
            {employee.name}
            <br />
            {Attendance.status === "P" ? (
              <Text style={{ color: "green", fontSize: 10 }}> present</Text>
            ) : Attendance.status === "L" ? (
              <Text style={{ color: "yellow", fontSize: 10 }}> Late</Text>
            ) : Attendance.status === "A" ||
              Attendance.status === "CL" ||
              Attendance.status === "ML" ? (
              <Text style={{ color: "red", fontSize: 10 }}>
                {Attendance.status === "ML"
                  ? "ML"
                  : Attendance.status === "CL"
                  ? "CL"
                  : "Absent"}
              </Text>
            ) : Attendance.status === "HD" ? (
              <Text style={{ color: "blue", fontSize: 10 }}> Half Day</Text>
            ) : Attendance.status === "WH" ? (
              <Text style={{ color: "green", fontSize: 10 }}> WFH</Text>
            ) : null}
          </Text>
          <View style={styles.timeContainer}>
            <Text style={{ color: "green" }}>
              <br />
              {moment(Attendance.in_time).isAfter("2023-10-17 09:45:00") ? (
                <Text style={{ color: "yellow" }}>Late coming</Text>
              ) : (
                <Text style={{ color: "green" }}>In-Time</Text>
              )}
            </Text>
            <Text style={{ color: "green" }}> 7.00 pm</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 10,
  },
  imageContainer: {
    borderRadius: 25,
    overflow: "hidden",
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    // marginBottom: 5,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});

export default EmployeeBox;