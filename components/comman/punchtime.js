import React from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
const Punchtime = ({ data }) => {
  const targetTime = moment().set({
    hour: 9,
    minute: 45,
    second: 0,
    millisecond: 0,
  });
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>
          {data.date}
          <br />
          {data.status === "P" ? (
            <Text style={{ color: "green", fontSize: 12 }}> present</Text>
          ) : data.status === "L" ? (
            <Text style={{ color: "rgb(255 222 11)", fontSize: 12 }}>
              {" "}
              Late
            </Text>
          ) : data.status === "A" ||
            data.status === "CL" ||
            data.status === "ML" ? (
            <Text style={{ color: "red", fontSize: 12 }}>
              {data.status === "ML"
                ? "ML"
                : data.status === "CL"
                ? "CL"
                : "Absent"}
            </Text>
          ) : data.status === "HD" ? (
            <Text style={{ color: "blue", fontSize: 12 }}> Half Day</Text>
          ) : data.status === "WH" ? (
            <Text style={{ color: "green", fontSize: 12 }}> WFH</Text>
          ) : null}
        </Text>
        <View style={styles.timeContainer}>
          {data.in_time ? (
            moment(data.in_time).isAfter(targetTime) ? (
              <Text
                style={{
                  textAlign: "center",
                  color: "rgb(255 222 11)",
                  marginRight: 4,
                }}
              >
                {moment(data.in_time).format("HH:mm A")}
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
                {moment(data.in_time).format("HH:mm A")} <br />
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
          {data.out_time ? (
            <Text style={{ color: "green", marginRight: 4 }}>
              {moment(data.out_time).format("HH:mm A")}
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
export default Punchtime;
