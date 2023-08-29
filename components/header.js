import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Button,
  Avatar,
} from "@react-native-material/core";
import { StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const AppHeader = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      position: "absolute",
      top: 0,
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
            icon={<Avatar label="Yaman KATBY" size={28} />}
            onPress={() => setLoggedIn(!loggedIn)}
            {...props}
          />
        ) : (
          <Button
            variant="text"
            title="Login"
            compact
            style={{ marginEnd: 4 }}
            onPress={() => setLoggedIn(!loggedIn)}
            {...props}
          />
        )
      }
    />
  );
};

export default AppHeader;
