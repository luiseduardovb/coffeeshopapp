import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import CoffeeList from "./components/CoffeeList";
import Home from "./components/Home";
import VendorList from "./components/VendorList";

//Styling
import { ThemeProvider } from "styled-components";

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

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <NavigationContainer>
        <Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#90d4ed",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Screen
            name="Vendors"
            component={VendorList}
            options={{ title: "Choose a Vendor" }}
          />
          <Screen
            name="Coffees"
            component={CoffeeList}
            options={({ route }) => {
              const { vendor } = route.params;
              return {
                title: vendor.name,
              };
            }}
          />
        </Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
