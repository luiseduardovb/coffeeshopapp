import React from "react";
import defaultVendor from "../../defaultVendor.png";
import {
  Container,
  Content,
  CardItem,
  Left,
  Body,
  Right,
  ListItem,
  Thumbnail,
  Text,
  View,
} from "native-base";
import {
  VendorItemStyled,
  StyledCard,
  StyledContent,
  StyledImage,
  StyledView,
} from "./styles";

const VendorItem = ({ vendor, navigation }) => {
  console.log("VendorImage", vendor.image);
  return (
    <>
      {/* <Thumbnail
          source={
            vendor.image
              ? { uri: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F150929101049-black-coffee-stock.jpg" }
              : defaultVendor
          }
        /> */}

      <ListItem
        onPress={() => navigation.navigate("Coffees", { vendor: vendor })}
      >
        <StyledContent>
          <StyledCard>
            <CardItem cardBody>
              <StyledImage
                source={
                  vendor.image
                    ? {
                        uri:
                          "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F150929101049-black-coffee-stock.jpg",
                      }
                    : { uri: vendor.image }
                }
              />
            </CardItem>
            <CardItem>
              <Left></Left>
              <Left>
                <VendorItemStyled>{vendor.name}</VendorItemStyled>
              </Left>
              <Right></Right>
            </CardItem>
          </StyledCard>
        </StyledContent>
      </ListItem>
    </>
  );
};

export default VendorItem;
