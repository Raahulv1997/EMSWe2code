import React, { useEffect, useState } from "react";

import { View, StyleSheet, ScrollView } from "react-native";
import { Button, PaperProvider, Searchbar, Text } from "react-native-paper";
import { GetAllUserList } from "./Api/api";
import { useRoute } from "@react-navigation/native";
import UserBox from "./comman/UserBox";
import { useNavigation } from "@react-navigation/native";
export const AllUsers = () => {
  let Token = localStorage.getItem("token");
  var head = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    },
  };

  let navigate = useNavigation();
  const route = useRoute();
  const IntialFormState = {
    name: "",
    email: "",
    phone: "",
    institution_id: "",
    password: "",
    gender: "",
    date_of_birth: "",
  };
  //   const userData = route.params?.value || {};

  //   console.log(userData);
  const [getUserlist, setGetUserList] = useState([]);
  const [apicall, setapicall] = useState(false);

  const GetUserListFuntion = async () => {
    const response = await GetAllUserList(head);
    setGetUserList(response.users || []);
    setapicall(false);
  };

  useEffect(() => {
    GetUserListFuntion();
  }, [apicall]);
  // console.log("apicalll----" + apicall);
  useEffect(
    React.useCallback(() => {
      const unsubscribe = navigate.addListener("focus", () => {
        console.log("Focus event triggered");
        GetUserListFuntion();
      });

      return unsubscribe;
    }, [navigate, apicall])
  );
  // console.log("apicalll----" + apicall);
  // useLayoutEffect(() => {
  //   const unsubscribe = navigate.addListener("focus", () => {
  //     console.log("Focus event triggered");

  //     GetUserListFuntion();
  //   });

  //   return unsubscribe;
  // }, [navigate, apicall]);

  return (
    <PaperProvider>
      {" "}
      <View style={styles.container}>
        <View style={styles.header}>
          <Text variant="headlineSmall">User List</Text>

          <Button
            mode="contained"
            onPress={() =>
              navigate.navigate("adduserform", { IntialFormState })
            }
          >
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
              <>
                <UserBox item={item} setapicall={setapicall} />
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
});
