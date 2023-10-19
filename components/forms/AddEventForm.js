import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Modal,
  Portal,
  RadioButton,
  Text,
  TextInput,
} from "react-native-paper";
import { CreateEventByAdmin, UpdateEventByAdmin } from "../Api/api";
import useValidation from "../comman/UseValidaion";

const AddEventForm = ({
  openEventForm,
  setOpenEventForm,
  setapicall,
  data,
  type,
}) => {
  const hideModal = () => {
    setOpenEventForm(false);
    setErrors({});
  };
  console.log("type--" + type);
  // const IntialFormState = {
  //   id: data.id,
  //   start_date: data.start_date,
  //   end_date: data.end_date,
  //   event: data.event,
  //   event_type: data.event_type,
  // };

  const IntialFormState = {
    id: "",
    start_date: "",
    end_date: "",
    event: "",
    event_type: "",
  };

  const validators = {
    start_date: [
      (value) =>
        value === null || value === ""
          ? "Start Date is required"
          : // : /[^A-Za-z 0-9]/g.test(value)
            // ? "Cannot use special character "
            null,
    ],
    event: [
      (value) =>
        value === null || value === ""
          ? "Event Name is required"
          : // : /[^A-Za-z 0-9]/g.test(value)
            // ? "Cannot use special character "
            null,
    ],

    event_type: [
      (value) =>
        value === null || value === ""
          ? "Event Type required"
          : // : !/^\S+@\S+\.\S+$/.test(value)
            // ? "Invalid email address"
            null,
    ],
  };

  const { state, onInputChange, setState, setErrors, errors, validate } =
    useValidation(IntialFormState, validators);

  useEffect(() => {
    if (data.id !== null) {
      setState(data);
    }
  }, [data]);
  const onCreateEventClick = async () => {
    if (validate()) {
      console.log("state---" + JSON.stringify(state));

      const response = await CreateEventByAdmin(state);
      if (response.success === true) {
        hideModal();
        setState({
          start_date: "",
          end_date: "",
          event_type: "",
          event: "",
        });
        setapicall(true);
      }
    }
  };

  const onUpdateEventClick = async () => {
    if (validate()) {
      console.log("state---" + JSON.stringify(state));

      const response = await UpdateEventByAdmin(state);
      if (response.message === "Updated Successfully") {
        hideModal();
        setState({
          start_date: "",
          end_date: "",
          event_type: "",
          event: "",
        });
        setapicall(true);
      }
    }
  };
  const containerStyle = { backgroundColor: "white", padding: 20, margin: 20 };
  return (
    <View>
      <Portal>
        <Modal
          visible={openEventForm}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <View style={{ width: "200px" }}>
            <View
              style={{
                alignItems: "center",
              }}
            >
              {" "}
              <Text variant="headlineMedium">
                {type === "create" ? "Create Holiday" : "Update Holiday"}
              </Text>
            </View>
            <View style={styles.textBoxDivStyle}>
              <View>
                {" "}
                <TextInput
                  label="Start Date *"
                  name="start_date"
                  style={styles.TextBoxstyle}
                  onChangeText={(text) => onInputChange("start_date", text)}
                  value={state.start_date}
                />
                {errors.start_date && (
                  <View>
                    {errors.start_date.map((error) => (
                      <View key={error} style={styles.ErrorMsg}>
                        {" "}
                        {error}
                      </View>
                    ))}
                  </View>
                )}
              </View>
              <View>
                <TextInput
                  label="End Date"
                  name="end_date"
                  style={styles.TextBoxstyle}
                  value={state.end_date}
                  onChangeText={(text) => onInputChange("end_date", text)}
                />
              </View>
            </View>
            <View style={styles.eventDivStyle}>
              <TextInput
                label="Event Name *"
                name="event"
                value={state.event}
                onChangeText={(text) => onInputChange("event", text)}
                multiline={true} // Set to true to enable multi-line input
                numberOfLines={3} // Set the number of visible lines (optional)
                style={styles.eventAreaBox} // Custom styling (optional)
              />
              {errors.event && (
                <View>
                  {errors.event.map((error) => (
                    <View key={error} style={styles.ErrorMsg}>
                      {" "}
                      {error}
                    </View>
                  ))}
                </View>
              )}
            </View>

            <View>
              <Text style={{ marginTop: "10px" }}>
                <b>Event Type:</b>
              </Text>
              <RadioButton.Group
                name="event_type"
                onValueChange={(text) => onInputChange("event_type", text)}
                value={state.event_type}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButton value="event" />
                    <Text>Event</Text>
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButton value="holiday" />
                    <Text>Holiday</Text>
                  </View>
                </View>
              </RadioButton.Group>
              {errors.event_type && (
                <View>
                  {errors.event_type.map((error) => (
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
              {" "}
              {type === "create" ? (
                <Button
                  mode="contained"
                  textColor="white"
                  style={{
                    width: "150px",
                  }}
                  onPress={onCreateEventClick}
                >
                  Create Now
                </Button>
              ) : (
                <Button
                  mode="contained"
                  textColor="white"
                  style={{
                    width: "150px",
                  }}
                  onPress={onUpdateEventClick}
                >
                  update Now
                </Button>
              )}
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
    </View>
  );
};
const styles = StyleSheet.create({
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
  ErrorMsg: {
    color: "red",
  },
});
export default AddEventForm;
