import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import AddUpdateTask from "./addupdateTask";

const TaskList = ({ taskData }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell>Due</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Assign</TableCell>
            <TableCell>Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {taskData.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{data.task_name}</TableCell>
              <TableCell>{data.due_date}</TableCell>
              <TableCell>{data.priority}</TableCell>
              <TableCell>{data.assign ? data.assign.name : "NA"}</TableCell>
              <TableCell>{data.status}</TableCell>
              <TableCell>{/* Add chevron-right icon */}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddUpdateTask />
    </TableContainer>
  );
};

export default TaskList;
