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

const Home = () => {
  return (
    <HomeBackground
      source={{
        uri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6vosMxltHdR858CK3NDifIutsdGeuRyUhJg&usqp=CAU",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Coffee Beans</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled onPress={() => alert("Take me to the list of coffees")}>
            Click here to skip
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
