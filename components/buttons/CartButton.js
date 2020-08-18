import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";

//stores
import cartStore from "../../stores/cartStore";

//Styles
import { CartButtonStyled, CartTextStyled } from "./styles";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Button transparent light onPress={() => navigation.navigate("Cart")}>
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
      <CartButtonStyled type="Zocial" name="cart" />
    </Button>
  );
};

export default CartButton;
