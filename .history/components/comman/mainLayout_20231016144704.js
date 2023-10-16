<<<<<<< HEAD:components/mainLayout.js
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
import { AllUsers } from "./AllUsers";

const Stack = createNativeStackNavigator();

export default function MainLayout() {
  const token = localStorage.getItem("token");

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={token ? "body" : "login"}
        screenOptions={{
          headerShown: false, // Hide the header
        }}
        style={styles.container}
      >
        <Stack.Screen
          name="body"
          options={{
            headerLeft: () => null, // Remove the back arrow button
          }}
        >
          {() => (
            <>
              <AppHeader />
              <AppBody />
              <AppFooter />
            </>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="project"
          options={{
            headerLeft: () => null, // Remove the back arrow button
          }}
          component={() => (
            <>
              <AppHeader />
              <Task />
              <AppFooter />
            </>
          )}
        />
        <Stack.Screen
          name="allusers"
          component={() => (
            <>
              <AppHeader />
              <AllUsers />
              <AppFooter />
            </>
          )}
        />
        <Stack.Screen
          name="userDetails"
          component={() => (
            <>
              <AppHeader />
              <UserDetails />
              <AppFooter />
            </>
          )}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
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
=======
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
        <>
          <AppHeader />
          <Stack.Navigator style={styles.container}>
            <Stack.Screen name="body" component={AppBody} />
            <Stack.Screen name="project" component={Task} />
            <Stack.Screen name="addproject" component={AddProjectForm} />
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
>>>>>>> master:components/comman/mainLayout.js
