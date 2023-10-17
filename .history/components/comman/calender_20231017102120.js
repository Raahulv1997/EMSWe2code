import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { addDays, format } from "date-fns";

const CalendarComponent = ({ selectedDate, onDateChange }) => {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const handleWeekChange = (direction) => {
    let newDate = addDays(currentWeek, direction === "next" ? 7 : -7);
    setCurrentWeek(newDate);
  };

  const markedDates = {
    [format(selectedDate, "yyyy-MM-dd")]: {
      selected: true,
      selectedColor: "#007BFF",
    },
  };

  return (
    <View style={styles.container}>
      <Calendar
        current={currentWeek.toISOString().split("T")[0]}
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
        markedDates={markedDates}
        hideDayNames
        style={styles.calendar}
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleWeekChange("prev")}>
          <Text style={styles.button}>Previous Week</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {format(currentWeek, "MMM d, yyyy")}
        </Text>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
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
