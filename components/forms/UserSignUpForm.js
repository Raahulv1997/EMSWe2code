import React, { useEffect, useState } from "react";

import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  Button,
  PaperProvider,
  RadioButton,
  Text,
  TextInput,
} from "react-native-paper";
import { Picker } from "react-native";
import useValidation from "../comman/UseValidaion";
import { useNavigation } from "@react-navigation/native";
import { CreateUserByAdmin, SignUpUser, UpdateUserByAdmin } from "../Api/api";
import { useRoute } from "@react-navigation/native";
import UserRestoreAlert from "../comman/UserRestoreAlert";
export const UserSignUpForm = () => {
  let navigate = useNavigation();
  const [IsRestoreAlert, setIsRestoreAlert] = useState(false);

  //   const route = useRoute();

  //   const value = route.params?.value || {};
  //   const userData = route.params?.IntialFormState || {};

  const IntialFormState = {
    name: "",
    email: "",
    phone: "",
    institution_id: "",
    password: "",
    gender: "",
    date_of_birth: "",
  };

  const validators = {
    name: [
      (value) =>
        value === null || value === ""
          ? "Name is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
    phone: [
      (value) =>
        value === null || value === ""
          ? "Phone is required"
          : //   : /^(\+\d{1,3}[- ]?)?\d{10}$/g.test(value)
          //   ? "Invalid Mobile number "
          value.length > 10 || value.length < 10
          ? "Phone should be 10 digit"
          : null,
    ],

    email: [
      (value) =>
        value === null || value === ""
          ? "Email is required"
          : !/^\S+@\S+\.\S+$/.test(value)
          ? "Invalid email address"
          : null,
    ],
    institution_id: [
      (value) =>
        value === null || value === ""
          ? "Institution Name is required"
          : // : /[^A-Za-z 0-9]/g.test(value)
            // ? "Cannot use special character "
            null,
    ],
    password: [
      (value) =>
        value === null || value === ""
          ? "Password is required"
          : // : /[^A-Za-z 0-9]/g.test(value)
            // ? "Cannot use special character "
            null,
    ],
    gender: [
      (value) =>
        value === null || value === ""
          ? "Gender is required"
          : // : /[^A-Za-z 0-9]/g.test(value)
            // ? "Cannot use special character "
            null,
    ],
  };

  const { state, onInputChange, setState, setErrors, errors, validate } =
    useValidation(IntialFormState, validators);

  //   useEffect(() => {
  //     if (userData.id !== null) {
  //       setState(userData);
  //     }
  //   }, []);

  const OnCreateUserClick = async () => {
    if (validate()) {
      console.log("state---" + JSON.stringify(state));
      const response = await SignUpUser(state);
      console.log("res-" + JSON.stringify(response));
      if (response.message === "Login Success") {
        navigate.navigate("login");
      }
    }
  };

  const onResetClick = () => {
    setErrors({});
    setState(IntialFormState);
  };
  return (
    <PaperProvider>
      {" "}
      <View style={styles.ParentDiv}>
        <View style={styles.mainFormDiv}>
          <View
            style={{
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            {" "}
            <Text variant="headlineMedium">Sign Up</Text>
          </View>

          <View>
            {" "}
            <TextInput
              label="Enter Name *"
              name="name"
              mode="outlined"
              onChangeText={(text) => onInputChange("name", text)}
              value={state.name}
            />
            {errors.name && (
              <View>
                {errors.name.map((error) => (
                  <View key={error} style={styles.ErrorMsg}>
                    {" "}
                    {error}
                  </View>
                ))}
              </View>
            )}
          </View>
          <View>
            {" "}
            <TextInput
              label="Enter Email * "
              name="email"
              mode="outlined"
              onChangeText={(text) => onInputChange("email", text)}
              value={state.email}
            />
            {errors.email && (
              <View>
                {errors.email.map((error) => (
                  <View key={error} style={styles.ErrorMsg}>
                    {" "}
                    {error}
                  </View>
                ))}
              </View>
            )}
          </View>

          <View>
            {" "}
            <TextInput
              label="Enter Number *"
              name="phone"
              mode="outlined"
              onChangeText={(text) => {
                if (text.length <= 10) {
                  onInputChange("phone", text);
                }
              }}
              value={state.phone}
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
          </View>

          <View>
            {" "}
            <TextInput
              label="Birth Date"
              name="date_of_birth"
              mode="outlined"
              onChangeText={(text) => onInputChange("date_of_birth", text)}
              value={state.date_of_birth}
            />
            {/* {errors.date_of_birth && (
          <View>
            {errors.date_of_birth.map((error) => (
              <View key={error} style={styles.ErrorMsg}>
                {" "}
                {error}
              </View>
            ))}
          </View>
        )} */}
          </View>
          <View>
            <Picker
              style={styles.picker}
              selectedValue={state.institution_id}
              name="institution_id "
              value={state.institution_id}
              onValueChange={(value) => onInputChange("institution_id", value)}
            >
              <Picker.Item value="" label="Select Institution *" />
              <Picker.Item
                value="1"
                label="We2code Technology Private Limited"
              />
            </Picker>
          </View>
          {errors.institution_id && (
            <View>
              {errors.institution_id.map((error) => (
                <View key={error} style={styles.ErrorMsg}>
                  {" "}
                  {error}
                </View>
              ))}
            </View>
          )}
          <View>
            <Text style={{ marginTop: "5px" }}>
              <b>Gender : *</b>
            </Text>
            <RadioButton.Group
              name="gender"
              onValueChange={(text) => onInputChange("gender", text)}
              value={state.gender}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RadioButton value="male" />
                  <Text>Male</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RadioButton value="female" />
                  <Text>Female</Text>
                </View>
              </View>
            </RadioButton.Group>
            {errors.gender && (
              <View>
                {errors.gender.map((error) => (
                  <View key={error} style={styles.ErrorMsg}>
                    {" "}
                    {error}
                  </View>
                ))}
              </View>
            )}
          </View>

          <View>
            {" "}
            <TextInput
              label="Enter Password *"
              name="password"
              secureTextEntry={true}
              mode="outlined"
              onChangeText={(text) => onInputChange("password", text)}
              value={state.password}
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
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <Button
              mode="contained"
              textColor="white"
              style={{
                width: "150px",
              }}
              onPress={OnCreateUserClick}
            >
              Create Account
            </Button>

            <Button
              mode="outlined"
              textColor="black"
              style={{
                width: "150px",
              }}
              onPress={onResetClick}
            >
              Cancel
            </Button>
          </View>

          <View style={{ alignItems: "center", marginTop: "20px" }}>
            <Text>
              You already have an account{" "}
              <TouchableOpacity onPress={() => navigate.navigate("login")}>
                <b style={{ color: "blue" }}> Click Here</b>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
        <UserRestoreAlert
          IsRestoreAlert={IsRestoreAlert}
          setIsRestoreAlert={setIsRestoreAlert}
          email={state.email}
          phone={state.phone}
        />
      </View>
    </PaperProvider>
  );
};
const styles = StyleSheet.create({
  ParentDiv: {
    flex: 1,
  },

  mainFormDiv: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },
  textBoxDivStyle: {
    flexDirection: "row",

    justifyContent: "space-between",
  },
  eventDivStyle: {
    width: "306px",
  },
  eventAreaBox: {
    margin: "2px",
  },
  TextBoxstyle: {
    width: "150px",
    margin: "2px",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8, // Adjust as needed
    marginTop: 5,
  },
  ErrorMsg: {
    color: "red",
  },

  pickerContainer: {
    flex: 1,
    borderColor: "gray",
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  picker: {
    fontSize: 12,
    height: 40,
    width: "100%",
    color: "Black",
    appearance: "none",
    backgroundColor: "white",
    borderRadius: 5,
    borderBottom: "1px solid black",

    boxSizing: "border-box",
    fontFamily: "System",
    fontSize: 14,
    marginTop: "7px",
    padding: 0,
    resizeMode: "none",
  },
});
