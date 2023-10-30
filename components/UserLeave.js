import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { GetLeaveByUser } from "./Api/api";

export const UserLeave = () => {
  let navigate = useNavigation();

  const [getLeaveCount, setLeaveCount] = useState({});
  const [getLeaveHistory, setLeaveHistory] = useState([]);
  const getLeaveDataFuntion = async () => {
    const response = await GetLeaveByUser();
    let { leaves, count } = response;
    setLeaveCount(count || {});
    console.log("res--" + JSON.stringify(leaves.data));
    setLeaveHistory(leaves.data || []);
  };

  useEffect(
    React.useCallback(() => {
      const unsubscribe = navigate.addListener("focus", () => {
        getLeaveDataFuntion();
      });

      return unsubscribe;
    }, [navigate])
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium">Leaves</Text>
        <Button
          mode="outlined"
          onPress={() => navigate.navigate("addleaveform")}
        >
          + Add Leave
        </Button>
      </View>

      <ScrollView vertical={true}>
        <View style={styles.Card}>
          <View>
            <Text style={{ fontWeight: "bold" }}>
              {moment().format("MMMM,YYYY")}
            </Text>
          </View>

          <View style={styles.presentCount}>
            <View style={styles.presentCountNumber}>
              {" "}
              <Text
                style={{
                  marginLeft: "28px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {getLeaveCount.approved_count}
              </Text>{" "}
              <Text style={{ fontWeight: "bold" }}>Approved</Text>
            </View>
            <View style={styles.presentCountNumber}>
              {" "}
              <Text
                style={{
                  marginLeft: "25px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {getLeaveCount.rejected_count}
              </Text>{" "}
              <Text style={{ fontWeight: "bold" }}>Rejected</Text>
            </View>
            <View style={styles.presentCountNumber}>
              {" "}
              <Text
                style={{
                  marginLeft: "28px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {getLeaveCount.pending_count}
              </Text>{" "}
              <Text style={{ fontWeight: "bold" }}>Processing</Text>
            </View>
          </View>
        </View>
        <Text variant="headlineSmall" style={{ marginTop: "20px" }}>
          Leaves History
        </Text>
        {getLeaveHistory.map((item, id) => {
          return (
            <React.Fragment key={id}>
              <View style={styles.MonthCard}>
                <View style={styles.LeaveUserName}>
                  <Text style={{ fontWeight: "bold" }}>
                    {item.user_id ? item.user_id.name : "Unavailable"}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      backgroundColor:
                        item.status === "pending"
                          ? "#b4dcfa"
                          : item.status === "rejected"
                          ? "#f7bdbc"
                          : item.status === "approved"
                          ? "#bff2c8"
                          : "#b4dcfa",
                      padding: "3px",
                      borderRadius: 5,

                      color:
                        item.status === "pending"
                          ? "#0a5994"
                          : item.status === "rejected"
                          ? "#c91006"
                          : item.status === "approved"
                          ? "#186602"
                          : "#0a5994",
                    }}
                  >
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </Text>
                </View>

                <View style={styles.LeaveUserName}>
                  <Text style={styles.dates}>
                    {moment(item.start_date).format("DD MMM")}{" "}
                    {"to " + moment(item.end_date).format("DD,MMM,YY")}
                  </Text>
                  <Text style={{ fontWeight: "bold", color: "#075919" }}>
                    {item.leave_type}
                  </Text>
                </View>

                <View style={styles.LeaveUserName}>
                  <Text>{item.reason}</Text>
                </View>
              </View>
            </React.Fragment>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, // Remove quotes and "px"
    marginLeft: 10, // Remove quotes and "px"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "100px",
    width: "100%",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  ErrorMsg: {
    color: "red",
  },
  userName: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "20px",
    marginBottom: "10px",
  },

  Card: {
    backgroundColor: "#d4d4d4",
    borderWidth: 1,
    borderRadius: 5,
    padding: 14,
    margin: 5,
    overflow: "hidden",

    borderColor: "#ccc",

    position: "relative",
  },
  presentCount: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  presentCountNumber: {
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: "20px",
    marginRight: "30px",
  },
  PucnBattonParent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "15px",
  },
  Monthname: {
    marginTop: "20px",
  },

  MonthCard: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 14,
    margin: 5,
    overflow: "hidden",

    borderColor: "#ccc",

    position: "relative",
    boxShadow: "0 0  5px rgba(0, 0, 0, 0.2)",
  },

  MonthTimeNumber: {
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
  },

  LeaveUserName: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5px",
  },

  dates: {
    fontSize: 12,
    backgroundColor: "white",
    color: "#05b0a7",
    padding: "4px",

    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#05b0a7",
  },
});
