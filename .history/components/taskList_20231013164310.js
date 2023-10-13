import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { DataTable } from "react-native-paper";
import AddUpdateTask from "./addupdateTask";

const TaskList = ({ taskData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textHead}>
        <Text style={styles.heading}>Task List</Text>
        <TouchableOpacity>
          <Button
            raised
            primary
            text="Add Task"
            onPress={() => console.log("Pressed")}
          />
        </TouchableOpacity>
      </View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Task Name</DataTable.Title>
          <DataTable.Title>Due Date</DataTable.Title>
          <DataTable.Title>Priority</DataTable.Title>
          <DataTable.Title>Assign</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
          <DataTable.Title>Action</DataTable.Title>
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
            <DataTable.Cell>
              <TouchableOpacity onPress={() => console.log("Update Pressed")}>
                <Text>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Delete Pressed")}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </DataTable.Cell>
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
  textHead: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    flex: 1,
    marginTop: 20,
  },
});

export default TaskList;
