import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppHeader from "../header";
import AppFooter from "../footer";
import AppBody from "../body";
import Task from "../project";
import { UserDetails } from "../UserDetails";
import LoginScreen from "../LoginScreen";
import { AllUsers } from "../AllUsers";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

export default function MainLayout() {
  return (
    <NavigationContainer>
      <AppHeader />
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="body" component={AppBody} />
        <Stack.Screen name="project" component={Task} />
        <Stack.Screen name="allusers" component={AllUsers} />
        <Stack.Screen name="userDetails" component={UserDetails} />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <AppFooter />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}
