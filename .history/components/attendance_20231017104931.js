import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { List } from "react-native-paper";
import CalendarComponent from "./comman/calender";
import EmployeeListComponent from "./comman/employeeBox";
import { Flex } from "@react-native-material/core";

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
    <Flex>
      <View>
        <CalendarComponent
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
        />
        <EmployeeListComponent employees={employees} />
      </View>
    </Flex>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "10px",
    height: "calc(100vh - 200px)",
    padding: "10px",
    flexWrap: "wrap",
    overflow: "scroll",
    marginTop: 100,
  },
  contentBody: {
    flex: 1,
    padding: 10,
  },
  container: {
    flex: 1,
  },
});
export default AttendancePage;
