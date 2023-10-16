import React from "react";
import { TouchableOpacity, StyleSheet, Text, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import AddUpdateTask from "./forms/addupdateTask";
import { DeleteTaskApi } from "./Api/api";
import Icon from "react-native-vector-icons/FontAwesome";
import Toast from "react-native-toast-message";
const TaskList = ({ taskData, id, setApiCall }) => {
  /*Function to delete task */
  const onDelete = async (task_id) => {
    try {
      let res = await DeleteTaskApi(task_id);
      if (res.message === "Deleted successfully") {
        setApiCall(true);
        Toast.show({
          type: "success",
          position: "top",
          text1: "Task deleted successfully",
        });
      } else {
        Toast.show({
          type: "error",
          position: "top",
          text1: "Something went wrong",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
            <DataTable.Cell>
              <Text style={styles.priorityBadge}>{task.priority}</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text style={styles.assignBadge}>
                {task.assign ? task.assign.name : "NA"}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text style={styles.statusBadge}>{task.status}</Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text style={{ padding: 20 }}>
                <TouchableOpacity onPress={() => onDelete(task.id)}>
                  <Icon name="trash" size={20} color="red" />
                </TouchableOpacity>
              </Text>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
      <AddUpdateTask id={id} setApiCall={setApiCall} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    marginLeft: 10,
  },
  priorityBadge: {
    fontSize: 12,
    color: "#fc410c",
    fontWeight: "bold",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 40,
    borderWidth: 0.25,
    borderColor: "#ecbaa9",
  },
  assignBadge: {
    backgroundColor: "#6c757d",
    padding: 6,
    borderRadius: 40,
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  statusBadge: {
    backgroundColor: "#dc3545",
    borderRadius: 60,
    paddingVertical: 4,
    paddingHorizontal: 8,
    color: "white",
    margin: "10px",
  },
  statusText: {
    color: "#dc3545",
  },
  arrowLink: {
    textDecorationLine: "none",
    color: "#000",
    marginVertical: 10,
  },
});

export default TaskList;
