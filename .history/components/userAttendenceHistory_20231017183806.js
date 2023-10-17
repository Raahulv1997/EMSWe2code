// Import necessary modules
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Flex } from "@react-native-material/core";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { GeUserAttendance } from "./Api/api";
import UserImage from "./comman/image";
import AttendenceStatus from "./comman/AttendenceStatus";
import Punchtime from "./comman/punchtime";
const UserAttendenceHistory = () => {
  const currentDate = new Date().toDateString();
  let [apiCall, setApiCall] = useState(false);
  const [count, setCount] = useState({
    present_count: 0,
    absent_count: 0,
    let_coming: 0,
  });
  const [attendanceList, setAttendanceList] = useState({
    date: "",
    punchIn: "",
    punchOut: "",
    status: "",
  });
  /*Get user id using redux */
  const userId = useSelector((state) => state.userId);
  const userGender = useSelector((state) => state.userGender);
  const userImage = useSelector((state) => state.userImage);
  const userName = useSelector((state) => state.userName);
  /*Function to get the user detail and its attendence history */
  const GetUserhistory = async () => {
    try {
      let res = await GeUserAttendance(userId);
      console.log(res);
      setCount(res.count);
      setAttendanceList(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetUserhistory();
    setApiCall(false);
  }, [apiCall]);
  return (
    <Flex style={styles.scrollcontainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <UserImage userGender={userGender} userImage={userImage} />
          <Text style={styles.username}>{userName}</Text>
          <Text style={styles.date}>{currentDate}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>
            <b>Present:</b> {count.present_count}
          </Text>
          <Text style={styles.cardText}>
            <b>Absent:</b> {count.absent_count}
          </Text>
          <Text style={styles.cardText}>
            <b>Late:</b> {count.let_coming}
          </Text>
        </View>
        <AttendenceStatus setApiCall={setApiCall} />
        <View style={styles.attendanceList}>
          {attendanceList.map((entry, index) => (
            <Punchtime data={entry} key={index} />
            // <View key={index} style={styles.attendanceItem}>
            //   <Text>
            //     {entry.date}
            //     <br />
            //     {entry.status}
            //   </Text>
            //   <Text>
            //     {entry.punchIn}
            //     <br />
            //     <Text style={{ color: "green" }}> In-time</Text>
            //   </Text>
            //   <Text>
            //     {entry.punchOut}
            //     <br />
            //     <Text style={{ color: "green" }}>Out-time</Text>
            //   </Text>
            // </View>
          ))}
        </View>
      </View>
    </Flex>
  );
};

const styles = StyleSheet.create({
  scrollcontainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "10px",
    height: "calc(100vh - 300px)",
    padding: "10px",
    flexWrap: "wrap",
    overflow: "scroll",
    marginTop: 100,
  },

  container: {
    flex: 1,
  },
  header: {
    marginBottom: 20,
    width: "100%",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  date: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  card: {
    backgroundColor: "rgb(223 223 223)",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    width: "100%",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },

  attendanceList: {},
  attendanceItem: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default UserAttendenceHistory;
