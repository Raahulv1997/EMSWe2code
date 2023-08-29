import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppHeader from "./header";
import AppFooter from "./footer";
import { StyleSheet } from 'react-native';
import AppBody from "../components/body"
import Task from "./project";
const Stack = createNativeStackNavigator();
export default function MainLayout() {
  return (
    <NavigationContainer>
      <AppHeader />
      <Stack.Navigator style={styles.container}>
        <Stack.Screen
          name="body"
          component={AppBody}
        />
         <Stack.Screen
          name="project"
          component={Task}
        />
      </Stack.Navigator>
      <AppFooter />
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
  