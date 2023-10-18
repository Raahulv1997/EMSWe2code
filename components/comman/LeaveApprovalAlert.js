import React from "react";
import { Dialog, Portal } from "react-native-paper";
import { Text, TouchableOpacity } from "react-native";
import { LeaveStatusUpdateByAdmin } from "../Api/api";
const LeaveApprovalAlert = ({
  statusUpdateAlert,
  setStatusUpdateAlert,
  username,
  id,
  statusValue,
  setStatusValue,
  setapicall,
}) => {
  const OnClickLeaveApproval = async () => {
    const response = await LeaveStatusUpdateByAdmin(id, statusValue);

    setapicall(true);
    setStatusUpdateAlert(false);
    setStatusValue("");
  };

  const HideStatusAlertFunction = () => {
    setStatusUpdateAlert(false);
  };

  return (
    <Portal>
      <Dialog visible={statusUpdateAlert} onDismiss={HideStatusAlertFunction}>
        <Dialog.Content>
          <Text variant="bodyMedium">
            Are you sure went Approve Leave to {username}
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <TouchableOpacity
            style={{
              fontSize: 15,

              color: "red",
            }}
            onPress={OnClickLeaveApproval}
          >
            Yes
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              fontSize: 15,

              color: "green",
            }}
            onPress={HideStatusAlertFunction}
          >
            No
          </TouchableOpacity>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default LeaveApprovalAlert;
