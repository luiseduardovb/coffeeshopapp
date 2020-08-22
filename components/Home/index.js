import React from "react";

// Styling
import {
  ButtonStyled,
  BottomStyling,
  HomeBackground,
  OverLayContainer,
  Title,
  TopStyling,
} from "./styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri:
          "https://www.clipartmax.com/png/full/284-2843977_brooklyn-cocoa-hot-coffee-cup-png.png",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Luis's Coffee</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled onPress={() => navigation.navigate("Vendors")}>
            Click here to skip
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
