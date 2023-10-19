import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CalendarComponent = ({ selectedDate, onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(new Date(selectedDate));

  const handleDayPress = (day) => {
    setCurrentDate(new Date(day));
    onDateChange(day);
    console.log(day);
  };

  const generateDaysOfWeek = () => {
    const days = [];

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

    setCurrentDate(newDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleWeekChange("prev")}>
          <Text style={styles.button}>Previous </Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {currentDate.toISOString().split("T")[0]}
        </Text>
        <TouchableOpacity onPress={() => handleWeekChange("next")}>
          <Text style={styles.button}>Next </Text>
        </TouchableOpacity>
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
    marginTop: 20,
    marginBottom: 10,
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 5,
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
