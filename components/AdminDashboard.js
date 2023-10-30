import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-paper";
import { PieChart } from "react-minimal-pie-chart";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GetAttandanceByMonthByAdmin, GetLeaveListByAdmin } from "./Api/api";
import moment from "moment";
const AdminDashboard = () => {
  let navigate = useNavigation();
  const [getAttandanceByMonth, setGetAttandanceByMonth] = useState({});
  const [totalUserCount, settotalUserCount] = useState("");
  const [LeaveList, setLeaveList] = useState([]);

  const getAttandanceByMonthFuntion = async () => {
    let currentonth = moment().format("YYYY-MM-DD");
    const response = await GetAttandanceByMonthByAdmin(currentonth);

    let { count, users_count } = response;

    setGetAttandanceByMonth(count);
    settotalUserCount(users_count);
  };

  const GetLeaveListFuntion = async () => {
    const response = await GetLeaveListByAdmin();

    let { leaves } = response;
    const filteredData = leaves.data.filter(
      (item) => item.status === "pending"
    );
    setLeaveList(filteredData || []);
  };

  useEffect(() => {
    getAttandanceByMonthFuntion();
    GetLeaveListFuntion();
  }, []);

  const data = [
    {
      title: "Work from Home",
      value: (getAttandanceByMonth.work_home_count / 100) * 100,
      color: "#afd584",
    },
    {
      title: "Present",
      value: (getAttandanceByMonth.present_count / 100) * 100,
      color: "#356966",
    },
    {
      title: "late comming",
      value: (getAttandanceByMonth.let_coming / 100) * 100,
      color: "#ffd831",
    },
  ];

  if (getAttandanceByMonth.absent_count > 0) {
    data.push({
      title: "Absent Count",
      value: (getAttandanceByMonth.absent_count / 100) * 100,
      color: "#DD2339",
    });
  }

  if (getAttandanceByMonth.half_day_count > 0) {
    data.push({
      title: "Half Day",
      value: (getAttandanceByMonth.half_day_count / 100) * 100,
      color: "#96a5be",
    });
  }

  if (getAttandanceByMonth.el_ml_ol_leave > 0) {
    data.push({
      title: "Leave",
      value: (getAttandanceByMonth.el_ml_ol_leave / 100) * 100,
      color: "#fa6950",
    });
  }

  if (getAttandanceByMonth.cl_leave > 0) {
    data.push({
      title: " Cl Leave",
      value: (getAttandanceByMonth.cl_leave / 100) * 100,
      color: "#eba283",
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium">Dashboard</Text>
      </View>

      <ScrollView vertical={true}>
        {" "}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.DasBoardSubDiv}
            onPress={() => navigate.navigate("attendance")}
          >
            <MaterialCommunityIcons
              name="account-clock-outline"
              size={60}
              color="white"
            />

            <Text style={styles.ButtonText}>Attendance</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.DasBoardSubDiv}
            onPress={() => navigate.navigate("project")}
          >
            <FontAwesome5 name="tasks" size={60} color="white" />
            <Text style={styles.ButtonText}>Task</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.DasBoardSubDiv}
            onPress={() => navigate.navigate("leaves")}
          >
            <MaterialIcons name="leave-bags-at-home" size={60} color="white" />
            <Text style={styles.ButtonText}>Leaves</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.DasBoardSubDiv}
            onPress={() => navigate.navigate("event")}
          >
            <MaterialIcons name="event" size={60} color="white" />
            <Text style={styles.ButtonText}>Events</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.PieCard}>
          <View style={styles.chartContainer}>
            <PieChart data={data} lineWidth={30} paddingAngle={3} />
            <Text style={styles.centerText}>
              <b>{totalUserCount}</b> <br />
              Total
            </Text>
          </View>

          <View style={styles.PieStudentName}>
            <View style={styles.PieStudentNameSubDiv}>
              {" "}
              <View
                style={{
                  height: "20px",
                  width: "6px",
                  backgroundColor: "#356966",
                  borderRadius: 20,
                  marginRight: "10px",
                  marginBottom: "5px",
                }}
              ></View>{" "}
              <Text style={styles.PieStudentNameColor}>Present :</Text>
              <Text style={styles.PieStudentNameColorValue}>
                {getAttandanceByMonth.present_count}
              </Text>
            </View>

            <View style={styles.PieStudentNameSubDiv}>
              {" "}
              <View
                style={{
                  height: "20px",
                  width: "6px",
                  backgroundColor: "#ffd831",
                  borderRadius: 20,
                  marginRight: "10px",
                  marginBottom: "5px",
                }}
              ></View>{" "}
              <Text style={styles.PieStudentNameColor}>Late :</Text>
              <Text style={styles.PieStudentNameColorValue}>
                {" "}
                {getAttandanceByMonth.let_coming}
              </Text>
            </View>

            <View style={styles.PieStudentNameSubDiv}>
              {" "}
              <View
                style={{
                  height: "20px",
                  width: "6px",
                  backgroundColor: "#afd584",
                  borderRadius: 20,
                  marginRight: "10px",
                  marginBottom: "5px",
                }}
              ></View>{" "}
              <Text style={styles.PieStudentNameColor}>WFH :</Text>
              <Text style={styles.PieStudentNameColorValue}>
                {" "}
                {getAttandanceByMonth.work_home_count}
              </Text>
            </View>
          </View>
          <View style={styles.PieStudentName}>
            {" "}
            {getAttandanceByMonth.absent_count > 0 ? (
              <View style={styles.PieStudentNameSubDiv}>
                {" "}
                <View
                  style={{
                    height: "20px",
                    width: "6px",
                    backgroundColor: "#DD2339",
                    borderRadius: 20,
                    marginRight: "10px",
                    marginBottom: "5px",
                  }}
                ></View>{" "}
                <Text style={styles.PieStudentNameColor}>Absent :</Text>
                <Text style={styles.PieStudentNameColorValue}>
                  {" "}
                  {getAttandanceByMonth.absent_count}
                </Text>
              </View>
            ) : null}
            {getAttandanceByMonth.half_day_count > 0 ? (
              <View style={styles.PieStudentNameSubDiv}>
                {" "}
                <View
                  style={{
                    height: "20px",
                    width: "6px",
                    backgroundColor: "#96a5be",
                    borderRadius: 20,
                    marginRight: "10px",
                    marginBottom: "5px",
                  }}
                ></View>{" "}
                <Text style={styles.PieStudentNameColor}>Half Day :</Text>
                <Text style={styles.PieStudentNameColorValue}>
                  {" "}
                  {getAttandanceByMonth.half_day_count}
                </Text>
              </View>
            ) : null}
            {getAttandanceByMonth.el_ml_ol_leave > 0 ? (
              <View style={styles.PieStudentNameSubDiv}>
                {" "}
                <View
                  style={{
                    height: "20px",
                    width: "6px",
                    backgroundColor: "#fa6950",
                    borderRadius: 20,
                    marginRight: "10px",
                    marginBottom: "5px",
                  }}
                ></View>{" "}
                <Text style={styles.PieStudentNameColor}>EL, ML, OL :</Text>
                <Text style={styles.PieStudentNameColorValue}>
                  {" "}
                  {getAttandanceByMonth.el_ml_ol_leave}
                </Text>
              </View>
            ) : null}
            {getAttandanceByMonth.cl_leave > 0 ? (
              <View style={styles.PieStudentNameSubDiv}>
                {" "}
                <View
                  style={{
                    height: "20px",
                    width: "6px",
                    backgroundColor: "#eba283",
                    borderRadius: 20,
                    marginRight: "10px",
                    marginBottom: "5px",
                  }}
                ></View>{" "}
                <Text style={styles.PieStudentNameColor}>CL :</Text>
                <Text style={styles.PieStudentNameColorValue}>
                  {" "}
                  {getAttandanceByMonth.cl_leave}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={{ marginTop: "20px" }}>
          <Text variant="titleLarge">Leave Request</Text>
        </View>
        {LeaveList.map((item, id) => {
          return (
            <React.Fragment key={id}>
              <View style={styles.LeaveCard}>
                <Text style={{ fontWeight: "bold" }}>
                  {item.user_id ? item.user_id.name : null}
                </Text>
                <Text>
                  {moment(item.start_date).format("DD-MMM")}
                  {"  To  " + moment(item.end_date).format("DD-MMM-YYYY")}
                </Text>
              </View>
            </React.Fragment>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default AdminDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "10px",
    marginLeft: "10px",
  },
  header: {
    marginTop: "100px",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  DasBoardSubDiv: {
    flex: 1,
    padding: 12,
    backgroundColor: "#f75c19",
    borderWidth: 3,
    borderRadius: "30px",
    borderColor: "#c7a191",
    width: Dimensions.get("window").width - 10,
    margin: 10,
    alignItems: "center",
    boxShadow: "0 0  10px rgba(0, 0, 0, 0.1)",
  },
  ButtonText: {
    fontWeight: "bold",
    marginTop: "4px",
    color: "white",
  },

  PieCard: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    margin: 5,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderColor: "#ccc",

    position: "relative",
    boxShadow: "0 0  10px rgba(0, 0, 0, 0.2)",
  },

  chartContainer: {
    alignItems: "center",
    width: "100px",
    height: "100px",
  },
  centerText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
    textAlign: "center",

    fontSize: 15,
  },

  PieStudentName: {
    margin: "15px",
  },

  PieStudentNameSubDiv: {
    flexDirection: "row",
  },

  PieStudentNameColor: {
    fontSize: "15px",
    color: "grey",
    fontWeight: "bolder",
  },

  PieStudentNameColorValue: {
    color: "black",
    fontWeight: "bold",
    marginLeft: "5px",
  },

  LeaveCard: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 30,
    padding: 14,
    margin: 5,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#ccc",

    position: "relative",
    boxShadow: "0 0  10px rgba(0, 0, 0, 0.2)",
  },
});
