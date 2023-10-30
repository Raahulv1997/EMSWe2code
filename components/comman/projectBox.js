import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import TaskList from "../taskList";
import { GetTaskApi } from "../Api/api";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import ProjectDeleteAlert from "./ProjectDeleteAlert";
import { Entypo } from "@expo/vector-icons";
export default function ProjectBox({ projectData, setapicall, apicall }) {
  let navigate = useNavigation();

  const [taskList, setTaskList] = useState([]);
  const [taskId, setTaskId] = useState(projectData.id);
  const [showtaskList, setShowTaskList] = useState(false);
  const [isDeleteAlert, setDeleteAlert] = useState(false);
  //let Token = localStorage.getItem("token");
  let Token = localStorage.getItem("token");
  var head = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  };
  const GetTaskList = async () => {
    try {
      let response = await GetTaskApi(taskId ? taskId : projectData.id, head);
      setTaskList(response.tasks);
      setapicall(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetTaskList();
  }, [taskId, apicall]);

  useEffect(
    React.useCallback(() => {
      const unsubscribe = navigate.addListener("focus", () => {
        GetTaskList();
      });

      return unsubscribe;
    }, [navigate])
  );

  let value = "update";
  let initialFormState = {
    id: projectData.id,
    project_name: projectData.project_name,
    description: projectData.description,
    team_leader_id: projectData.team_leader_id
      ? projectData.team_leader_id.id
      : "",
    start_date: projectData.start_date,
    end_date: projectData.end_date,
    status: projectData.status,
  };

  return (
    <View>
      <View>
        <View style={styles.accordionContainer}>
          <View style={styles.accordionItem}>
            <TouchableOpacity
              // style={[styles.accordionButton, styles.accordionHeader]}
              style={{ padding: "10px" }}
              onPress={() => {
                setTaskId(projectData.id);
                setShowTaskList(true);

                if (showtaskList) {
                  setShowTaskList(false);
                }
              }}
            >
              <View style={styles.meAuto}>
                {/* <View style={styles.headerInner}> */}
                <Text style={styles.TaskName}>{projectData.project_name}</Text>
                <Text style={styles.status}>
                  Status:
                  <Text style={styles.statusBadge}>{projectData.status}</Text>
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    setTaskId(projectData.id);
                    navigate.navigate("addtask", { taskId });
                  }}
                >
                  <Entypo name="add-to-list" size={20} color="grey" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigate.navigate("addproject", { value, initialFormState })
                  }
                >
                  <Icon name="edit" size={20} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setDeleteAlert(true)}>
                  <Icon name="trash" size={20} color="gray" />
                </TouchableOpacity>
                {/* </View> */}
              </View>
            </TouchableOpacity>
          </View>
          {showtaskList === true ? (
            <View style={styles.accordionBody}>
              <TaskList taskData={taskList} setApiCall={setapicall} />
            </View>
          ) : null}
        </View>
      </View>
      <ProjectDeleteAlert
        isDeleteAlert={isDeleteAlert}
        setDeleteAlert={setDeleteAlert}
        id={projectData.id}
        userName={projectData.project_name}
        setapicall={setapicall}
      />
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
    justifyContent: "space-around",

    // alignItems: "center",
  },
  headerInner: {
    flexDirection: "row",
    justifyContent: "space-around",
    // alignItems: "center",
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
