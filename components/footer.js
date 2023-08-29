import { AppBar } from "@react-native-material/core";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Octicons  } from "@expo/vector-icons";
export default function AppFooter() {
  let navigate = useNavigation()
  return (
    <AppBar style={styles.container} title="App Footer">
      <TouchableOpacity onPress={()=>navigate.navigate("project")}>
      <Octicons name="tasklist" size={24} color="white" />
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