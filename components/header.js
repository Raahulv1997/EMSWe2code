import React, { useState } from "react";
import { AppBar, Button } from "@react-native-material/core";
import { StyleSheet, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

import { Drawer, IconButton } from "react-native-paper";

const AppHeader = () => {
  const navigate = useNavigation();

  const [open, setOpen] = useState(false);
  const loggedIn = localStorage.getItem("token");

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      position: "absolute",
    },
  });

  const onToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <AppBar
      style={styles.container}
      title="App Header"
      leading={(props) => (
        <IconButton
          icon={(props) => <Icon name="menu" {...props} />}
          {...props}
          onPress={onToggleDrawer}
        />
      )}
      trailing={(props) =>
        loggedIn ? (
          <IconButton
            style={{ backgroundColor: "white" }}
            icon={"logout"}
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
