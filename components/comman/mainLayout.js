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
import UserAttendenceHistory from "../userAttendenceHistory";
import { Provider } from "react-redux";
import store from "../Redux/store";
import { Leaves } from "../Leaves";
import { EventHoliday } from "../EventHoliday";
import { StyleSheet, View } from "react-native";
import { AddUserForm } from "../forms/AddUserForm";
import { UserSignUpForm } from "../forms/UserSignUpForm";
import { UserDashboard } from "../UserDashboard";
import { UserLeave } from "../UserLeave";
import { AddLeaveForm } from "../forms/AddLeaveForm";
import Toast from "react-native-toast-message";
import AdminDashboard from "../AdminDashboard";
import { AddTask } from "../forms/AddTask";
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
  const type = localStorage.getItem("type");
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={
            token && type === "admin"
              ? "AdminDashboard"
              : token && type === "employee"
              ? "userdashboard"
              : "login"
          }
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
            name="AdminDashboard"
            component={() => (
              <Layout>
                <AdminDashboard />
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
            name="userdashboard"
            component={() => (
              <Layout>
                <UserDashboard />
              </Layout>
            )}
          />

          <Stack.Screen
            name="userLeave"
            component={() => (
              <Layout>
                <UserLeave />
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
            name="addtask"
            component={() => (
              <Layout>
                <AddTask />
              </Layout>
            )}
          />
          <Stack.Screen
            name="adduserform"
            component={() => (
              <Layout>
                <AddUserForm />
              </Layout>
            )}
          />

          <Stack.Screen
            name="addleaveform"
            component={() => (
              <Layout>
                <AddLeaveForm />
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
            name="userattendancehistory"
            component={() => (
              <Layout>
                <UserAttendenceHistory />
              </Layout>
            )}
          />
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="signup"
            component={UserSignUpForm}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "space-between",
    height: "100vh",
    overflow: "hidden",
    fontFamily: "Poppins",
  },
});
