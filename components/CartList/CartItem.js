import React from "react";
import { ListItem, Body, Text } from "native-base";

import { TotalPrice } from "./styles";

const CartItem = ({ item }) => {
  return (
    <ListItem>
      <Body>
        <Text> {item.name} </Text>
        <Text note>
          {item.price}
          KD x {item.quantity}
        </Text>
        <TotalPrice>{item.price * item.quantity}</TotalPrice>
      </Body>
    </ListItem>
  );
};

export default CartItem;
