import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const TaskList = ({ taskData }) => {
  return (
    <View style={styles.cardBody}>
      <View style={styles.tableResponsive}>
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <View style={styles.tableRow}>
              <View style={styles.tableHeaderCell}></View>
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
            {taskData.length === 0 ? (
              <View style={styles.tableRow}>
                <View style={styles.tableCell}></View>
                <View style={styles.tableCell}></View>
                <View style={styles.tableCell}></View>
                <View style={styles.tableCell}>
                  <Text style={{alignContent:"center",color:"black"}}>No data found</Text>
                </View>
                <View style={styles.tableCell}></View>
                <View style={styles.tableCell}></View>
                <View style={styles.tableCell}></View>
              </View>
            ) : (
              (taskData || []).map((data, index) => (
                <View style={styles.tableRow} key={index}>
                  <View style={styles.tableCell}>
                    <View style={styles.formCheck}>
                      <TouchableOpacity
                        style={styles.formCheckInput}
                        title="Mark Task Complete"
                      >
                        {/* Add checkbox icon */}
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.tableCell}>
                    <View style={styles.textDark}>
                      <Text>{data.task_name}</Text>
                    </View>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.dueDate}>{data.due_date}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <View style={styles.priorityBadge}>
                      <Text style={styles.priorityText}>{data.priority}</Text>
                    </View>
                  </View>
                  <View style={styles.tableCell}>
                    <View style={styles.assignContainer}>
                      <TouchableOpacity
                        style={styles.assignDropdownToggle}
                        onPress={() => {
                          // Handle assign dropdown toggle
                        }}
                      >
                        <Image source={""} style={styles.assignImage} />
                        <View style={styles.assignBadge}>
                          <Text style={styles.assignBadgeText}>
                            {data.assign}
                          </Text>
                        </View>
                      </TouchableOpacity>
                      {/* Add ListDropdown component */}
                    </View>
                  </View>
                  <View style={styles.tableCell}>
                    <View style={styles.statusBadge}>
                      <Text style={styles.statusText}>{data.status}</Text>
                    </View>
                  </View>
                  <View style={styles.tableCell}>
                    <TouchableOpacity style={styles.arrowLink}>
                      {/* Add chevron-right icon */}
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
            {/* Add TableTaskAddUpdate component */}
          </View>
        </View>
      </View>
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
    borderBottomWidth: 2,
    borderColor: "rgb(0, 0, 0, 0.125)",
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
  tableBody: {},
  tableCell: {
    padding: 0.75,
  },
  formCheck: {},
  formCheckInput: {},
  textDark: {
    color: "#343a40",
  },
  dueDate: {
    color: "#dc3545",
    fontSize: 10,
  },
  priorityBadge: {
    borderColor: "#007bff",
  },
  priorityText: {
    color: "#007bff",
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
    position: "absolute",
    top: -8,
    right: 0,
    backgroundColor: "#6c757d",
    padding: 4,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  assignBadgeText: {},
  statusBadge: {
    borderColor: "#dc3545",
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
