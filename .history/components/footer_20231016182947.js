import { AppBar } from "@react-native-material/core";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
export default function AppFooter() {
  let navigate = useNavigation();
  return (
    <AppBar style={styles.container} title="App Footer">
      <TouchableOpacity onPress={() => navigate.navigate("project")}>
        <Octicons name="tasklist" size={24} color="white">
          Task
        </Octicons>
      </TouchableOpacity>{" "}
      <TouchableOpacity onPress={() => navigate.navigate("userDetails")}>
        <Octicons name="tasklist" size={24} color="white">
          User Details
        </Octicons>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate.navigate("allusers")}>
        <Octicons name="tasklist" size={24} color="white">
          All Users
        </Octicons>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate.navigate("attendance")}>
        <Octicons name="tasklist" size={24} color="white">
          Attendance
        </Octicons>
      </TouchableOpacity>{" "}
    </AppBar>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});
