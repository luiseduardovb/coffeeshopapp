import React, { useState } from "react";
import defaultCoffee from "../../defaultCoffee.jpg";
import {
  Button,
  ListItem,
  Thumbnail,
  Left,
  Right,
  Body,
  Text,
} from "native-base";
import { VendorItemStyled } from "../VendorList/styles";
import NumericInput from "react-native-numeric-input";
import cartStore from "../../stores/cartStore";
import coffeeStore from "../../stores/coffeeStore";

const CoffeeItem = ({ coffee, navigation }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    const newItem = { quantity, coffeeId: coffee.id };
    cartStore.addItemToCart(newItem);
  };

  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail
          source={
            coffee.image
              ? {
                  uri:
                    "https://image.freepik.com/free-vector/black-coffee-bag-foil-package-3d-pouch_83194-956.jpg",
                }
              : { uri: coffee.image }
          }
        />
      </Left>
      <Body>
        <Text>{coffee.name}</Text>
      </Body>
      <Right>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          totalHeight={25}
          totalWidth={60}
          initValue={1}
        />
        <Button onPress={handleAdd}>
          <Text>Add</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default CoffeeItem;
