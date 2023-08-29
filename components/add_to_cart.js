import { IconButton, Stack } from "@react-native-material/core";
import { AntDesign } from "@expo/vector-icons";
import { View, Button } from "react-native";
import { useState } from "react";

export default function AddToCart(props) {
  const [cartQty, setCartQty] = useState(props.qty || 0);

  return cartQty ? (
    <Stack
      fill
      center
      spacing={4}
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 10,
        marginBottom: 10,
        gap: 5,
      }}
    >
      {/* <IconButton
        color="#6200ee"
        height={"40px"}
        icon={(props) => (
          <AntDesign
            style={{ margin: 0 }}
            name="minus"
            size={16}
            color="#6200ee"
          />
        )}
      /> */}
      <Button title={"-"} />
      <Button
        style={{
          width: "100%",
          marginBottom: "0",
        }}
        size={24}
        title={cartQty}
        disabled
      />
      <Button
        style={{
          width: "100%",
          justifyContent: "center",
          paddingHorizontal: 0,
        }}
        size={30}
        title={"+"}
      />
      {/* <IconButton
        height={"40px"}
        color="#6200ee"
        icon={(props) => (
          <AntDesign
            style={{ margin: 0 }}
            name="plus"
            size={16}
            color="#6200ee"
          />
        )}
      /> */}
    </Stack>
  ) : (
    <Button
      style={{ marginHorizontal: 10, marginBottom: 10 }}
      size={20}
      title={"Add to cart"}
    />
  );
}
