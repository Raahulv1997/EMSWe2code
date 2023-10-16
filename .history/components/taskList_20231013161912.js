import React from "react";
import { View, Text } from "react-native";
import { DataTable } from "react-native-material-ui";
import AddUpdateTask from "./addupdateTask";

const TaskList = ({ taskData }) => {
  return (
    <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Task</DataTable.Title>
          <DataTable.Title>Due</DataTable.Title>
          <DataTable.Title>Priority</DataTable.Title>
          <DataTable.Title>Assign</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
        </DataTable.Header>

        <DataTable.Body>
          {taskData.map((data, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell>{data.task_name}</DataTable.Cell>
              <DataTable.Cell>{data.due_date}</DataTable.Cell>
              <DataTable.Cell>{data.priority}</DataTable.Cell>
              <DataTable.Cell>
                {data.assign ? data.assign.name : "NA"}
              </DataTable.Cell>
              <DataTable.Cell>{data.status}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable.Body>
      </DataTable>
      <AddUpdateTask />
    </View>
  );
};

export default TaskList;
