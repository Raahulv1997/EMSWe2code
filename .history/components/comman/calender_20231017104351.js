import React from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarComponent = ({ selectedDate, onDateChange }) => {
  return (
    <View>
      <Calendar
        minDate={new Date()}
        weekdays={["Su", "M", "T", "W", "Th", "F", "S"]}
        todayBackgroundColor="#979797"
        selectedDayColor="#ff6c19"
        selectedDayTextColor="#FFFFFF"
        textStyle={{
          fontFamily: "HelveticaNeue",
          color: "rgb(96,96,96)",
        }}
      />
    </View>
  );
};

export default CalendarComponent;
