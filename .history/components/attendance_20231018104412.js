import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import CalendarComponent from "./comman/calender";
import EmployeeListComponent from "./comman/employeeBox";
import { GetAllUserList } from "./Api/api";
import moment from "moment";
const AttendancePage = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );

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

  return (
    <View style={styles.scrollContainer}>
      <View style={styles.contentBody}>
        <View style={styles.container}>
          <CalendarComponent
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
          />
          {(employees || []).map((data, item) => {
            return <EmployeeListComponent employee={data} key={item} />;
          })}
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
    height: "calc(100vh - 145px)",
    padding: 7,
    flexWrap: "wrap",
    overflow: "scroll",
    marginTop: 75,
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
