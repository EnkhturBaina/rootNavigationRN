import { StyleSheet, Text, View, Image, Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_LIGHT,
  MAIN_COLOR,
  MAIN_COLOR_GRAY,
} from "../constant";
import { HomeStackNavigator, LoginStackNavigator } from "./MainStackNavigation";
import profile_icon from "../../assets/tabBarIcons/profile_icon.png";
import profile_icon_filled from "../../assets/tabBarIcons/profile_icon_filled.png";

const Tab = createBottomTabNavigator();
const HomeScreenTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopStartRadius: 25,
          borderTopEndRadius: 25,
          position: "absolute",
          borderColor: MAIN_COLOR_GRAY,
          borderWidth: 1,
          height: Platform.OS == "ios" ? 70 : 60,
          paddingBottom: Platform.OS == "ios" ? 20 : 10,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: FONT_FAMILY_BOLD,
        },
      }}
    >
      <Tab.Screen
        name="tab1"
        component={LoginStackNavigator}
        options={{
          headerShown: false,
          title: "1",
          tabBarIcon: ({ image, focused }) => {
            image = focused ? profile_icon_filled : profile_icon;
            return (
              <Image
                style={{ width: 25, resizeMode: "contain" }}
                source={image}
              />
            );
          },
          tabBarInactiveTintColor: MAIN_COLOR_GRAY,
          tabBarActiveTintColor: MAIN_COLOR,
        }}
      />
      <Tab.Screen
        name="tab2"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          title: "2",
          tabBarIcon: ({ image, focused }) => {
            image = focused ? profile_icon_filled : profile_icon;
            return (
              <Image
                style={{ width: 25, resizeMode: "contain" }}
                source={image}
              />
            );
          },
          tabBarInactiveTintColor: MAIN_COLOR_GRAY,
          tabBarActiveTintColor: MAIN_COLOR,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreenTabNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputIcon: {
    marginHorizontal: 10,
  },
});
