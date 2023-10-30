import React from "react";
import { TouchableOpacity, StyleSheet, Text, ScrollView } from "react-native";
import { Avatar, DataTable, TextInput } from "react-native-paper";
import AddUpdateTask from "./forms/addupdateTask";
import { DeleteTaskApi } from "./Api/api";
import Icon from "react-native-vector-icons/FontAwesome";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
const TaskList = ({ taskData, id, setApiCall }) => {
  let navigate = useNavigation();
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

  function getInitials(name) {
    const words = name.split(" ");
    let initials = "";
    for (const word of words) {
      initials += word[0].toUpperCase();
    }
    return initials;
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Task</DataTable.Title>

          <DataTable.Title>Priority</DataTable.Title>
          <DataTable.Title>Assign</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
          <DataTable.Title>Action</DataTable.Title>
        </DataTable.Header>

        {(taskData || []).map((task, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{task.task_name}</DataTable.Cell>

            <DataTable.Cell>
              <Text
                style={{
                  fontSize: 12,
                  color:
                    task.priority === "medium"
                      ? "#dd05f5"
                      : task.priority === "high"
                      ? "#f70c0c"
                      : "#057ffa",
                  fontWeight: "bold",
                  paddingVertical: 2,
                  paddingHorizontal: 5,
                  borderRadius: 40,
                  borderWidth: 0.25,
                  borderColor:
                    task.priority === "medium"
                      ? "#dd05f5"
                      : task.priority === "high"
                      ? "#f70c0c"
                      : "#057ffa",
                }}
              >
                {task.priority}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Avatar.Text
                size={24}
                label={task.assign ? getInitials(task.assign.name) : "NA"}
              />
            </DataTable.Cell>
            <DataTable.Cell>
              <Text
                style={{
                  backgroundColor:
                    task.status === "pending" ? "#34b4eb" : "green",
                  borderRadius: 60,
                  paddingTop: "4px",
                  paddingBottom: "8px",
                  color: "white",
                  padding: "5px",
                  fontSize: "12px",
                }}
              >
                {task.status}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text style={{ paddingLeft: 20 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigate.navigate("addtask");
                  }}
                >
                  <Icon name="edit" size={20} color="green" />
                </TouchableOpacity>
              </Text>
              <Text style={{ marginLeft: "5px" }}>
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
    paddingTop: "4px",
    paddingBottom: "8px",
    color: "white",
    padding: "5px",
    fontSize: "12px",
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
