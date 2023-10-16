import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppHeader from "../header";
import AppFooter from "../footer";
import { StyleSheet } from "react-native";
import AppBody from "../body";
import Task from "../project";
import { UserDetails } from "../UserDetails";
import LoginScreen from "../LoginScreen";
import AddProjectForm from "../forms/addProject";

const Stack = createNativeStackNavigator();

export default function MainLayout() {
  const token = localStorage.getItem("token");

  return (
    <NavigationContainer>
      {token !== null ? (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={AppBody} />
          <Drawer.Screen name="Projects" component={Task} />
          <Drawer.Screen name="AddProject" component={AddProjectForm} />
          <Drawer.Screen name="UserDetails" component={UserDetails} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator style={styles.container}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100vh",
    overflow: "hidden",
    fontFamily: "Poppins",
  },
});
