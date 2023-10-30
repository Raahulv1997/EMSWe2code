import React from "react";
import { Dialog, Portal } from "react-native-paper";
import { Text, TouchableOpacity } from "react-native";
import {
  DeleteProjectByAdmin,
  DeleteTaskApi,
  DeleteUserByAdmin,
} from "../Api/api";
import Toast from "react-native-toast-message";
const TaskDeleteAlert = ({
  isDeleteAlert,
  setDeleteAlert,
  id,
  userName,
  setapicall,
}) => {
  const OnClickDeleteUser = async () => {
    const response = await DeleteTaskApi(id);
    console.log(" response---" + JSON.stringify(response));
    if (response.message === "Deleted successfully") {
      Toast.show({
        type: "success", // success, error, info, or any custom type
        position: "top", // top, center, or bottom
        text1: "Delete Task",
        text2: "Employee task successfully",
        visibilityTime: 1000, // Duration in milliseconds
        autoHide: true,
        topOffset: 30, // Adjust the distance from the top
      });
      setTimeout(() => {
        setDeleteAlert(false);
        setapicall(true);
      }, 1000);
    }
  };

  const HideDeleteAlertFuntion = () => {
    setDeleteAlert(false);
  };

  return (
    <Portal>
      <Dialog visible={isDeleteAlert} onDismiss={HideDeleteAlertFuntion}>
        <Dialog.Content>
          <Text variant="bodyMedium">
            Are you sure went to delete <b>{userName}</b>
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <TouchableOpacity
            style={{
              fontSize: 15,

              color: "red",
            }}
            onPress={OnClickDeleteUser}
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

export default TaskDeleteAlert;
