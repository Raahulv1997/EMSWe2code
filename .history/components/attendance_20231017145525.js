import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import CalendarComponent from "./comman/calender";
import { GetAllUserList } from "./Api/api";
import moment from "moment";
import { Button } from "react-native-paper";
const AttendancePage = () => {
  const [selectedDate, setSelectedDate] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );
  const [employees, setEmployees] = useState([]);

  /*Function to get user attendence list */
  const EmployeeAttendence = async () => {
    try {
      let res = await GetAllUserList(selectedDate);
      setEmployees(res.users);
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
  console.log(employees);
  return (
    <View style={styles.scrollContainer}>
      <CalendarComponent
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />
      {employees.length > 0
        ? (employees || []).map((data, item) => {
            <Button>{data.name}</Button>;
          })
        : null}
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