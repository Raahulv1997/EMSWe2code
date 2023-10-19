import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AddEventForm from "../forms/AddEventForm";
import HolidayDeleteAlert from "./HolidayDeleteAlert";

const EventBox = ({ data, setapicall }) => {
  const IntialFormState = {
    id: "",
    start_date: "",
    end_date: "",
    event: "",
    event_type: "",
  };

  const [openEventForm, setOpenEventForm] = useState(false);
  const [eventData, setEventData] = useState(IntialFormState);
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  //   const [statusValue, setStatusValue] = useState("");
  //   const [LeaveID, setLeaveID] = useState("");
  //   //  LeaveStatusUpdateByAdmin

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.LeaveInfo}>
            <Text style={styles.name}>{data.event}</Text>
            <Text>{data.event_type}</Text>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.dates}>
              {data.start_date}
              {data.end_date !== null ? " to " + data.end_date : null}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setOpenEventForm(true);
                setEventData({
                  id: data.id,
                  start_date: data.start_date,
                  end_date: data.end_date,
                  event: data.event,
                  event_type: data.event_type,
                });
              }}
            >
              <Icon name="edit" size={20} color="green" />
            </TouchableOpacity>
          </View>

          <View style={styles.timeContainer}>
            <Text>
              <b>Create By:</b>{" "}
              {data.created_by ? data.created_by.name : "not Available"}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setOpenDeleteAlert(true);
              }}
            >
              <Icon name="trash" size={20} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <AddEventForm
        openEventForm={openEventForm}
        setOpenEventForm={setOpenEventForm}
        setapicall={setapicall}
        data={eventData}
        type="update"
      />

      <HolidayDeleteAlert
        openDeleteAlert={openDeleteAlert}
        setOpenDeleteAlert={setOpenDeleteAlert}
        id={data.id}
        setapicall={setapicall}
        event={data.event}
      />
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

export default EventBox;
