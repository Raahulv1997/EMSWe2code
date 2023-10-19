import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button, Appbar } from "react-native-paper";
import { userLogin } from "./Api/api";
import UseValidation from "./comman/UseValidaion";

const LoginScreen = () => {
  let navigate = useNavigation();
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
        localStorage.setItem("token", response.data.token);
        setState({ phone: "", password: "" });
        navigate.navigate("body");
      }
      if (response.message === "Invalid login information") {
        setErrors("invalid Information");
      }
      // Handle login logic here
    }
  };

  return (
    <View style={styles.container}>
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
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          Login
        </Button>
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
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default LoginScreen;
