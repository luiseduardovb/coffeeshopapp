import React from "react";
import { useNavigation } from "@react-navigation/native";

//Styles
import { CartButtonStyled } from "./styles";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <CartButtonStyled
      onPress={() => navigation.navigate("Cart")}
      type="Zocial"
      name="cart"
    />
  );
};

export default CartButton;
