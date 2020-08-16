import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import VendorList from "./components/VendorList";
import CoffeeList from "./components/CoffeeList";

const theme = {
  light: {
    mainColor: "#ffffff",
    backgroundColor: "#F64C72",
    some: "#19477b",
    red: "#E12F21",
    white: "#ffffff",
  },

  dark: {
    mainColor: "#ffffff",
    backgroundColor: "#1e2ca9",
    some: "#083358",
    red: "#E12F21",
    white: "#ffffff",
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
      {/* <Home /> */}
      <VendorList />
      {/* <CoffeeList /> */}
    </ThemeProvider>
  );
}
