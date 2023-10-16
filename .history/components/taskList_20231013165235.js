import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { DataTable } from "react-native-paper";
import AddUpdateTask from "./addupdateTask";

const TaskList = ({ taskData }) => {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Task Name</DataTable.Title>
          <DataTable.Title>Due Date</DataTable.Title>
          <DataTable.Title>Priority</DataTable.Title>
          <DataTable.Title>Assign</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
        </DataTable.Header>

        {(taskData || []).map((task, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{task.task_name}</DataTable.Cell>
            <DataTable.Cell>{task.due_date}</DataTable.Cell>
            <DataTable.Cell>{task.priority}</DataTable.Cell>
            <DataTable.Cell>
              {task.assign ? task.assign.name : "NA"}
            </DataTable.Cell>
            <DataTable.Cell>{task.status}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
      <AddUpdateTask />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    marginLeft: 10,
  },
});

export default TaskList;
