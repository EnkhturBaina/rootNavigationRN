import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen.js";
import { FONT_FAMILY_BOLD } from "../constant";
import UserContext from "../contexts/UserContext";
import { Icon } from "@rneui/base";
import HomeScreen from "../screens/HomeScreen.js";

const Stack = createStackNavigator();
const LoginStackNavigator = (props) => {
  const state = useContext(UserContext);
  return (
    <Stack.Navigator initialRouteName="LoginTab">
      <Stack.Screen
        name="LoginTab"
        component={LoginScreen}
        options={{
          title: "",
          headerTitleStyle: {
            fontFamily: FONT_FAMILY_BOLD,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={styles.headerLeftContainer}
              onPress={() => {
                props.navigation.openDrawer();
              }}
            >
              <Icon type="feather" name="menu" />
              <Text style={styles.headerLeftText}>Login</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const HomeStackNavigator = (props) => {
  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: "",
          headerTitleStyle: {
            fontFamily: FONT_FAMILY_BOLD,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={styles.headerLeftContainer}
              onPress={() => {
                props.navigation.openDrawer();
              }}
            >
              <Text style={styles.headerLeftText}></Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export { HomeStackNavigator, LoginStackNavigator };

const styles = StyleSheet.create({
  headerLeftContainer: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  headerLeftText: {
    marginLeft: 10,
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 20,
  },
});
