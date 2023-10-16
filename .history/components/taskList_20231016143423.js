<<<<<<< Updated upstream
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
=======
import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import AddUpdateTask from "./forms/addupdateTask";

const TaskList = ({ taskData, id }) => {
>>>>>>> Stashed changes
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
// import React from "react";
// import { View, StyleSheet, Text, ScrollView } from "react-native";
// import { DataTable } from "react-native-paper";
// import AddUpdateTask from "./addupdateTask";

// const TaskList = ({ taskData, id }) => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <DataTable>
//         <DataTable.Header>
//           <DataTable.Title>Task Name</DataTable.Title>
//           <DataTable.Title>Due Date</DataTable.Title>
//           <DataTable.Title>Priority</DataTable.Title>
//           <DataTable.Title>Assign</DataTable.Title>
//           <DataTable.Title>Status</DataTable.Title>
//         </DataTable.Header>

//         {(taskData || []).map((task, index) => (
//           <DataTable.Row key={index}>
//             <DataTable.Cell>{task.task_name}</DataTable.Cell>
//             <DataTable.Cell>{task.due_date}</DataTable.Cell>
//             <DataTable.Cell>
//               <Text style={styles.priorityBadge}>{task.priority}</Text>
//             </DataTable.Cell>
//             <DataTable.Cell>
//               <Text style={styles.assignBadge}>
//                 {task.assign ? task.assign.name : "NA"}
//               </Text>
//             </DataTable.Cell>
//             <DataTable.Cell>
//               <Text style={styles.statusBadge}>{task.status}</Text>
//             </DataTable.Cell>
//           </DataTable.Row>
//         ))}
//       </DataTable>
//       <AddUpdateTask id={id} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 10,
//     marginLeft: 10,
//   },
//   priorityBadge: {
//     fontSize: 12,
//     color: "#fc410c",
//     fontWeight: "bold",
//     paddingVertical: 2,
//     paddingHorizontal: 5,
//     borderRadius: 40,
//     borderWidth: 0.25,
//     borderColor: "#ecbaa9",
//   },
//   assignBadge: {
//     backgroundColor: "#6c757d",
//     padding: 6,
//     borderRadius: 40,
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "white",
//   },
//   statusBadge: {
//     backgroundColor: "#dc3545",
//     borderRadius: 60,
//     paddingVertical: 4,
//     paddingHorizontal: 8,
//     color: "white",
//     margin: "10px",
//   },
//   statusText: {
//     color: "#dc3545",
//   },
//   arrowLink: {
//     textDecorationLine: "none",
//     color: "#000",
//     marginVertical: 10,
//   },
// });

// export default TaskList;
