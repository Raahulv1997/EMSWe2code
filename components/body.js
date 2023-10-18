import { Flex } from "@react-native-material/core";

import MyDrawer from "./comman/sidebar";
import TaskList from "./taskList";

export default function AppBody() {
  return (
    <Flex
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "10px",
        height: "calc(100vh - 200px)",
        padding: "10px",
        flexWrap: "wrap",
        overflow: "scroll",
        marginTop: 70,
      }}
    >
      <TaskList />
    </Flex>
  );
}
