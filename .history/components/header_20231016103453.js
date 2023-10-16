// AppHeader.js

import React from "react";
import {
  AppBar,
  IconButton,
  Button,
  Avatar,
} from "@react-native-material/core";
import { StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const AppHeader = () => {
  let navigate = useNavigation();
  const loggedIn = localStorage.getItem("token");

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      position: "absolute",
    },
  });

  return (
    <AppBar
      style={styles.container}
      title="App Header"
      leading={(props) => (
        <IconButton
          icon={(props) => <Icon name="menu" {...props} />}
          {...props}
        />
      )}
      trailing={(props) =>
        loggedIn ? (
          <IconButton
            icon={<Avatar label="Rahul verma" size={28} />}
            onPress={() => {
              localStorage.clear();
              navigate.navigate("login");
            }}
            {...props}
          />
        ) : (
          <Button
            variant="text"
            title="Login"
            compact
            style={{ marginEnd: 4 }}
            onPress={() => navigate.navigate("login")}
            {...props}
          />
        )
      }
    />
  );
};

export default AppHeader;
