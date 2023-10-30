import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { GetProjectsApi } from "./Api/api";
import { Flex } from "@react-native-material/core";
import ProjectBox from "./comman/projectBox";
import { useNavigation } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
const Project = () => {
  let Token = localStorage.getItem("token");
  var head = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  };
  const [projectList, setProjectList] = useState([]);
  const [apicall, setapicall] = useState(false);
  let navigate = useNavigation();

  let initialFormState = {
    project_name: "",
    description: "",
    team_leader_id: "",
    start_date: "",
    end_date: "",
    status: "progress",
  };
  /*Function to get the Project list */
  const GetProjectList = async () => {
    try {
      let projectRes = await GetProjectsApi(head);

      setProjectList(projectRes.projects);
      setapicall(false);
    } catch (err) {
      console.log(err);
    }
  };
  /*Render function */

  useEffect(() => {
    GetProjectList();
  }, [apicall]);

  useEffect(
    React.useCallback(() => {
      const unsubscribe = navigate.addListener("focus", () => {
        GetProjectList();
      });

      return unsubscribe;
    }, [navigate])
  );
  let value = "add";
  return (
    <PaperProvider>
      {" "}
      <Flex style={styles.scrollContainer}>
        <View style={styles.contentBody}>
          <View style={styles.container}>
            <View style={styles.textHead}>
              <Text style={styles.heading}>Project Management</Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() =>
                  navigate.navigate("addproject", { value, initialFormState })
                }
              >
                <Text style={styles.buttonText}>Add Project</Text>
              </TouchableOpacity>
            </View>
            {(projectList || []).map((item, index) => {
              return (
                <ProjectBox
                  projectData={item}
                  key={index}
                  setapicall={setapicall}
                  apicall={apicall}
                />
              );
            })}
          </View>
        </View>
      </Flex>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "10px",
    height: "calc(100vh - 145px)",
    padding: "10px",
    flexWrap: "wrap",
    overflow: "scroll",
    marginTop: 100,
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
