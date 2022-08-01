import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/icon.png";
import UserContext from "../contexts/UserContext";

const SplashScreen = () => {
  const state = useContext(UserContext);

  useEffect(() => {
    // setFontLoading(true);
    state.setIsLoading(true);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.splashText}>Энд дурын текст харуулна</Text>
      <ActivityIndicator size="large" style={{ marginTop: 50 }} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  splashText: {
    textAlign: "center",
  },
  logo: {
    resizeMode: "contain",
    width: "100%",
    height: "30%",
    marginBottom: 20,
  },
});
