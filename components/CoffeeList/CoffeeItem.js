import React, { useState } from "react";
import defaultCoffee from "../../defaultCoffee.jpg";
import { ListItem, Thumbnail, Left, Right, Body, Text } from "native-base";
import { VendorItemStyled } from "../VendorList/styles";
import NumericInput from "react-native-numeric-input";

const CoffeeItem = ({ coffee, navigation }) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail
          source={coffee.image ? { uri: coffee.image } : defaultCoffee}
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
      </Right>
    </ListItem>
  );
};

export default CoffeeItem;
