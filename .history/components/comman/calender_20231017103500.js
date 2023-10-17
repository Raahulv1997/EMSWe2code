import React from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarComponent = ({ selectedDate, onDateChange }) => {
  return (
    <View>
      <Calendar />
    </View>
  );
};

export default CalendarComponent;
