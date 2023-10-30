import React, { useEffect } from "react";

import { StyleSheet, View } from "react-native";
import { Button, RadioButton, Text, TextInput } from "react-native-paper";
import { Picker } from "react-native";
import useValidation from "../comman/UseValidaion";
import { useNavigation } from "@react-navigation/native";
import { CreateUserByAdmin, UpdateUserByAdmin } from "../Api/api";
import { useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";
export const AddUserForm = () => {
  let navigate = useNavigation();

  const route = useRoute();

  const value = route.params?.value || {};
  const userData = route.params?.IntialFormState || {};

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

  useEffect(() => {
    if (userData.id !== null) {
      setState(userData);
    }
  }, []);

  const OnCreateUserClick = async () => {
    if (validate()) {
      const response = await CreateUserByAdmin(state);

      if (response.message === "Account Created.") {
        Toast.show({
          type: "success", // success, error, info, or any custom type
          position: "top", // top, center, or bottom
          text1: "Employee Create",
          text2: "Employee Created successfully",
          visibilityTime: 2000, // Duration in milliseconds
          autoHide: true,
          topOffset: 30, // Adjust the distance from the top
        });
        setTimeout(() => {
          navigate.navigate("allusers");
        }, 3000);
      }

      if (response.message === "Account already exists.") {
        setErrors("Already");
      }
    }
  };

  const onUpdateUserClick = async () => {
    if (validate()) {
      const response = await UpdateUserByAdmin(state);

      if (response.message === "User updated.") {
        Toast.show({
          type: "success", // success, error, info, or any custom type
          position: "top", // top, center, or bottom
          text1: "Employee Update",
          text2: "Employee Updated successfully",
          visibilityTime: 2000, // Duration in milliseconds
          autoHide: true,
          topOffset: 30, // Adjust the distance from the top
        });
        setTimeout(() => {
          navigate.navigate("allusers");
        }, 2000);
      }
    }
  };

  return (
    <View style={styles.ParentDiv}>
      <View style={styles.mainFormDiv}>
        <View
          style={{
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          {" "}
          <Text variant="headlineMedium">
            {value === true ? "Update User" : "Create User"}
          </Text>
        </View>

        <View>
          {" "}
          <TextInput
            label="Enter Name *"
            name="name"
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
          {errors === "Already" ? (
            <View style={styles.ErrorMsg}>Account Already Exists</View>
          ) : null}
        </View>

        <View>
          {" "}
          <TextInput
            label="Enter Number *"
            name="phone"
            onChangeText={(text) => {
              if (text.length <= 10) {
                onInputChange("phone", text);
              }
            }}
            // onChangeText={(text) => onInputChange("phone", text)}
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
            // value={state.institution_id}
            onValueChange={(value) => onInputChange("institution_id", value)}
          >
            <Picker.Item value="" label="Select Institution" />
            <Picker.Item value="1" label="We2code Technology Private Limited" />
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

        {value === true ? null : (
          <View>
            {" "}
            <TextInput
              label="Enter Password"
              name="password"
              secureTextEntry={true}
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
        )}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          {value === true ? (
            <Button
              mode="contained"
              textColor="white"
              style={{
                width: "150px",
              }}
              onPress={onUpdateUserClick}
            >
              Update Now
            </Button>
          ) : (
            <Button
              mode="contained"
              textColor="white"
              style={{
                width: "150px",
              }}
              onPress={OnCreateUserClick}
            >
              Create Now
            </Button>
          )}

          <Button
            mode="outlined"
            textColor="black"
            style={{
              width: "150px",
            }}
            onPress={() => navigate.navigate("allusers")}
          >
            Cancel
          </Button>
        </View>
      </View>
    </View>
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
    backgroundColor: "rgb(231,224,236)",
    borderRadius: 0,
    borderBottom: "1px solid black",

    boxSizing: "border-box",
    fontFamily: "System",
    fontSize: 14,
    margin: 0,
    padding: 0,
    resizeMode: "none",
  },
});
