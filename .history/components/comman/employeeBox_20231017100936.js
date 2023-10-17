import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
const EmployeeBox = ({ employee }) => {
  return (
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
        <Text style={styles.name}>Aashi</Text>
        <View style={styles.timeContainer}>
          <Text>Punch In: 9.00 am</Text>
          <Text>Punch Out: 7.00 pm</Text>
        </View>
        <Text>Status: present</Text>
      </View>
    </View>
    // <View style={styles.container}>
    //   <View style={styles.imageContainer}>
    //     <Image
    //       source={{ uri: employee ? employee.image : "default_image_url" }}
    //       style={styles.image}
    //     />
    //   </View>
    //   <View style={styles.infoContainer}>
    //     <Text style={styles.name}>{employee ? employee.name : "N/A"}</Text>
    //     <View style={styles.timeContainer}>
    //       <Text>Punch In: {employee ? employee.punchInTime : "N/A"}</Text>
    //       <Text>Punch Out: {employee ? employee.punchOutTime : "N/A"}</Text>
    //     </View>
    //     <Text>Status: {employee ? employee.status : "N/A"}</Text>
    //   </View>
    // </View>
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
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});

export default EmployeeBox;
