import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Avatar, Button, Card, Divider } from "react-native-paper";
import LeaveApprovalAlert from "./LeaveApprovalAlert";
const LeaveBox = ({ LeaveList, setapicall }) => {
  const [statusUpdateAlert, setStatusUpdateAlert] = useState(false);
  const [statusValue, setStatusValue] = useState("");
  const [LeaveID, setLeaveID] = useState("");
  //  LeaveStatusUpdateByAdmin

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Avatar.Image size={50} source={require("./images.png")} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.LeaveInfo}>
            <Text style={styles.name}>
              {LeaveList ? LeaveList.user_id.name : "not avlaible"}
            </Text>
            <Text
              style={{
                fontSize: 15,
                backgroundColor:
                  LeaveList.status == "pending"
                    ? "#0dacdb"
                    : LeaveList.status == "approved"
                    ? "#d41111"
                    : LeaveList.status == "rejected"
                    ? "#076117"
                    : "#0dacdb",
                color: "white",
                paddingTop: "4px",
                paddingLeft: "10px",
                paddingRight: "10px",

                borderRadius: 20,
              }}
            >
              {LeaveList.status}
            </Text>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.dates}>
              {LeaveList ? LeaveList.start_date : "not Avaiable"} to&nbsp;
              {LeaveList ? LeaveList.end_date : "not Avaiable"}
            </Text>
            <Text style={styles.LeaveType}>{LeaveList.leave_type}</Text>
          </View>
          <Text>Reason:{LeaveList.reason}</Text>
          {LeaveList.status == "pending" ? (
            <View>
              {" "}
              <Divider style={{ marginTop: "5px" }} />
              <View style={styles.LeaveButtonDiv}>
                <TouchableOpacity
                  style={{
                    fontSize: 15,
                    backgroundColor: "#078a53",
                    color: "white",
                    paddingTop: "4px",
                    paddingLeft: "10px",
                    paddingRight: "10px",

                    borderRadius: 20,
                  }}
                  onPress={() => {
                    setStatusUpdateAlert(true);
                    setStatusValue("approved");
                    setLeaveID(LeaveList.id);
                  }}
                >
                  Approved
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    fontSize: 15,
                    backgroundColor: "#f7583b",
                    color: "white",
                    paddingTop: "4px",
                    paddingLeft: "10px",
                    paddingRight: "10px",

                    borderRadius: 20,
                  }}
                  onPress={() => {
                    setStatusUpdateAlert(true);
                    setStatusValue("rejected");
                    setLeaveID(LeaveList.id);
                  }}
                >
                  Rejected
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </View>
        <LeaveApprovalAlert
          statusUpdateAlert={statusUpdateAlert}
          setStatusUpdateAlert={setStatusUpdateAlert}
          username={LeaveList.user_id.name}
          id={LeaveID}
          statusValue={statusValue}
          setStatusValue={setStatusValue}
          setapicall={setapicall}
        />
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
  },

  LeaveInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  LeaveButtonDiv: {
    borderTopColor: "red",
    height: "30px",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10px",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  dates: {
    fontSize: 12,
    backgroundColor: "#0fd1c7",
    color: "Black",
    padding: "4px",
    borderRadius: 5,
  },

  LeaveType: {
    fontSize: 12,

    color: "green",
  },

  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});

export default LeaveBox;
