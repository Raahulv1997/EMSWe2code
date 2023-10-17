import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  Button,
  Text,
  Portal,
  Modal,
  PaperProvider,
  TextInput,
  Dialog,
  Card,
  Avatar,
} from "react-native-paper";

import { deleteUser, GetUserListApi, UpdateUserApi } from "./Api/api";
import useValidation from "./comman/UseValidaion";
// import Toast from "react-native-toast-message"; //
export const UserDetails = () => {
  const [userDetails, setUserDetails] = useState({});

  const [apicall, setapicall] = useState(false);
  const [visible, setVisible] = useState(false);
  const [updateAlert, setUpdateAlert] = useState(false);
  const [DeleteAlertShow, setDeleteAlertShow] = useState(false);
  const showModal = () => setVisible(true);

  const hideModal = () => {
    setVisible(false);
    setapicall(true);
  };

  const HideDeleteAlertFunction = () => {
    setDeleteAlertShow(false);
  };

  const hideDialog = () => {
    setUpdateAlert(false);
    setapicall(true);
  };
  const IntialFormState = {
    name: "",
    phone: "",
    email: "",
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
          ? "Number is required"
          : // : /^(\+\d{1,3}[- ]?)?\d{10}$/g.test(value)
          // ? "Invalid Mobile number "
          value.length > 10 || value.length < 10
          ? "Number should be 10 digit"
          : null,
    ],

    email: [
      (value) =>
        value === null || value === ""
          ? "Email required"
          : !/^\S+@\S+\.\S+$/.test(value)
          ? "Invalid email address"
          : null,
    ],
    gender: [
      (value) =>
        value === null || value === ""
          ? "Gender required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
    date_of_birth: [
      (value) =>
        value === null || value === ""
          ? "Date of Birth is required"
          : // : /[^A-Za-z 0-9]/g.test(value)
            // ? "Cannot use special character "
            null,
    ],
  };
  const { state, onInputChange, setState, setErrors, errors, validate } =
    useValidation(IntialFormState, validators);

  const containerStyle = {
    backgroundColor: "white",
    padding: 20,

    margin: "auto",
    width: "370px",
    height: "500px",
    alignItems: "center",
    justifyContent: "center",
  };

  const UserList = async () => {
    try {
      let response = await GetUserListApi();
      setState(response.user);
      setUserDetails(response.user);
      setapicall(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    UserList();
  }, [apicall]);

  const onUpdateClick = async () => {
    if (validate()) {
      const response = await UpdateUserApi(state);

      if (response.message === "User updated.") {
        Toast.show({
          text1: "User Updated Successfully",
          position: "bottom",
          type: "success",
        });
        setUpdateAlert(true);
        hideModal();
      }
    }
  };

  const onDeleteClick = async (id) => {
    const response = await deleteUser(id);
  };
  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text variant="headlineMedium">Profile</Text>
        </View>{" "}
        <View>
          <Card style={{ marginBottom: "10px" }}>
            <Card.Title
              title={userDetails.name}
              subtitle={userDetails.role}
              left={(props) => <Avatar.Icon {...props} icon="folder" />}
              // right={(props) => (
              //   <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
              // )}
            />
            <Card.Content>
              <Text variant="titleMedium">
                Institution :-{" "}
                <Text variant="bodyMedium">
                  {" "}
                  {userDetails.institution_id
                    ? userDetails.institution_id.name
                    : "not availbele"}
                </Text>{" "}
              </Text>
            </Card.Content>
            <Card.Content>
              <Text variant="titleMedium">
                Email :- <Text variant="bodyMedium">{userDetails.email}</Text>{" "}
              </Text>
            </Card.Content>
            <Card.Content>
              <Text variant="titleMedium">
                Phone :- <Text variant="bodyMedium">{userDetails.phone}</Text>{" "}
              </Text>
            </Card.Content>
            <Card.Content>
              <Text variant="titleMedium">
                Gender :- <Text variant="bodyMedium">{userDetails.gender}</Text>{" "}
              </Text>
            </Card.Content>
            <Card.Content>
              <Text variant="titleMedium">
                D.O.B :-{" "}
                <Text variant="bodyMedium">{userDetails.date_of_birth}</Text>{" "}
              </Text>
            </Card.Content>

            <Card.Actions>
              <Button onPress={showModal}>Update</Button>
              <Button onPress={() => setDeleteAlertShow(true)}>Delete</Button>
            </Card.Actions>
          </Card>
        </View>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <View style={{ width: "350px" }}>
              <View
                style={{
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                {" "}
                <Text variant="headlineMedium">Update User</Text>
              </View>

              <TextInput
                label="Name"
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
              <TextInput
                label="Phone"
                name="phone"
                value={state.phone}
                onChangeText={(text) => onInputChange("phone", text)}
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
                label="Email"
                name="email"
                value={state.email}
                onChangeText={(text) => onInputChange("email", text)}
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
              <TextInput
                label="Gender"
                name="gender"
                value={state.gender}
                onChangeText={(text) => onInputChange("gender", text)}
              />
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
              <TextInput
                label="Date of Birth"
                name="date_of_birth"
                value={state.date_of_birth}
                onChangeText={(text) => onInputChange("date_of_birth", text)}
              />
              {errors.date_of_birth && (
                <View>
                  {errors.date_of_birth.map((error) => (
                    <View key={error} style={styles.ErrorMsg}>
                      {" "}
                      {error}
                    </View>
                  ))}
                </View>
              )}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                {" "}
                <Button
                  mode="contained"
                  textColor="white"
                  style={{
                    width: "150px",
                  }}
                  onPress={onUpdateClick}
                >
                  update user
                </Button>
                <Button
                  mode="contained"
                  textColor="white"
                  style={{
                    width: "150px",
                  }}
                  onPress={hideModal}
                >
                  Cancel
                </Button>
              </View>
            </View>
          </Modal>
        </Portal>
        <Portal>
          <Dialog visible={updateAlert} onDismiss={hideDialog}>
            <Dialog.Content>
              <Text variant="bodyMedium">User Updated Successfully</Text>
            </Dialog.Content>
          </Dialog>
        </Portal>
        <Portal>
          <Dialog visible={DeleteAlertShow} onDismiss={HideDeleteAlertFunction}>
            <Dialog.Icon icon="alert" />
            <Dialog.Title style={{ textAlign: "center" }}>
              Delete user
            </Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">Are you sure went to delete</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                style={{ textColor: "red" }}
                onPress={() => {
                  onDeleteClick(userDetails.id);
                }}
              >
                Yes
              </Button>
              <Button
                style={{ color: "green" }}
                onPress={HideDeleteAlertFunction}
              >
                No
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, // Remove quotes and "px"
    marginLeft: 10, // Remove quotes and "px"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "100px",
    marginBottom: 15,
    justifyContent: "space-between",
  },
  ErrorMsg: {
    color: "red",
  },
});
