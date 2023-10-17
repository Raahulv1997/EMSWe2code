import React from "react";
import { View, Text } from "react-native";

const EmployeeBox = ({ employee }) => {
  return (
    <View>
      <Text>{employee ? employee.name : "N/A"}</Text>
    </View>
  );
};

export default EmployeeBox;
