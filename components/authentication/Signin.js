import React, { useState } from "react";
import { observer } from "mobx-react";

//Stores
import authStore from "../../stores/authStore";

//Styling
import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthOther,
} from "./styles";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user);
    if (authStore.user) navigation.replace("Cart");
  };

  return (
    <AuthContainer>
      <AuthTitle>Signin</AuthTitle>
      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="#ffffff"
      />
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#ffffff"
        secureTextEntry={true}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther>Click to register!</AuthOther>
    </AuthContainer>
  );
};

export default observer(Signin);
