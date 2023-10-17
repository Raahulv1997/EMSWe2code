// Import necessary modules
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const App = () => {
  const profilePicSource = "https://placekitten.com/100/100";
  const username = "John Doe";
  const currentDate = new Date().toDateString();
  const totals = {
    present: 5,
    absent: 2,
    late: 1,
  };
  const options = [
    "Present",
    "Absent",
    "Late",
    "Leave",
    "EL",
    "CL",
    "WRH",
    "Halfday",
  ];
  const attendanceList = [
    {
      date: "2023-10-15",
      punchIn: "09:00 AM",
      punchOut: "05:00 PM",
      status: "Present",
    },
    // Add more attendance data here
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: profilePicSource }} style={styles.profilePic} />
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.date}>{currentDate}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Present: {totals.present}</Text>
        <Text style={styles.cardText}>Absent: {totals.absent}</Text>
        <Text style={styles.cardText}>Late: {totals.late}</Text>
      </View>
      <View style={styles.options}>
        {options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.optionButton}>
            <Text style={styles.optionButtonText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.attendanceList}>
        {attendanceList.map((entry, index) => (
          <View key={index} style={styles.attendanceItem}>
            <Text>Date: {entry.date}</Text>
            <Text>Punch In: {entry.punchIn}</Text>
            <Text>Punch Out: {entry.punchOut}</Text>
            <Text>Status: {entry.status}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 50,
    flex: "start",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  date: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  optionButtonText: {
    color: "white",
    fontSize: 16,
  },
  attendanceList: {},
  attendanceItem: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default App;
