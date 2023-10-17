import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarComponent = ({ selectedDate, onDateChange }) => {
  const [selectedWeek, setSelectedWeek] = useState(null);

  const handleDayPress = (day) => {
    const selectedDay = new Date(day.dateString);
    const startOfWeek = new Date(
      selectedDay.getFullYear(),
      selectedDay.getMonth(),
      selectedDay.getDate() - selectedDay.getDay()
    );

    setSelectedWeek(startOfWeek);
    onDateChange(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Calendar
        current={selectedDate}
        minDate={"2023-01-01"}
        maxDate={"2023-12-31"}
        onDayPress={handleDayPress}
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
      {selectedWeek && (
        <View style={styles.selectedWeek}>
          {/* Display the selected week's dates here */}
        </View>
      )}
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
  calendar: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#ccc",
  },
  selectedWeek: {
    marginTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#ccc",
    padding: 10,
  },
});

export default CalendarComponent;
