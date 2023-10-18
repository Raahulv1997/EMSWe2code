import React from "react";
import { View } from "react-native";
import { Button, Modal, Portal, Text, TextInput } from "react-native-paper";

const AddEventForm = ({ openEventForm, setOpenEventForm }) => {
  const hideModal = () => setOpenEventForm(false);
  const containerStyle = { backgroundColor: "white", padding: 20, margin: 20 };
  return (
    <View>
      <Portal>
        <Modal
          visible={openEventForm}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <View style={{ width: "290px" }}>
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
              //   onChangeText={(text) => onInputChange("name", text)}
              //   value={state.name}
            />
            {/* {errors.name && (
              <View>
                {errors.name.map((error) => (
                  <View key={error} style={styles.ErrorMsg}>
                    {" "}
                    {error}
                  </View>
                ))}
              </View>
            )} */}
            <TextInput
              label="Phone"
              name="phone"
              //   value={state.phone}
              //   onChangeText={(text) => onInputChange("phone", text)}
            />
            {/* {errors.phone && (
              <View>
                {errors.phone.map((error) => (
                  <View key={error} style={styles.ErrorMsg}>
                    {" "}
                    {error}
                  </View>
                ))}
              </View>
            )} */}
            <TextInput
              label="Email"
              name="email"
              //   value={state.email}
              //   onChangeText={(text) => onInputChange("email", text)}
            />
            {/* {errors.email && (
              <View>
                {errors.email.map((error) => (
                  <View key={error} style={styles.ErrorMsg}>
                    {" "}
                    {error}
                  </View>
                ))}
              </View>
            )} */}
            <TextInput
              label="Gender"
              name="gender"
              //   value={state.gender}
              //   onChangeText={(text) => onInputChange("gender", text)}
            />
            {/* {errors.gender && (
              <View>
                {errors.gender.map((error) => (
                  <View key={error} style={styles.ErrorMsg}>
                    {" "}
                    {error}
                  </View>
                ))}
              </View>
            )} */}
            <TextInput
              label="Date of Birth"
              name="date_of_birth"
              //   value={state.date_of_birth}
              //   onChangeText={(text) => onInputChange("date_of_birth", text)}
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
                // onPress={onUpdateClick}
              >
                update user
              </Button>
              <Button
                mode="contained"
                textColor="white"
                style={{
                  width: "150px",
                }}
                // onPress={hideModal}
              >
                Cancel
              </Button>
            </View>
          </View>
        </Modal>
      </Portal>
    </View>
  );
};

export default AddEventForm;
