import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
import { GetAllUserList, GetLeaveListByAdmin } from "./Api/api";
import LeaveBox from "./comman/leaveBox";

export const Leaves = () => {
  const [LeaveList, setLeaveList] = useState([]);
  const [apicall, setapicall] = useState(false);
  const GetLeaveListFuntion = async () => {
    const response = await GetLeaveListByAdmin();
    let { leaves } = response;

    setLeaveList(leaves.data || []);
    setapicall(false);
  };

  useEffect(() => {
    GetLeaveListFuntion();
  }, [apicall]);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text variant="headlineMedium">Leaves</Text>
        </View>{" "}
        <ScrollView vertical={true}>
          {(LeaveList || []).map((item) => {
            return (
              <>
                <LeaveBox LeaveList={item} setapicall={setapicall} />
              </>
            );
          })}
        </ScrollView>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, // Remove quotes and "px"
    marginLeft: 10, // Remove quotes and "px"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "100px",
    marginBottom: 15,
    justifyContent: "space-between",
  },
});
