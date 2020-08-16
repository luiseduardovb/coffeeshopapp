import React from "react";
import { Text } from "react-native";
import { observer } from "mobx-react";
import { Content, List, Spinner } from "native-base";

//Stores
import coffeeStore from "../../stores/coffeeStore";

const CoffeeList = () => {
  if (coffeeStore.loading) return <Spinner />;

  const coffeeList = coffeeStore.coffees.map((coffee) => (
    <CoffeeItem coffee={coffee} key={coffee.id} />
  ));

  return (
    <Content>
      <List>{coffeeList}</List>
    </Content>
  );
};

export default observer(CoffeeList);
