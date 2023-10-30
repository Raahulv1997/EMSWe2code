import React from "react";
import { View, Text } from "react-native";
import moment from "moment";

const PunchTimeCheck = ({ punchTime }) => {
  // Define the target time as 9:45 AM
  const targetTime = moment().set({ hours: 9, minutes: 45, seconds: 0 });

  // Parse the punchTime to a moment object
  const punchTimeMoment = moment(punchTime, "HH:mm A");

  if (punchTimeMoment.isBefore(targetTime)) {
    return <Text style={{ color: "green", marginLeft: "20px" }}>In-time</Text>;
  } else {
    return <Text style={{ color: "red" }}>Late coming</Text>;
  }
};

export default PunchTimeCheck;
