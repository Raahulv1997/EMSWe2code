import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { GetProjectsApi } from "./Api/api";
import { Flex } from "@react-native-material/core";
import ProjectBox from "./projectBox";
const Project = () => {
  const [projectList, setProjectList] = useState([]);
  const [addProjectModal, setAddProjectList] = useState(false);
  /*Function to get the Project list */
  const GetProjectList = async () => {
    try {
      let projectRes = await GetProjectsApi();
      console.log("data--" + JSON.stringify(projectRes.projects));
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
    <Flex style={styles.scrollContainer}>
      <View style={styles.contentBody}>
        <View style={styles.container}>
          <View style={styles.textHead}>
            <Text style={styles.heading}>Project Management</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setAddProjectList(true)}
            >
              <Text style={styles.buttonText}>Add Project</Text>
            </TouchableOpacity>
          </View>
          {(projectList || []).map((item, index) => {
            return <ProjectBox projectData={item} key={index} />;
          })}
        </View>
      </View>
      {addProjectModal ? addProjectModal : null}
    </Flex>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "10px",
    height: "calc(100vh - 128px)",
    padding: "10px",
    flexWrap: "wrap",
    overflow: "scroll",
  },
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

export default Project;
