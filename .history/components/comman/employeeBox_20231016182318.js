import React from "react";
import { View, Text } from "react-native";

const EmployeeBox = ({ employees }) => {
  return (
    <View>
      {employees.map((employee) => (
        <Text key={employee.id}>{employee.name}</Text>
      ))}
    </View>
  );
};

export default EmployeeBox;
