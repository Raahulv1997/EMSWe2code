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
import { AllUsers } from "../AllUsers";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

export default function MainLayout() {
  const token = localStorage.getItem("token");

  return (
    <NavigationContainer>
      <Toast ref={(ref) => Toast.setRef(ref)} />{" "}
      <Stack.Navigator
        initialRouteName={token ? "body" : "login"}
        screenOptions={{
          headerShown: false, // Hide the header
        }}
        style={styles.container}
      >
        <Stack.Screen></Stack.Screen>
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
