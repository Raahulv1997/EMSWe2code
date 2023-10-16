// Sidebar.js

import React from "react";
import { View, Text } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";

const Sidebar = ({ navigation, toggleSidebar }) => {
  return (
    <DrawerContentScrollView>
      <Drawer.Section>
        <DrawerItem
          label="Item 1"
          onPress={() => {
            // Handle item 1 click
          }}
        />
        <DrawerItem
          label="Item 2"
          onPress={() => {
            // Handle item 2 click
          }}
        />
      </Drawer.Section>
      <Drawer.Section title="Close Drawer">
        <DrawerItem label="Close" onPress={() => toggleSidebar()} />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

export default Sidebar;
