import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CalendarComponent = ({ selectedDate, onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(new Date(selectedDate));
  const [viewMode, setViewMode] = useState("week"); // "week" or "month"

  const handleDayPress = (day) => {
    setCurrentDate(new Date(day));
    onDateChange(day);
  };

  const generateDaysOfWeek = () => {
    const days = [];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (let i = 0; i < 7; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - currentDate.getDay() + i);
      const dateString = date.toISOString().split("T")[0];

      days.push(
        <TouchableOpacity
          key={dateString}
          onPress={() => handleDayPress(dateString)}
          style={
            currentDate.toISOString().split("T")[0] === dateString
              ? styles.selectedDay
              : styles.day
          }
        >
          <Text>{dayNames[i]}</Text>
          <Text>{date.getDate()}</Text>
        </TouchableOpacity>
      );
    }

    return days;
  };

  const handleToggleView = () => {
    setViewMode((prev) => (prev === "week" ? "month" : "week"));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleToggleView}>
          <Text style={styles.button}>Toggle View</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {viewMode === "week" ? "Week View" : "Month View"}
        </Text>
      </View>
      <View style={styles.daysContainer}>{generateDaysOfWeek()}</View>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  day: {
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  selectedDay: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  button: {
    color: "#007BFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CalendarComponent;
