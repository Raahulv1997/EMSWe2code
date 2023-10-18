import { AppBar, Flex } from "@react-native-material/core";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import {
  Entypo,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Text } from "react-native-paper";
export default function AppFooter() {
  let navigate = useNavigation();
  return (
    <Flex direction="row" style={styles.container}>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigate.navigate("home")}
      >
        <AntDesign name="home" size={28} color="white" />
        <Text style={styles.Text}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigate.navigate("project")}
      >
        <Entypo name="list" size={28} color="white" />
        <Text style={styles.Text}>Projects</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.touch} onPress={() => navigate.navigate("userDetails")}>
        <Octicons name="tasklist" size={28} color="white">
          User Details
        </Octicons>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigate.navigate("allusers")}
      >
        <Feather name="users" size={28} color="white" />
        <Text style={styles.Text}>Users</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigate.navigate("attendance")}
      >
        <MaterialCommunityIcons
          name="account-clock-outline"
          size={28}
          color="white"
        />
        <Text style={styles.Text}>Attendance</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigate.navigate("leaves")}
      >
        <MaterialIcons name="leave-bags-at-home" size={28} color="white" />
        <Text style={styles.Text}>Leaves</Text>
      </TouchableOpacity>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: "auto",
    backgroundColor: "#333333",
    justifyContent: "space-evenly",
    padding: "10px",
    alignItems: "center",
  },
  touch: {
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    fontSize: 12,
    color: "white",
  },
});
