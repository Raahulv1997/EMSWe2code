import React from "react";
import { View, Text } from "react-native";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";
const PunchStatus = ({ punchTime }) => {
  // Define the target time as 9:45 AM
  const targetTime = moment().set({ hours: 9, minutes: 45, seconds: 0 });

  // Parse the punchTime to a moment object
  const punchTimeMoment = moment(punchTime, "HH:mm A");

  if (punchTimeMoment.isBefore(targetTime)) {
    return (
      <Text style={{ color: "green", marginLeft: "10px" }}>
        Present <AntDesign name="like1" size={20} color="green" />
      </Text>
    );
  } else {
    return (
      <Text style={{ color: "red", marginLeft: "20px" }}>
        Late{" "}
        <AntDesign
          name="dislike1"
          size={15}
          color="red"
          style={{ marginTop: "20px" }}
        />
      </Text>
    );
  }
};

export default PunchStatus;
