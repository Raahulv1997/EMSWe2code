import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Button,
  Avatar,
  Flex,
  ListItem,
  Box,
  Text,
  Badge,
} from "@react-native-material/core";
import { Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const TaskList = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      position: "absolute",
      top: 0,
    },
  });
  return (
    <>
      <Flex
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <table
          style={{
            width: "100%",
            fontFamily: "Poppins",
            textAlign: "left",
            fontWeight: "normal",
          }}
        >
          <tbody>
            <tr>
              <th>Image</th>
              <th>Task</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Assign</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>
                <Feather name="check-circle" size={24} color="black" />
              </td>
              <td>Lorem ipsum dolor sit amet. Qui quibusdam recusandae</td>
              <td>11 Aug 23</td>
              <td>
                <Badge
                  labelStyle={{ fontSize: "10px", color: "white" }}
                  label={"High"}
                  color={1 === 1 ? "red" : 1 == 2 ? "orange" : "info"}
                />
              </td>
              <td>
                <Avatar
                  size={40}
                  image={
                    <Image
                      source={{
                        uri: "https://mui.com/static/images/avatar/2.jpg",
                      }}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: 28,
                      }}
                    />
                  }
                />
              </td>
              <td>
                <Badge
                  labelStyle={{ fontSize: "10px" }}
                  label={"In Progress"}
                  color="red"
                />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>
                <Badge label={123} color="primary" />
              </td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </Flex>
    </>
  );
};

export default TaskList;
