import { Flex } from "@react-native-material/core";
import moment from "moment";
import React, { useEffect, useState } from "react";

import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
import { getAttendanceHistoryUser, getAttendanceStatus } from "./Api/api";
import PaunchAlert from "./comman/PaunchAlert";
import PunchStatus from "./comman/PunchStatus";
import PunchTimeCheck from "./comman/PunchTimeCheck";
export const UserDashboard = () => {
  var CurrrentDAta;

  const [attendanceCount, setAttendanceCount] = useState({});
  const [isPunchAlert, setPunchAlert] = useState(false);
  const [apicall, setapicall] = useState(false);

  const [punchID, setPunchID] = useState("");
  const [punchName, setPunchName] = useState("");
  const [getAttendanceHistory, setAttendanceHistory] = useState([]);
  const [attendanceStatus, setAttendanceCountStatus] = useState({});

  const getAttendanceFuntion = async () => {
    try {
      const response = await getAttendanceHistoryUser();
      let { attendance, count, event } = response;

      setAttendanceCount(count);
      setAttendanceHistory(attendance.data || []);
      setapicall(false);
    } catch (error) {
      console.error("Error getting attendance data:", error);
    }
  };

  const getAttendanceStatusFuntion = async () => {
    const response = await getAttendanceStatus();
    let { attendance } = response;
    console.log("ddd" + JSON.stringify(attendance));
    setPunchID(attendance.id);
    setAttendanceCountStatus(attendance || []);
    setapicall(false);
  };

  useEffect(() => {
    getAttendanceFuntion();
    getAttendanceStatusFuntion();
  }, [apicall]);

  const PuchInConditionFuntion = (currentTime) => {
    const targetTime = moment().set({ hour: 9, minute: 45, second: 0 });
    const allowTime = moment().set({ hour: 9, minute: 30, second: 0 });

    const punchTimeMoment = moment(currentTime, "hh:mm a");

    if (
      punchTimeMoment.isBefore(targetTime) &&
      punchTimeMoment.isAfter(allowTime)
    ) {
      return "in-time";
    } else {
      return "out-time";
    }
  };

  const PuchOutConditionFuntion = (currentTime) => {
    const allowTime = moment().set({ hours: 18, minutes: 0, seconds: 0 });

    // let currentTime = moment().format("hh:mm A");
    const punchTimeMoment = moment(currentTime, "hh:mm A");

    if (punchTimeMoment.isAfter(allowTime)) {
      return "punch-out";
    } else {
      return "out-time";
    }
  };

  const punchInFuntion = () => {
    setPunchAlert(true);
    setPunchID("");
    setPunchName("Punch In");
  };

  const punchOutFuntion = () => {
    setPunchAlert(true);

    setPunchName("Punch Out");
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text variant="headlineMedium">Dashboard</Text>
        </View>
        <ScrollView vertical={true}>
          <View style={styles.userName}>
            <Text style={{ fontWeight: "bold" }} variant="titleMedium">
              Rahul verma
            </Text>
            <Text>
              {moment().utcOffset("+05:30").format("DD,MMM,YY")}{" "}
              <Text style={{ fontWeight: "bold" }}> Today</Text>{" "}
            </Text>
          </View>
          <View style={styles.Card}>
            <View>
              <Text style={{ fontWeight: "bold" }}>
                {moment().utcOffset("+05:30").format("MMM,YYYY")}
              </Text>
            </View>

            <View style={styles.presentCount}>
              <View style={styles.presentCountNumber}>
                {" "}
                <Text
                  style={{
                    marginLeft: "20px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {attendanceCount.present_count}
                </Text>{" "}
                <Text style={{ fontWeight: "bold" }}>Present</Text>
              </View>
              <View style={styles.presentCountNumber}>
                {" "}
                <Text
                  style={{
                    marginLeft: "10px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {attendanceCount.let_coming}
                </Text>{" "}
                <Text style={{ fontWeight: "bold" }}>Late</Text>
              </View>
              <View style={styles.presentCountNumber}>
                {" "}
                <Text
                  style={{
                    marginLeft: "20px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {attendanceCount.absent_count}
                </Text>{" "}
                <Text style={{ fontWeight: "bold" }}>Absent</Text>
              </View>
            </View>
          </View>
          <View style={styles.PucnBattonParent}>
            <TouchableOpacity
              style={{
                // backgroundColor:
                //   PuchInConditionFuntion(moment()) === "out-time"
                //     ? "#c7d6c7"
                //     : "#03a33b",
                backgroundColor:
                  PuchInConditionFuntion(moment()) === "ou-time"
                    ? "#c7d6c7"
                    : "#03a33b",
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                margin: "0px 15px 0px 15px",
                overflow: "hidden",

                borderColor: "#ccc",
              }}
              // disabled={
              //   PuchInConditionFuntion(moment()) === "out-time"
              //     ? true
              //     : attendanceStatus.in_time !== null
              //     ? true
              //     : false
              // }
              disabled={
                PuchInConditionFuntion(moment()) === "ou-time"
                  ? true
                  : attendanceStatus.in_time === null
                  ? true
                  : false
              }
              onPress={() => {
                punchInFuntion();
              }}
            >
              <Text style={{ fontSize: "18px", fontWeight: "bold" }}>
                {" "}
                Punch In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                // backgroundColor:
                //   PuchOutConditionFuntion(moment()) === "out-time"
                //     ? "#f0e1df"
                //     : attendanceStatus.out_time !== null
                //     ? "#f0e1df"
                //     : "#f7513b",
                backgroundColor:
                  PuchOutConditionFuntion(moment()) === "ou-time"
                    ? "#f0e1df"
                    : attendanceStatus.out_time === null
                    ? "#f0e1df"
                    : "#f7513b",
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                margin: "0px 15px 0px 15px",
                overflow: "hidden",

                borderColor: "#ccc",
              }}
              // disabled={
              //   PuchOutConditionFuntion(moment()) === "out-time"
              //     ? true
              //     : attendanceStatus.out_time !== null
              //     ? true
              //     : false
              // }
              disabled={
                PuchOutConditionFuntion(moment()) === "ou-time"
                  ? true
                  : attendanceStatus.out_time === null
                  ? true
                  : false
              }
              onPress={() => {
                punchOutFuntion();
              }}
            >
              <Text style={{ fontSize: "18px", fontWeight: "bold" }}>
                {" "}
                Punch Out
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View>
              <View style={styles.Monthname}></View>
              {getAttendanceHistory.map((item) => {
                var isMonthShow = false;

                if (CurrrentDAta != moment(item.date).format("MMM,YY")) {
                  isMonthShow = true;
                  CurrrentDAta = moment(item.date).format("MMM,YY");
                }
                return (
                  <>
                    <Text style={{ fontWeight: "bold" }} variant="titleMedium">
                      {isMonthShow === true ? CurrrentDAta : null}
                    </Text>
                    <View style={styles.MonthCard}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        {" "}
                        {/* <Text
                        style={{
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        {moment(item.date).format("DD,MMM,YY")}
                      </Text> */}
                        <View style={styles.MonthTimeNumber}>
                          {" "}
                          <Text
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              marginLeft: item.date !== null ? "10px" : "25px",
                            }}
                          >
                            {moment(item.date).format("DD MMM,YYYY")}
                          </Text>{" "}
                          <Text>
                            {" "}
                            {item.in_time !== null && item.out_time !== null ? (
                              <PunchStatus
                                punchTime={moment(item.in_time).format(
                                  "hh:mm A"
                                )}
                              />
                            ) : (
                              " "
                            )}
                          </Text>
                        </View>
                        <View style={styles.MonthTimeNumber}>
                          {" "}
                          <Text
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              marginLeft:
                                item.in_time !== null ? "10px" : "25px",
                            }}
                          >
                            {item.in_time !== null
                              ? moment(item.in_time).format("hh:mm A")
                              : "?"}
                          </Text>{" "}
                          <Text>
                            {" "}
                            {item.in_time !== null ? (
                              <PunchTimeCheck
                                punchTime={moment(item.in_time).format(
                                  "hh:mm A"
                                )}
                              />
                            ) : (
                              " In-time"
                            )}
                          </Text>
                        </View>
                        <View style={styles.MonthTimeNumber}>
                          {" "}
                          <Text
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              marginLeft:
                                item.out_time !== null ? "20px" : "40px",
                            }}
                          >
                            {item.out_time !== null
                              ? moment(item.out_time).format("hh:mm A")
                              : "?"}
                          </Text>{" "}
                          <Text
                            style={{
                              marginLeft:
                                item.out_time !== null ? "25px" : "20px",
                              color: item.out_time !== null ? "green" : "black",
                            }}
                          >
                            Out-Time
                          </Text>
                        </View>
                      </View>
                    </View>
                  </>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
      <PaunchAlert
        isPunchAlert={isPunchAlert}
        setPunchAlert={setPunchAlert}
        punchID={punchID}
        punchName={punchName}
        setapicall={setapicall}
      />
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, // Remove quotes and "px"
    marginLeft: 10, // Remove quotes and "px"
  },
  header: {
    paddingTop: "100px",
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
    marginLeft: "30px",
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
  },

  MonthTimeNumber: {
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
});
