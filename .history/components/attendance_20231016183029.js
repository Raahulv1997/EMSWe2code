import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { List } from "react-native-paper";
import Calendar from "./comman/calender";
import EmployeeListComponent from "./comman/employeeBox";

const AttendancePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch attendance data for selectedDate from API
    // Update employees state
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <View>
      <CalendarComponent
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />
      <EmployeeListComponent employees={employees} />
    </View>
  );
};

export default AttendancePage;
