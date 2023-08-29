import { StyleSheet, Text, View } from "react-native";
import AppHeader from "./components/header";
import AppBody from "./components/body";
import AppFooter from "./components/footer";

export default function App() {
  return (
    <View style={styles.container}>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100vh",
    overflow: "hidden",
    fontFamily: "Poppins",
  },
});
