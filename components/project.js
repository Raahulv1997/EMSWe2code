import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { GetTaskApi, GetProjectsApi } from "./Api/api";
import ProjectBox from "./projectBox";
const Task = () => {
  const [projectList, setProjectList] = useState([]);
  /*Function to get the task list */
  const GetProjectList = async () => {
    try {
      let projectRes = await GetProjectsApi();
      setProjectList(projectRes.projects);
    } catch (err) {
      console.log(err);
    }
  };
  /*Render function */
  useEffect(() => {
    GetProjectList();
  }, []);

  return (
    <View style={styles.contentBody}>
      <View style={styles.container}>
        <View style={styles.textHead}>
          <Text style={styles.heading}>Task Management</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.buttonText}>Add New Task</Text>
          </TouchableOpacity>
        </View>
        {(projectList || []).map((item, index) => {
          return <ProjectBox projectData={item} key={index} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentBody: {
    flex: 1,
    padding: 10,
  },
  container: {
    flex: 1,
  },
  textHead: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  },
  addButton: {
    backgroundColor: "#e45e38",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Task;
