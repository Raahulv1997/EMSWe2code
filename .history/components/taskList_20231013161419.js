import React from "react";
import { DataTable } from "react-native-paper";
import AddUpdateTask from "./addupdateTask";

const TaskList = ({ taskData }) => {
  return (
    <>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Task</DataTable.Title>
          <DataTable.Title>Due</DataTable.Title>
          <DataTable.Title>Priority</DataTable.Title>
          <DataTable.Title>Assign</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
          <DataTable.Title></DataTable.Title>
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
              <DataTable.Cell>{/* Add chevron-right icon */}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable.Body>
      </DataTable>
      <AddUpdateTask />
    </>
  );
};

export default TaskList;
