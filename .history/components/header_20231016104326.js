// AppHeader.js

import React from "react";
import { Appbar, Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const AppHeader = () => {
  const navigate = useNavigation();

  const loggedIn = localStorage.getItem("token");

  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={() => navigate.toggleDrawer()} />
      <Appbar.Content title="App Header" />
      {loggedIn && (
        <Appbar.Action
          icon={() => <Avatar label="Rahul verma" size={28} />}
          onPress={() => {
            localStorage.clear();
            navigate.navigate("login");
          }}
        />
      )}
    </Appbar.Header>
  );
};

export default AppHeader;
