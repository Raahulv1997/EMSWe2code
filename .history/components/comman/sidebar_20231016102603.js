// Sidebar.js

import React from "react";
import { View } from "react-native";
import { Drawer, Text } from "react-native-paper";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <View style={{ flex: 1 }}>
      <Drawer.Section>
        <Drawer.Item label="Item 1" onPress={() => {}} />
        <Drawer.Item label="Item 2" onPress={() => {}} />
      </Drawer.Section>
      <Drawer.Section title="Close Drawer">
        <Drawer.Item label="Close" onPress={toggleSidebar} />
      </Drawer.Section>
    </View>
  );
};

export default Sidebar;
