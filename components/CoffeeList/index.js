import React from "react";

import { observer } from "mobx-react";
import { Content, List, Spinner } from "native-base";

//Components
import CoffeeItem from "./CoffeeItem";
//Stores
import coffeeStore from "../../stores/coffeeStore";

const CoffeeList = ({ navigation, route }) => {
  if (coffeeStore.loading) return <Spinner />;
  const { vendor } = route.params;

  const coffeeList = vendor.coffees
    .map((coffee) => coffeeStore.getCoffeeById(coffee.id))
    .map((coffee) => <CoffeeItem coffee={coffee} key={coffee.id} />);

  return (
    <Content>
      <List>{coffeeList}</List>
    </Content>
  );
};

export default observer(CoffeeList);
