import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  Button,
  Image,
} from "react-native";
import React, { useContext } from "react";
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import HomeScreenTabNavigation from "./HomeScreenTabNavigation";
import LoginScreen from "../screens/LoginScreen";
import {
  FONT_FAMILY_BOLD,
  MAIN_COLOR_GRAY,
  TEXT_COLOR_GRAY,
} from "../constant";
import { Icon } from "@rneui/base";
import UserContext from "../contexts/UserContext";
import { DrawerActions } from "@react-navigation/native";
import SplashScreen from "../screens/SplashScreen";
import { LoginStackNavigator } from "./MainStackNavigation";

const Drawer = createDrawerNavigator();

const MainDrawerNavigation = () => {
  const state = useContext(UserContext);

  function CustomDrawerContent(props) {
    // console.log("props", props);
    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <SafeAreaView
          forceInset={{
            top: "always",
            horizontal: "never",
          }}
        >
          <DrawerItemList {...props} />
          <TouchableOpacity
            style={styles.drawerBack}
            onPress={() =>
              props.navigation.dispatch(DrawerActions.closeDrawer())
            }
          >
            <View style={styles.drawerBackIconContainer}>
              <Icon name="x" type="feather" color="#000" size={30} />
            </View>
            <View style={styles.cardTextContainer}></View>
          </TouchableOpacity>
        </SafeAreaView>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.item}>
            <Text style={styles.label}>Гарах</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  if (state.isLoading) {
    return <SplashScreen />;
  } else {
    return (
      <Drawer.Navigator
        initialRouteName="HomeNav"
        screenOptions={{
          drawerStyle: {
            width: "100%",
          },
          drawerItemStyle: {
            marginBottom: 0,
          },
          drawerLabelStyle: {
            fontFamily: FONT_FAMILY_BOLD,
          },
        }}
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        {state.isLoggedIn ? (
          <Drawer.Screen
            name="Login"
            options={{
              title: "App",
              headerShown: false,
              headerTitleStyle: {
                fontFamily: FONT_FAMILY_BOLD,
              },
            }}
            component={LoginStackNavigator}
          />
        ) : (
          <>
            <Drawer.Screen
              name="HomeNav"
              component={HomeScreenTabNavigation}
              options={{
                title: "App",
                headerShown: false,
                headerTitleStyle: {
                  fontFamily: FONT_FAMILY_BOLD,
                },
              }}
            />
          </>
        )}
      </Drawer.Navigator>
    );
  }
};

export default MainDrawerNavigation;

const styles = StyleSheet.create({
  label: {
    margin: 16,
    marginBottom: 50,
    fontFamily: FONT_FAMILY_BOLD,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
  },
  drawerBack: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  drawerBackText: {
    fontFamily: FONT_FAMILY_BOLD,
  },
  drawerBackIconContainer: {
    width: 40,
    marginLeft: 10,
  },
  loanMarketHomeCard: {
    height: 60,
    borderRadius: 8,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    borderColor: MAIN_COLOR_GRAY,
    elevation: 1,
    width: "90%",
    marginBottom: 15,
    justifyContent: "flex-start",
  },
  iconContainer: {
    marginHorizontal: 10,
    elevation: 1,
    width: 40,
  },
  cardTopText: {
    fontFamily: FONT_FAMILY_BOLD,
    color: TEXT_COLOR_GRAY,
  },
  icon: {
    height: 35,
    width: 35,
    resizeMode: "contain",
  },
  cardTextContainer: {
    textAlign: "left",
  },
  cardArrow: {
    position: "absolute",
    right: 0,
  },
});
