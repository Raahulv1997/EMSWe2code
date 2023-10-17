// import { StyleSheet, Text, View } from "react-native";
// import AppHeader from "./components/header";
// import AppBody from "./components/body";
// import AppFooter from "./components/footer";
import Toast from "react-native-toast-message";
import MainLayout from "./components/comman/mainLayout";

export default function App() {
  return (
    <>
      <Toast ref={(ref) => Toast.setRef(ref)} /> <MainLayout />
    </>
  );
}
