import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";

const UserContext = React.createContext();

export const UserStore = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getCustomFont = async () => {
    await Font.loadAsync({
      "Nunito-Bold": require("../../assets/fonts/Nunito-Bold.ttf"),
      "Nunito-Light": require("../../assets/fonts/Nunito-Light.ttf"),
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getCustomFont();
  }, []);

  const login = async (mobileNumber, password, rememberEmail) => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isLoading,
        setIsLoading,
        login,
        logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;

const styles = StyleSheet.create({});
