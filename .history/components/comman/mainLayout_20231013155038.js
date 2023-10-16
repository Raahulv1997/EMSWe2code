import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppHeader from "./header";
import AppFooter from "./footer";
import { StyleSheet } from "react-native";
import AppBody from "../components/body";
import Task from "./project";
import { UserDetails } from "./UserDetails";
import LoginScreen from "./LoginScreen";

const Stack = createNativeStackNavigator();

export default function MainLayout() {
  const token = localStorage.getItem("token");

  return (
    <NavigationContainer>
      {token !== null ? (
        <>
          <AppHeader />
          <Stack.Navigator style={styles.container}>
            <Stack.Screen name="body" component={AppBody} />
            <Stack.Screen name="project" component={Task} />
            <Stack.Screen name="userDetails" component={UserDetails} />
          </Stack.Navigator>
          <AppFooter />
        </>
      ) : (
        <Stack.Navigator style={styles.container}>
          <Stack.Screen name="login" component={LoginScreen} />
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
