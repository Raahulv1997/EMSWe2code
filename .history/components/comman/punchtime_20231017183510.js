import React from 'react'
const Punchtime =() =>{
  return (
    <View style={styles.infoContainer}>
    <Text style={styles.name}>
      {employee.name}
      <br />
      {Attendance.status === "P" ? (
        <Text style={{ color: "green", fontSize: 12 }}> present</Text>
      ) : Attendance.status === "L" ? (
        <Text style={{ color: "rgb(255 222 11)", fontSize: 12 }}>
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
              color: "rgb(255 222 11)",
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
  )
}
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
export default function Punchtime;