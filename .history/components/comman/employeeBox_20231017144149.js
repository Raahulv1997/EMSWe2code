import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const EmployeeBox = ({ employee }) => {
  // Added curly braces around 'employee'
  const navigate = useNavigation(); // Used 'const' instead of 'let'

  return (
    <TouchableOpacity
      onPress={() => navigate.navigate("userattendancehistory")}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: employee
                ? employee.image
                : "https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0&h=220",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>
            {employee.name}
            <Text style={{ color: "green", fontSize: 10 }}>
              {employee.status === "P"
                ? " present"
                : employee.status === "L"
                ? " Late"
                : employee.status === "A" ||
                  employee.status === "CL" ||
                  employee.status === "ML"
                ? employee.status === "ML"
                  ? " ML"
                  : employee.status === "CL"
                  ? " CL"
                  : " Absent"
                : employee.status === "HD"
                ? " Half Day"
                : employee.status === "WH"
                ? " WFH"
                : null}
            </Text>
          </Text>
          <View style={styles.timeContainer}>
            <Text style={{ color: "green" }}> 9.00 am</Text>
            <Text style={{ color: "green" }}> 7.00 pm</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 10,
  },
  imageContainer: {
    borderRadius: 25,
    overflow: "hidden",
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});

export default EmployeeBox;
