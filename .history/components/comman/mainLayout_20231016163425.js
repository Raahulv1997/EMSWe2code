import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
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

export const navigationRef = React.createRef();

function MainLayout() {
  const navigation = useNavigation();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="body"
          component={AppBody}
          options={{
            header: () => <AppHeader />,
          }}
        />
        <Stack.Screen
          name="project"
          component={Task}
          options={{
            header: () => <AppHeader />,
          }}
        />
        <Stack.Screen
          name="allusers"
          component={AllUsers}
          options={{
            header: () => <AppHeader />,
          }}
        />
        <Stack.Screen
          name="userDetails"
          component={UserDetails}
          options={{
            header: () => <AppHeader />,
          }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      {getCurrentRouteName(navigation) !== "login" && <AppFooter />}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}

function getCurrentRouteName(navigation) {
  const route = navigationRef.current?.getCurrentRoute();
  return route ? route.name : "";
}

export default MainLayout;
