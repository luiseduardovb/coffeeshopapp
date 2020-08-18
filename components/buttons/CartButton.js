import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "native-base";
import { observer } from "mobx-react";

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

export default observer(CartButton);
