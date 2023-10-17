import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarComponent = ({ selectedDate, onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(selectedDate);

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
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleWeekChange("prev")}>
          <Text style={styles.button}>Previous Week</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>{currentDate}</Text>
        <TouchableOpacity onPress={() => handleWeekChange("next")}>
          <Text style={styles.button}>Next Week</Text>
        </TouchableOpacity>
      </View>
      <Calendar
        current={currentDate}
        minDate={"2023-01-01"}
        maxDate={"2023-12-31"}
        onDayPress={(day) => onDateChange(day.dateString)}
        hideExtraDays
        theme={{
          arrowColor: "#333",
          todayTextColor: "#333",
          selectedDayTextColor: "#fff",
          selectedDayBackgroundColor: "#007BFF",
          monthTextColor: "#333",
          textMonthFontWeight: "bold",
          textDayFontSize: 16,
          textMonthFontSize: 16,
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
          },
        }}
        hideDayNames
        style={styles.calendar}
      />
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
  button: {
    color: "#007BFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  calendar: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#ccc",
  },
});

export default CalendarComponent;
