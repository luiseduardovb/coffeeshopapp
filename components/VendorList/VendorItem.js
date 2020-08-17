import React from "react";
import defaultVendor from "../../defaultVendor.png";
import { ListItem, Thumbnail } from "native-base";
import { VendorItemStyled } from "./styles";

const VendorItem = ({ vendor, navigation }) => {
  console.log("VendorImage", vendor.image);
  return (
    <ListItem
      onPress={() => navigation.navigate("Coffees", { vendor: vendor })}
    >
      <Thumbnail
        source={vendor.image ? { uri: vendor.image } : defaultVendor}
      />
      <VendorItemStyled>{vendor.name}</VendorItemStyled>
    </ListItem>
  );
};

export default VendorItem;
