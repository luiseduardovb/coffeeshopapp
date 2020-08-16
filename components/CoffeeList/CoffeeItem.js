import React from "react";
import { VendorItemStyled } from "../VendorList/styles";

const CoffeeItem = ({ coffee }) => {
  return <VendorItemStyled>{coffee.name}</VendorItemStyled>;
};

export default CoffeeItem;
