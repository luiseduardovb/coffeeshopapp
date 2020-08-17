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
          "https://thecoffeebox.club/wp-content/uploads/2020/06/Cafe-de-Honduras-con-scoop_1.jpg",
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
