import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import CoffeeList from "../components/CoffeeList";
import Home from "../components/Home";
import VendorList from "../components/VendorList";
import CartList from "../components/CartList";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Cart"
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
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
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
      <Screen name="Cart" component={CartList} />
    </Navigator>
  );
};

export default RootNavigator;
