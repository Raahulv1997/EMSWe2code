import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Avatar, Button, Card, Searchbar, Text } from "react-native-paper";
import { GetAllUserList } from "./Api/api";

export const Leaves = () => {
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
                  title={
                    <>
                      <Text variant="titleMedium">
                        {item.name} ({item.role})
                      </Text>
                    </>
                  }
                  subtitle={
                    <>
                      <Text variant="titleMedium">{item.email} </Text>
                      <br />
                      <Text variant="titleMedium">{item.phone}</Text>
                    </>
                  }
                  left={(props) => (
                    <Avatar.Image
                      size={50}
                      source={require("../components/comman/images.png")}
                    />
                    // <Avatar.Icon {...props} icon="account-circle" />
                  )}
                  // right={(props) => (
                  //   <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
                  // )}
                />

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
