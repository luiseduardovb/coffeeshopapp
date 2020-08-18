import React from "react";
import { ListItem, Body, Text, Right } from "native-base";

//Styling
import { TotalPrice, TrashIcon } from "./styles";

//Stores
import cartStore from "../../stores/cartStore";

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
      <Right>
        <TrashIcon
          name="trash"
          type="Ionicons"
          onPress={() => cartStore.removeItemFromCart(item.id)}
        />
      </Right>
    </ListItem>
  );
};

export default CartItem;
