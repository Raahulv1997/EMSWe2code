// Sidebar.js

import React from "react";
import { View } from "react-native";
import { Drawer, Text } from "react-native-paper";

const Sidebar = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Drawer.Section>
        <Drawer.Item label="Item 1" onPress={() => {}} />
        <Drawer.Item label="Item 2" onPress={() => {}} />
      </Drawer.Section>
    </View>
  );
};

export default Sidebar;
