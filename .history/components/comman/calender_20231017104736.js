import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Agenda } from "react-native-calendars";

const CalendarComponent = ({ selectedDate, onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(selectedDate);

  const renderDay = (day) => {
    return (
      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>{day.day}</Text>
      </View>
    );
  };

  const handleWeekChange = (direction) => {
    // Logic to change the current week
    // Update the currentDate state
  };

  return (
    <View style={styles.container}>
      <Agenda
        current={currentDate}
        renderItem={renderDay}
        pastScrollRange={1}
        futureScrollRange={1}
        onDayPress={(day) => {
          setCurrentDate(day.dateString);
          onDateChange(day.dateString);
        }}
        // markedDates={{
        //   [selectedDate]: {
        //     selected: true,
        //   },
        // }}
        hideKnob
        style={styles.calendar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  calendar: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#ccc",
  },
  dayContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  dayText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default CalendarComponent;
