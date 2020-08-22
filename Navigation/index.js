import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import CoffeeList from "../components/CoffeeList";
import Home from "../components/Home";
import VendorList from "../components/VendorList";
import CartList from "../components/CartList";
import CartButton from "../components/buttons/CartButton";
import Signin from "../components/authentication/Signin";
import Signup from "../components/authentication/Signup";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#b46930",
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
        options={
          ({ title: "Choose a Vendor" }, { headerRight: () => <CartButton /> })
        }
      />
      <Screen
        name="Coffees"
        component={CoffeeList}
        options={({ route }) => {
          const { vendor } = route.params;
          return {
            title: vendor.name,
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen name="Cart" component={CartList} />
    </Navigator>
  );
};

export default RootNavigator;
