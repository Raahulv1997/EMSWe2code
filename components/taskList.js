import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import AddUpdateTask from "./addupdateTask";
import { GetTaskApi } from "./Api/api";
import { Box } from "@react-native-material/core";
const TaskList = (props) => {
  const [taskLists, setTaskLists] = useState([]);
  const GetTaskLists = async () => {
    try {
      let projectRes = await GetTaskApi(props.id);
      setTaskLists(projectRes.tasks);
    } catch (err) {
      console.log(err);
    }
  };
  /*Render function */
  useEffect(() => {
    GetTaskLists();
  }, []);
  console.log(taskLists);
  return (
    <View style={styles.cardBody}>
      {(taskLists || []).map((data) => (
        <Box style={styles.tableResponsive} key={data.id}>
          <Box style={styles.tableContainer}>
            <Box style={styles.tableHeader}>
              <Box style={styles.tableRow}>
                <Box style={styles.tableHeaderCell}></Box>

                <Box style={styles.tableHeaderCell}>{data.task_name}</Box>
                <Box style={styles.tableHeaderCell}>{data.due_date}</Box>
                <Box style={styles.tableHeaderCell}>{data.priority}</Box>
                <Box style={styles.tableHeaderCell}>{data.assign}</Box>
                <Box style={styles.tableHeaderCell}>{data.status}</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
      {1 === 1 ? null : (
        <View style={styles.tableResponsive}>
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <View style={styles.tableRow}>
                <View style={styles.tableHeaderCell}>
                  <Text style={styles.tableHeaderText}>Task</Text>
                </View>
                <View style={styles.tableHeaderCell}>
                  <Text style={styles.tableHeaderText}>Due</Text>
                </View>
                <View style={styles.tableHeaderCell}>
                  <Text style={styles.tableHeaderText}>Priority</Text>
                </View>
                <View style={styles.tableHeaderCell}>
                  <Text style={styles.tableHeaderText}>Assign</Text>
                </View>
                <View style={styles.tableHeaderCell}>
                  <Text style={styles.tableHeaderText}>Status</Text>
                </View>
                <View style={styles.tableHeaderCell}></View>
              </View>
            </View>
            <View style={styles.tableBody}>
              {taskLists.length === 0 ? (
                <View style={styles.tableRow}>
                  <View style={styles.tableCell}></View>
                  <View style={styles.tableCell}></View>
                  <View style={styles.tableCell}>
                    <Text
                      style={{
                        margin: "auto",
                        color: "black",
                      }}
                    >
                      No data found
                    </Text>
                  </View>
                  <View style={styles.tableCell}></View>
                  <View style={styles.tableCell}></View>
                  <View style={styles.tableCell}></View>
                </View>
              ) : (
                (taskLists || []).map((data) => (
                  <View style={styles.tableRow} key={data.id}>
                    <View style={styles.tableCell}>
                      <Text style={styles.textDark}>{data.task_name}</Text>
                    </View>
                    <View style={styles.tableCell}>{data.due_date}</View>
                    <View style={styles.tableCell}>{data.priority}</View>
                    <View style={styles.tableCell}>
                      {/* <TouchableOpacity
                        style={styles.assignDropdownToggle}
                        onPress={() => {
                          // Handle assign dropdown toggle
                        }}
                      > */}
                      {/* <Image source={""} style={styles.assignImage} /> */}
                      {/* <View style={styles.assignBadge}> */}
                      {data.assign ? data.assign : "NA"}
                      {/* </View> */}
                      {/* </TouchableOpacity> */}
                      {/* Add ListDropdown component */}
                    </View>
                    <View style={styles.tableCell}>{data.status}</View>
                    <View style={styles.tableCell}>
                      <TouchableOpacity style={styles.arrowLink}>
                        {/* Add chevron-right icon */}
                      </TouchableOpacity>
                    </View>
                  </View>
                ))
              )}
              <AddUpdateTask />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardBody: {
    padding: 0,
  },
  tableResponsive: {
    flex: 1,
    overflowX: "auto",
  },
  tableContainer: {
    width: "100%",
    marginTop: 1,
    marginBottom: 1,
    overflowX: "auto",
  },
  tableHeader: {
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  tableHeaderCell: {
    padding: 0.75,
  },
  tableHeaderText: {
    fontWeight: "bold",
    margin: "10px",
  },
  tableCell: {
    padding: 0.75,
    // paddingHorizontal:12
  },
  tableColText: {
    margin: "10px",
  },
  textDark: {
    color: "#343a40",
    margin: "10px",
  },
  dueDate: {
    fontSize: 9,
    margin: "10px",
  },
  priorityBadge: {
    fontSize: 10,
    margin: "10px",
    color: "#fc410c",
    fontWeight: "bold",
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 40,
    borderWidth: 0.25,
    borderColor: "#ecbaa9",
  },
  assignContainer: {
    position: "relative",
  },
  assignDropdownToggle: {
    flexDirection: "row",
    alignItems: "center",
    textDecorationLine: "none",
  },
  assignImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  assignBadge: {
    margin: "10px",
    marginLeft: "25px",
    backgroundColor: "#6c757d",
    padding: 4,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  statusBadge: {
    backgroundColor: "#dc3545",
    borderRadius: "40px",
    paddingVertical: 2,
    paddingHorizontal: 4,
    color: "white",
    margin: "10px",
  },
  statusText: {
    color: "#dc3545",
  },
  arrowLink: {
    textDecorationLine: "none",
    color: "#000",
  },
});

export default TaskList;
