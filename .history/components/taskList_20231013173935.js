import React from "react";
import { View, StyleSheet, Button } from "react-native";
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
            <DataTable.Cell>
              <Text style={styles.priorityBadge}>{taskpriority}</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text style={styles.assignBadge}>
                {taskassign ? taskassign.name : "NA"}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text style={styles.statusBadge}>{taskstatus}</Text>
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
  priorityBadge: {
    fontSize: 10,
    margin: "10px",
    color: "#fc410c",
    fontWeight: "bold",
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 40,
    borderWidth: 0.25,
    borderColor: "#ecbaa9",
  },
  assignContainer: {
    position: "relative",
  },
  assignDropdownToggle: {
    flexDirection: "row",
    alignItems: "center",
    textDecorationLine: "none",
  },
  assignImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  assignBadge: {
    margin: "10px",
    marginLeft: "25px",
    backgroundColor: "#6c757d",
    padding: 4,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  statusBadge: {
    backgroundColor: "#dc3545",
    borderRadius: "40px",
    paddingVertical: 2,
    paddingHorizontal: 4,
    color: "white",
    margin: "10px",
  },
  statusText: {
    color: "#dc3545",
  },
});

export default TaskList;
