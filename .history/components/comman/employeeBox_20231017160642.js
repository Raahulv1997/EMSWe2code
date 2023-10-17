import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
const EmployeeBox = ({ employee }) => {
  let navigate = useNavigation();
  let Attendance = employee.attendance[0] || "";
  const targetTime = moment().set({
    hour: 9,
    minute: 45,
    second: 0,
    millisecond: 0,
  });
  return (
    <TouchableOpacity
      onPress={() => navigate.navigate("userattendancehistory")}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: employee.image
                ? employee.image
                : employee.gender === "female"
                ? "https://tse2.mm.bing.net/th?id=OIP.inXSw5jbycIIlXC1dIXdiwHaIL&pid=Api&P=0&w=300&h=300"
                : "https://tse3.mm.bing.net/th?id=OIP.Lpx9j83qR_cfQuaPHuvwWQHaHw&pid=Api&P=0&h=220",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>
            {employee.name}
            <br />
            {Attendance.status === "P" ? (
              <Text style={{ color: "green", fontSize: 12 }}> present</Text>
            ) : Attendance.status === "L" ? (
              <Text style={{ color: "rgb(255 222 11", fontSize: 12 }}>
                {" "}
                Late
              </Text>
            ) : Attendance.status === "A" ||
              Attendance.status === "CL" ||
              Attendance.status === "ML" ? (
              <Text style={{ color: "red", fontSize: 12 }}>
                {Attendance.status === "ML"
                  ? "ML"
                  : Attendance.status === "CL"
                  ? "CL"
                  : "Absent"}
              </Text>
            ) : Attendance.status === "HD" ? (
              <Text style={{ color: "blue", fontSize: 12 }}> Half Day</Text>
            ) : Attendance.status === "WH" ? (
              <Text style={{ color: "green", fontSize: 12 }}> WFH</Text>
            ) : null}
          </Text>
          <View style={styles.timeContainer}>
            {Attendance.in_time ? (
              moment(Attendance.in_time).isAfter(targetTime) ? (
                <Text
                  style={{
                    textAlign: "center",
                    color: "rgb(255 222 11",
                    marginRight: 4,
                  }}
                >
                  {moment(Attendance.in_time).format("HH:mm A")}
                  <br />
                  Late coming
                </Text>
              ) : (
                <Text
                  style={{
                    textAlign: "center",
                    color: "green",
                    marginRight: 4,
                  }}
                >
                  {moment(Attendance.in_time).format("HH:mm A")} <br />
                  In-Time
                </Text>
              )
            ) : (
              <Text style={{ textAlign: "center", marginRight: 4 }}>
                ??
                <br />
                In-Time
              </Text>
            )}
            {Attendance.out_time ? (
              <Text style={{ color: "green", marginRight: 4 }}>
                {moment(Attendance.out_time).format("HH:mm A")}
                <br />
                Out-Time
              </Text>
            ) : (
              <Text style={{ textAlign: "center", marginRight: 4 }}>
                ??
                <br />
                Out-Time
              </Text>
            )}
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
    justifyContent: "space-around",
    // marginBottom: 5,
    // margin: 5,
  },
});

export default EmployeeBox;
