// MainLayout.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Drawer as PaperDrawer,
  Provider as PaperProvider,
} from "react-native-paper";
import AppHeader from "./AppHeader";
import Sidebar from "../comman/sidebar";
import AppBody from "./AppBody";
import Task from "./project";
import { UserDetails } from "./UserDetails";
import LoginScreen from "./LoginScreen";
import AddProjectForm from "./forms/addProject";

const Stack = createNativeStackNavigator();

const MainLayout = () => {
  const token = localStorage.getItem("token");

  return (
    <PaperProvider>
      <NavigationContainer>
        {token !== null ? (
          <PaperDrawer.Navigator
            drawerContent={(props) => <Sidebar {...props} />}
          >
            <PaperDrawer.Screen name="Home" component={AppBody} />
            <PaperDrawer.Screen name="Projects" component={Task} />
            <PaperDrawer.Screen name="AddProject" component={AddProjectForm} />
            <PaperDrawer.Screen name="UserDetails" component={UserDetails} />
          </PaperDrawer.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default MainLayout;
