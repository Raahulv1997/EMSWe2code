import React from "react";
import { View, Text } from "react-native";

const EmployeeBox = ({ employee }) => {
  return (
    <View>
      <Text key={employee.id}>{employee.name}</Text>
    </View>
  );
};

export default EmployeeBox;
