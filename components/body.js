import { Flex } from "@react-native-material/core";

import ProductBox from "./product_box";
import TaskList from "./task_list";

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
      <ProductBox qty={1} />
      <ProductBox />
      <ProductBox qty={5} />
      <ProductBox qty={2} />
      <ProductBox />
      <ProductBox />
    </Flex>
  );
}
