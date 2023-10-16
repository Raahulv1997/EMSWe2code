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
import { Image, StyleSheet, View } from "react-native";
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
      {/* <Flex
        style={{
          width: "100%",
        }}
      >
        <Flex>
          <View>Image</View>
          <View>Task</View>
          <View>Due Date</View>
          <View>Priority</View>
          <View>Assign</View>
          <View>Status</View>
        </Flex>
        <Flex direction="row">
          <View>
            <Feather name="check-circle" size={24} color="black" />
          </View>
          <View>Lorem ipsum dolor sit amet. Qui quibusdam recusandae</View>
          <View>11 Aug 23</View>
          <View>
            <Badge
              labelStyle={{ fontSize: "10px", color: "white" }}
              label={"High"}
              color={1 === 1 ? "red" : 1 == 2 ? "orange" : "info"}
            />
          </View>
          <View>
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
          </View>
          <View>
            <Badge
              labelStyle={{ fontSize: "10px" }}
              label={"In Progress"}
              color="red"
            />
          </View>
        </Flex>
        <Flex>
          <View>1</View>
          <View>1</View>
          <View>1</View>
          <View>
            <Badge label={123} color="primary" />
          </View>
          <View>1</View>
          <View>1</View>
        </Flex>
      </Flex> */}
    </>
  );
};

export default TaskList;
