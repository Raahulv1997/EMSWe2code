import React from "react";
import { Dialog, Portal } from "react-native-paper";
import { Text, TouchableOpacity } from "react-native";
import { DeleteEventByAdmin } from "../Api/api";
import Toast from "react-native-toast-message";
const HolidayDeleteAlert = ({
  openDeleteAlert,
  setOpenDeleteAlert,
  id,
  setapicall,
  event,
}) => {
  const OnClickDeleteEvent = async () => {
    const response = await DeleteEventByAdmin(id);
    Toast.show({
      type: "success", // success, error, info, or any custom type
      position: "top", // top, center, or bottom
      text1: "Event Deleted Successfully",

      visibilityTime: 1000, // Duration in milliseconds
      autoHide: true,
      topOffset: 30, // Adjust the distance from the top
    });
    setTimeout(() => {
      setapicall(true);
      setOpenDeleteAlert(false);
    }, 1000);
  };

  const HideDeleteAlertFuntion = () => {
    setOpenDeleteAlert(false);
  };

  return (
    <Portal>
      <Dialog visible={openDeleteAlert} onDismiss={HideDeleteAlertFuntion}>
        <Dialog.Content>
          <Text variant="bodyMedium">
            Are you sure went to delete <b>{event}</b> event
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <TouchableOpacity
            style={{
              fontSize: 15,

              color: "red",
            }}
            onPress={OnClickDeleteEvent}
          >
            Yes
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              fontSize: 15,

              color: "green",
            }}
            onPress={HideDeleteAlertFuntion}
          >
            No
          </TouchableOpacity>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default HolidayDeleteAlert;
