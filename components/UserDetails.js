import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { DataTable } from "react-native-paper";
import { GetUserListApi } from "./Api/api";
export const UserDetails = () => {
  const [userDetails, setUserDetails] = useState({});
  const [InstitutionDetails, setInstitutionDetails] = useState({});

  const UserList = async () => {
    try {
      let response = await GetUserListApi();
      setUserDetails(response.user);
      if (userDetails) {
        setInstitutionDetails(response.user.institution_id);
      } else {
        setInstitutionDetails({});
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    UserList();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.textHead}>
        <Text style={styles.heading}>User details</Text>
        <TouchableOpacity
        // style={styles.addButton}
        // onPress={() => setAddProjectList(true)}
        >
          <Button
            mode="contained"
            textColor="white"
            onPress={() => console.log("Pressed")}
          >
            Add user
          </Button>
        </TouchableOpacity>
      </View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Phone</DataTable.Title>
          <DataTable.Title>Email</DataTable.Title>
          <DataTable.Title>Institution Name</DataTable.Title>
          <DataTable.Title>Gender</DataTable.Title>
          <DataTable.Title>Date of Birth</DataTable.Title>
          <DataTable.Title>Role</DataTable.Title>
          <DataTable.Title>Action</DataTable.Title>
        </DataTable.Header>
      </DataTable>

      <DataTable.Row>
        <DataTable.Cell>{userDetails.name}</DataTable.Cell>
        <DataTable.Cell>{userDetails.phone}</DataTable.Cell>
        <DataTable.Cell>{userDetails.email}</DataTable.Cell>
        <DataTable.Cell>{InstitutionDetails.name}</DataTable.Cell>
        <DataTable.Cell>{userDetails.gender}</DataTable.Cell>
        <DataTable.Cell>{userDetails.date_of_birth}</DataTable.Cell>
        <DataTable.Cell>{userDetails.role}</DataTable.Cell>
        <DataTable.Cell>
          <IconButton
            icon="update"
            mode="outlined"
            textColor="red"
            onPress={() => console.log("Pressed")}
          ></IconButton>{" "}
          <IconButton
            icon="delete"
            mode="outlined"
            textColor="red"
            onPress={() => console.log("Pressed")}
          ></IconButton>{" "}
        </DataTable.Cell>
      </DataTable.Row>

      <DataTable.Pagination
        page={1}
        numberOfPages={3} // Adjust this based on your data length
        onPageChange={(page) => {
          // Handle page change here
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "10px",
    marginLeft: "10px",
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
    marginTop: "20px",
  },
});
