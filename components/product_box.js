import { Flex, Box, Text, Badge } from "@react-native-material/core";
import { Image, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AddToCart from "./add_to_cart";

export default function ProductBox(props) {
  return (
    <Flex
      fill
      style={{
        backgroundColor: "#FFF",
        flexDirection: "column",
        minWidth: "calc(50% - 15px)",
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.54,
        elevation: 3,
        borderRadius: 5,
        overflow: "hidden",
      }}
    >
      <View style={{ width: "100%" }}>
        <Image
          source={require("../assets/1.jpg")}
          style={{ width: "100%", height: "100px" }}
        />
      </View>
      <View style={{ padding: "10px" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Badge
            style={{
              width: "fit-content",
            }}
            color="#6200ee2b"
          >
            <Text
              style={{
                color: "#333",
                fontSize: "10px",
              }}
            >
              CATEGORY
            </Text>
          </Badge>
          <Badge
            style={{
              width: "fit-content",
              display: "flex",
              flexDirection: "row",
              gap: "3px",
              color: "#fff",
            }}
            color="primary"
          >
            4 <AntDesign name="star" color="yellow" />
          </Badge>
        </View>
        <Text>Product Name</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            gap: "10px",
          }}
        >
          <Text
            color="red"
            style={{ textDecorationLine: "line-through", fontSize: "13px" }}
          >
            ₹500/-
          </Text>
          <Text color="green" style={{ fontWeight: "600", fontSize: "16px" }}>
            ₹400/-
          </Text>
        </View>
      </View>
      <AddToCart qty={props.qty} />
    </Flex>
  );
}
