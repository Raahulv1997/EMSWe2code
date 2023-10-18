import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppHeader from "../header";
import AppFooter from "../footer";
import AppBody from "../body";
import Task from "../project";
import { UserDetails } from "../UserDetails";
import LoginScreen from "../LoginScreen";
import { AllUsers } from "../AllUsers";
import AddProjectForm from "../forms/addProject";
import AttendancePage from "../attendance";
import { Leaves } from "../Leaves";
import { EventHoliday } from "../EventHoliday";
import { StyleSheet, View } from "react-native";

const Stack = createNativeStackNavigator();

const Layout = ({ children }) => (
  <View style={styles.container}>
    <AppHeader />
    {children}
    <AppFooter />
  </View>
);

export default function MainLayout() {
  const token = localStorage.getItem("token");

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={token ? "allusers" : "login"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="home"
          component={() => (
            <Layout>
              {/* <Sidebar /> */}
              <AppBody />
            </Layout>
          )}
        />
        <Stack.Screen
          name="project"
          component={() => (
            <Layout>
              <Task />
            </Layout>
          )}
        />
        <Stack.Screen
          name="allusers"
          component={() => (
            <Layout>
              <AllUsers />
            </Layout>
          )}
        />
        <Stack.Screen
          name="leaves"
          component={() => (
            <Layout>
              <Leaves />
            </Layout>
          )}
        />

        <Stack.Screen
          name="event"
          component={() => (
            <>
              <AppHeader />
              <EventHoliday />
              <AppFooter />
            </>
          )}
        />
        <Stack.Screen
          name="userDetails"
          component={() => (
            <Layout>
              <UserDetails />
            </Layout>
          )}
        />
        <Stack.Screen
          name="addproject"
          component={() => (
            <Layout>
              <AddProjectForm />
            </Layout>
          )}
        />
        <Stack.Screen
          name="attendance"
          component={() => (
            <Layout>
              <AttendancePage />
            </Layout>
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
