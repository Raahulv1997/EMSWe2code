import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import CalendarComponent from "./comman/calender";
import EmployeeListComponent from "./comman/employeeBox";
import { GetAllUserList } from "./Api/api";
const AttendancePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [employees, setEmployees] = useState([]);

  /*Function to get user attendence list */
  const EmployeeAttendence = async () => {
    try {
      let res = await GetAllUserList(selectedDate);
      console.log(res.users);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    EmployeeAttendence();
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.scrollContainer}>
      <View style={styles.contentBody}>
        <View style={styles.container}>
          <CalendarComponent
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
          />
          <EmployeeListComponent employees={employees} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    margin: 5, // Changed 'gap' to 'margin'
    height: "calc(100vh - 200px)",
    padding: 7,
    flexWrap: "wrap",
    overflow: "scroll",
    marginTop: 40,
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
