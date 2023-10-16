import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Avatar, Button, Card, Searchbar, Text } from "react-native-paper";
import { GetAllUserList } from "./Api/api";

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
        <Text variant="headlineMedium">All users</Text>
        <Button
          mode="contained"
          textColor="white"
          onPress={() => console.log("Pressed")}
        >
          Add user
        </Button>
      </View>{" "}
      <View style={{ margin: "10px" }}>
        <Searchbar
          placeholder="Search"
          // onChangeText={onChangeSearch}
          // value={searchQuery}
        />
      </View>
      <ScrollView vertical={true}>
        {(getUserlist || []).map((item) => {
          return (
            <>
              <Card style={{ marginBottom: "10px" }}>
                <Card.Title
                  title={item.name}
                  subtitle={item.role}
                  left={(props) => <Avatar.Icon {...props} icon="folder" />}
                  // right={(props) => (
                  //   <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
                  // )}
                />
                <Card.Content>
                  <Text variant="titleMedium">
                    Institution :-{" "}
                    <Text variant="bodyMedium">
                      {item.institution_id
                        ? item.institution_id.name
                        : "not available"}
                    </Text>{" "}
                  </Text>
                </Card.Content>
                <Card.Content>
                  <Text variant="titleMedium">
                    Email :- <Text variant="bodyMedium">{item.email}</Text>{" "}
                  </Text>
                </Card.Content>

                <Card.Actions>
                  <Button>Update</Button>
                  <Button>Delete</Button>
                </Card.Actions>
              </Card>
            </>
          );
        })}
      </ScrollView>
    </View>
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
