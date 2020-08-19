import React from "react";
import cartStore from "../../stores/cartStore";
import coffeeStore from "../../stores/coffeeStore";
import CartItem from "./CartItem";
import { List, Spinner, Content } from "native-base";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
import { Alert } from "react-native";

//Styles
import { CheckoutButtonText, CheckoutButton } from "./styles";

const CartList = ({ navigation }) => {
  const handleCheckOut = () => {
    if (authStore.user) {
      cartStore.checkout;
    } else {
      Alert.alert(
        "Signin",
        "You need to sign in before completing order",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };

  if (coffeeStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...coffeeStore.getCoffeeById(item.coffeeId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);

  return (
    <Content>
      {cartList}
      <CheckoutButton onPress={cartStore.checkoutCart}>
        <CheckoutButtonText>Checkout</CheckoutButtonText>
      </CheckoutButton>
    </Content>
  );
};

export default observer(CartList);
