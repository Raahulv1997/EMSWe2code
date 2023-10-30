import React from "react";
import { Dialog, Portal } from "react-native-paper";
import { Text, TouchableOpacity } from "react-native";
import { RestoreUserAccount } from "../Api/api";

const UserRestoreAlert = ({
  IsRestoreAlert,
  setIsRestoreAlert,
  email,
  phone,
}) => {
  console.log("emailll--" + email);
  console.log("phone--" + phone);

  const onRestoreClick = async () => {
    const response = await RestoreUserAccount(email, phone, "restore");
  };

  const onRecreateClick = async () => {
    const response = await RestoreUserAccount(email, phone, "recreate");
  };

  const HideRestoreAlertFuntion = () => {
    setIsRestoreAlert(false);
  };

  return (
    <Portal>
      <Dialog visible={IsRestoreAlert} onDismiss={HideRestoreAlertFuntion}>
        <Dialog.Content>
          <Text variant="bodyMedium">
            Your account already exist &nbsp;<b>Please change</b>
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <TouchableOpacity
            style={{
              fontSize: 15,

              color: "red",
            }}
            onPress={onRestoreClick}
          >
            Restore
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              fontSize: 15,

              color: "green",
            }}
            onPress={onRecreateClick}
          >
            Recreate
          </TouchableOpacity>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default UserRestoreAlert;
