import React from "react";
import { Dialog, Portal } from "react-native-paper";
import { Text, TouchableOpacity } from "react-native";
import { punchIDUserFuntion, punchOutUserFuntion } from "../Api/api";
import Toast from "react-native-toast-message";
const PaunchAlert = ({
  isPunchAlert,
  setPunchAlert,
  punchID,
  punchName,
  setapicall,
}) => {
  const OnClickPunchInUser = async () => {
    const response = await punchIDUserFuntion();
    if (response.message === "Punch In Marked") {
      Toast.show({
        type: "success", // success, error, info, or any custom type
        position: "top", // top, center, or bottom
        text1: "Punch In",
        text2: "Punch In successfully",
        visibilityTime: 1000, // Duration in milliseconds
        autoHide: true,
        topOffset: 30, // Adjust the distance from the top
      });
      setTimeout(() => {
        setPunchAlert(false);
        setapicall(true);
      }, 1000);
    }
  };

  const onClickPunchoutUSer = async () => {
    const response = await punchOutUserFuntion(punchID);
    Toast.show({
      type: "success", // success, error, info, or any custom type
      position: "top", // top, center, or bottom
      text1: "Punch Out",
      text2: "Punch Out successfully",
      visibilityTime: 1000, // Duration in milliseconds
      autoHide: true,
      topOffset: 30, // Adjust the distance from the top
    });
    setTimeout(() => {
      setPunchAlert(false);
      setapicall(true);
    }, 1000);
  };

  const HidePunchAlertFuntion = () => {
    setPunchAlert(false);
  };

  return (
    <Portal>
      <Dialog visible={isPunchAlert} onDismiss={HidePunchAlertFuntion}>
        <Dialog.Content>
          <Text variant="bodyMedium">
            Are you sure went to <b>{punchName}</b>
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          {punchName === "Punch Out" ? (
            <TouchableOpacity
              style={{
                fontSize: 15,

                color: "red",
              }}
              onPress={onClickPunchoutUSer}
            >
              Yes
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                fontSize: 15,

                color: "red",
              }}
              onPress={OnClickPunchInUser}
            >
              Yes
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={{
              fontSize: 15,

              color: "green",
            }}
            onPress={HidePunchAlertFuntion}
          >
            No
          </TouchableOpacity>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default PaunchAlert;
