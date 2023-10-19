import React from "react";
import { Image, StyleSheet, View } from "react-native";
const UserImageBox = ({ userImage, userGender }) => {
  console.log(userGender);
  return (
    <View>
      <Image
        source={{
          uri: userImage
            ? userImage
            : userGender === "female"
            ? "https://tse2.mm.bing.net/th?id=OIP.inXSw5jbycIIlXC1dIXdiwHaIL&pid=Api&P=0&w=300&h=300"
            : "https://tse3.mm.bing.net/th?id=OIP.Lpx9j83qR_cfQuaPHuvwWQHaHw&pid=Api&P=0&h=220",
        }}
        style={styles.image}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
export default UserImageBox;
