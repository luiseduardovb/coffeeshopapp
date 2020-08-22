import styled from "styled-components/native";

import { Image } from "react-native";
import { Card, Content } from "native-base";

export const VendorItemStyled = styled.Text`
  color: blue;
  font-size: 18;
`;

export const StyledImage = styled(Image)`
  height: 200;
  flex: 1;
`;

export const StyledCard = styled(Card)`
  border-radius: 0;
`;

export const StyledContent = styled(Content)`
  border-radius: 25;
`;

export const StyledView = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: auto;
  padding-right: auto;
`;
