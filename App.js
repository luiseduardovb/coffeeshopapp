import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//Styling
import { ThemeProvider } from "styled-components";
import RootNavigator from "./Navigation";

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
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
