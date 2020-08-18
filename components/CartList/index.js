import React from "react";
import cartStore from "../../stores/cartStore";
import coffeeStore from "../../stores/coffeeStore";
import CartItem from "./CartItem";
import { List } from "native-base";

const CartList = () => {
  const cartList = cartStore.items
    .map((item) => ({
      ...coffeeStore.getCoffeeById(item.coffeeId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);

  return <List>{cartList}</List>;
};

export default CartList;
