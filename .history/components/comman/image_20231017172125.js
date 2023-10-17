import React from "react";

export default function UserImage({ userImage, userGender }) {
  return (
    <Image
      source={{
        uri: userImage
          ? userImage
          : userGender === "female"
          ? "https://tse2.mm.bing.net/th?id=OIP.inXSw5jbycIIlXC1dIXdiwHaIL&pid=Api&P=0&w=300&h=300"
          : "https://tse3.mm.bing.net/th?id=OIP.Lpx9j83qR_cfQuaPHuvwWQHaHw&pid=Api&P=0&h=220",
      }}
      style={styles.profilePic}
    />
  );
}
