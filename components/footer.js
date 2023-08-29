import { AppBar } from "@react-native-material/core";
import { StyleSheet } from "react-native";

export default function AppFooter() {
  return <AppBar style={styles.container} title="App Footer" />;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});
