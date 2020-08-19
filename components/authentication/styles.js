import styled from "styled-components/native";

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: green;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthOther = styled.Text`
  color: #ffffff;
  margin-top: 15px;
`;

export const AuthTitle = styled.Text`
  color: blue;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: white;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: orange;
  border-bottom-color: orange;
  border-bottom-width: 1px;
`;
