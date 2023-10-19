import React from "react";
import { Dialog, Portal } from "react-native-paper";
import { Text, TouchableOpacity } from "react-native";
import { DeleteEventByAdmin, LeaveStatusUpdateByAdmin } from "../Api/api";
const HolidayDeleteAlert = ({
  openDeleteAlert,
  setOpenDeleteAlert,
  id,
  setapicall,
  event,
}) => {
  const OnClickDeleteEvent = async () => {
    const response = await DeleteEventByAdmin(id);

    setapicall(true);
    setOpenDeleteAlert(false);
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
