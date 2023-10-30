import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  TextInput,
  Button,
  Appbar,
  ActivityIndicator,
  MD2Colors,
} from "react-native-paper";
import { userLogin } from "./Api/api";
import UseValidation from "./comman/UseValidaion";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
const LoginScreen = () => {
  let navigate = useNavigation();
  let dispatch = useDispatch();
  const IntialFormState = {
    phone: "",
    password: "",
  };

  const validators = {
    phone: [
      (value) =>
        value === null || value.trim() === "" ? "Phone is required" : null,
    ],
    password: [(value) => (value === "" ? "Password is required" : null)],
  };
  const { state, onInputChange, setState, setErrors, errors, validate } =
    UseValidation(IntialFormState, validators);

  const handleLogin = async () => {
    if (validate()) {
      const response = await userLogin(state.phone, state.password);

      if (response.message === "Login Success") {
        setState({ phone: "", password: "" });
        if (response.data.role === "admin") {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("type", response.data.role);
          dispatch({
            payload: response.data.token,
            type: "UPDATE_TOKEN",
          });

          Toast.show({
            type: "success", // success, error, info, or any custom type
            position: "top", // top, center, or bottom
            text1: "Login successfully",

            visibilityTime: 1000, // Duration in milliseconds
            autoHide: true,
            topOffset: 30, // Adjust the distance from the top
          });
          setTimeout(() => {
            navigate.navigate("AdminDashboard");
          }, 1000);
        } else {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("type", response.data.role);

          Toast.show({
            type: "success", // success, error, info, or any custom type
            position: "top", // top, center, or bottom
            text1: "Login successfully",

            visibilityTime: 1000, // Duration in milliseconds
            autoHide: true,
            topOffset: 30, // Adjust the distance from the top
          });
          setTimeout(() => {
            navigate.navigate("userdashboard");
          }, 1000);
        }
      }
      if (response.message === "Invalid login information") {
        setErrors("invalid Information");
      }
      // Handle login logic here
    }
  };

  return (
    <View style={styles.container}>
      {/* <ActivityIndicator
      animating={true}
      color={MD2Colors.blue800}
      size="large"
    /> */}
      <View style={styles.ChildDiv}>
        <Appbar.Header style={styles.AppBarHeader}>
          <Appbar.Content style={styles.heading} title="Login" />
        </Appbar.Header>
        <TextInput
          label="Phone Number"
          name="phone"
          value={state.phone}
          onChangeText={(text) => onInputChange("phone", text)}
          mode="outlined"
          style={styles.input}
        />
        {errors.phone && (
          <View>
            {errors.phone.map((error) => (
              <View key={error} style={styles.ErrorMsg}>
                {" "}
                {error}
              </View>
            ))}
          </View>
        )}
        <TextInput
          label="Password"
          name="password"
          value={state.password}
          onChangeText={(text) => onInputChange("password", text)}
          mode="outlined"
          secureTextEntry
          style={styles.input}
        />
        {errors.password && (
          <View>
            {errors.password.map((error) => (
              <View key={error} style={styles.ErrorMsg}>
                {" "}
                {error}
              </View>
            ))}
          </View>
        )}

        {errors === "invalid Information" ? (
          <View style={styles.ErrorMsg}>Invalid Login Information</View>
        ) : null}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.button}
            labelStyle={styles.buttonText}
          >
            Login
          </Button>
          <Button
            mode="contained"
            onPress={() => {
              navigate.navigate("signup");
            }}
            style={styles.button}
            labelStyle={styles.buttonText}
          >
            Sign Up
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
  },
  AppBarHeader: {
    width: "300px",
  },
  ErrorMsg: {
    color: "red",
  },

  ChildDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Center horizontally
    width: "300px",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", // Center horizontally
  },
  input: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#2196F3", // Change to your desired button color
    marginRight: "4px",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default LoginScreen;
