import React from "react";
import defaultCoffee from "../../defaultCoffee.jpg";
import { ListItem, Thumbnail } from "native-base";
import { VendorItemStyled } from "../VendorList/styles";

const CoffeeItem = ({ coffee, navigation }) => {
  return (
    <ListItem>
      <Thumbnail
        source={coffee.image ? { uri: coffee.image } : defaultCoffee}
      />
      <VendorItemStyled>{coffee.name}</VendorItemStyled>
    </ListItem>
  );
};

export default CoffeeItem;
