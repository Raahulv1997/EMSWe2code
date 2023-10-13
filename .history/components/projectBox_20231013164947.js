import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card, Button } from "react-native-paper"; // Importing Material-UI components

import TaskList from "./taskList";
import { GetTaskApi } from "./Api/api";

export default function ProjectBox({ projectData }) {
  const [taskList, setTaskList] = useState([]);
  const [taskId, setTaskId] = useState();

  const GetTaskList = async () => {
    try {
      let response = await GetTaskApi(taskId ? taskId : projectData.id);
      setTaskList(response.tasks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetTaskList();
  }, [taskId]);

  return (
    <Card style={styles.card}>
      <Card.Content>
        <TouchableOpacity onPress={() => setTaskId(projectData.id)}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.TaskName}>{projectData.project_name}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.status}>Status:</Text>
              <Text style={styles.statusBadge}>{projectData.status}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.accordionBody}>
          <TaskList taskData={taskList} />
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = {
  card: {
    margin: "10px",
  },
  TaskName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "grey",
    textTransform: "capitalize",
  },
  status: {
    fontSize: 12,
    color: "gray",
    marginLeft: 15,
  },
  statusBadge: {
    marginLeft: 5,
    fontSize: 10,
    color: "#fc410c",
    fontWeight: "bold",
    backgroundColor: "#ecbaa966",
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 40,
    borderWidth: 0.25,
    borderColor: "rgba(0, 0, 0, 0.125)",
    marginBottom: 5,
  },
  accordionBody: {
    // padding: 16,
    backgroundColor: "white",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
};
