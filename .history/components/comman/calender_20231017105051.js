import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CalendarComponent = ({ selectedDate, onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(selectedDate);

  const handleDayPress = (day) => {
    setCurrentDate(day);
    onDateChange(day);
  };

  // Generate days of the week for the current week
  const generateDaysOfWeek = () => {
    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - startDate.getDay()); // Set to Sunday

    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const dateString = date.toISOString().split("T")[0];

      days.push(
        <TouchableOpacity
          key={dateString}
          onPress={() => handleDayPress(dateString)}
          style={currentDate === dateString ? styles.selectedDay : styles.day}
        >
          <Text>{date.getDate()}</Text>
        </TouchableOpacity>
      );
    }

    return days;
  };

  const handleWeekChange = (direction) => {
    const newDate = new Date(currentDate);
    if (direction === "next") {
      newDate.setDate(newDate.getDate() + 7);
    } else if (direction === "prev") {
      newDate.setDate(newDate.getDate() - 7);
    }
    setCurrentDate(newDate.toISOString().split("T")[0]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.daysContainer}>{generateDaysOfWeek()}</View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleWeekChange("prev")}>
          <Text style={styles.button}>Previous Week</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>{currentDate}</Text>
        <TouchableOpacity onPress={() => handleWeekChange("next")}>
          <Text style={styles.button}>Next Week</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  day: {
    alignItems: "center",
    padding: 10,
  },
  selectedDay: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    color: "#007BFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CalendarComponent;
