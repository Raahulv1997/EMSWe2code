import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import TaskList from "../taskList";
import { GetTaskApi } from "../Api/api";

export default function ProjectBox({ projectData }) {
  const [taskList, setTaskList] = useState([]);
  const [taskId, setTaskId] = useState();
  const [apiCall, setApiCall] = useState(false);

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
    setApiCall(false);
  }, [taskId, apiCall]);

  return (
    <View>
      <View>
        <View style={styles.accordionContainer}>
          <View style={styles.accordionItem}>
            <TouchableOpacity
              style={[styles.accordionButton, styles.accordionHeader]}
              onPress={() => {
                setTaskId(projectData.id);
              }}
            >
              <View style={styles.meAuto}>
                <View style={styles.headerInner}>
                  <Text style={styles.TaskName}>
                    {projectData.project_name}
                  </Text>
                  <Text style={styles.status}>
                    Status:
                    <Text style={styles.statusBadge}>{projectData.status}</Text>
                  </Text>
                  {/* <Text style={styles.priorityBadge}>{projectData.priority}</Text> */}
                </View>
              </View>
            </TouchableOpacity>

          <View style={styles.accordionBody}>
            <TaskList
              taskData={taskList}
              id={projectData.id}
              setApiCall={setApiCall}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  col: {
    flex: 1,
  },
  accordionContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
  },
  accordionItem: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.125)",
    borderRadius: 8,
    // marginBottom: 10,
    width: "100%",
  },
  accordionButton: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingVertical: "1rem",
    paddingHorizontal: "1.25rem",
    fontSize: 14,
    color: "#969ba0",
    textAlign: "left",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.125)",
    borderRadius: 0,
    overflow: "hidden",
    transition:
      "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease",
  },
  accordionHeader: {
    marginBottom: 0,
  },
  meAuto: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerInner: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    textTransform: "capitalize",
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
});
