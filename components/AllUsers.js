import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Avatar, Button, Card, Searchbar, Text } from "react-native-paper";
import { GetAllUserList } from "./Api/api";
import { Box, Flex } from "@react-native-material/core";

export const AllUsers = () => {
  const [getUserlist, setGetUserList] = useState([]);
  const [InstitutionDetails, setInstitutionDetails] = useState({});

  const GetUserListFuntion = async () => {
    const response = await GetAllUserList();
    console.log("user list--" + JSON.stringify(response.users));
    setGetUserList(response.users || []);

    if (getUserlist) {
      console.log("--------" + response.users);
      setInstitutionDetails(response.users.institution_id);
    } else {
      setInstitutionDetails({});
    }
  };

  useEffect(() => {
    GetUserListFuntion();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineSmall">User List</Text>
        {/* <Button
          mode="contained"
          variant="small"
          textColor="white"
          onPress={() => console.log("Pressed")}
        >
          + Add user
        </Button> */}
        <Button mode="contained" onPress={() => console.log("Pressed")}>
          + Add user
        </Button>
      </View>
      <Searchbar
        placeholder="Search"
        size="small"
        style={{ height: "40px", marginBottom: 10 }}
        // onChangeText={onChangeSearch}
        // value={searchQuery}
        // style={{ height: "30px" }}
        inputStyle={{ minHeight: "40px" }}
      />
      <ScrollView vertical={true}>
        {(getUserlist || []).map((item) => {
          return (
            <Flex key={item.id} flexDirection="row" style={styles.Card}>
              <View>
                <Avatar.Image
                  size={40}
                  source={require("../components/comman/images.png")}
                />
              </View>
              <Box>
                <Text variant="titleMedium">{item.name}</Text>
                <Text variant="bodySmall">{item.email} </Text>
                <Text variant="bodySmall">{item.phone}</Text>
              </Box>
              <View
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                }}
              >
                <Button>Update</Button>
                <Button>Delete</Button>
              </View>
            </Flex>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5, // Remove quotes and "px"
    margin: 0, // Remove quotes and "px"
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "60px",
    width: "100%",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  Card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 5,
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    gap: 8,
    borderColor: "#ccc",
    justifyContent: "start",
    alignItems: "center",
    position: "relative",
  },
});
