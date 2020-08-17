import React from "react";
import { observer } from "mobx-react";
import { Content, List, Spinner } from "native-base";

//Components
import VendorItem from "./VendorItem";

//Stores
import vendorStore from "../../stores/vendorStore";

const VendorList = ({ navigation }) => {
  if (vendorStore.loading) return <Spinner />;

  const vendorList = vendorStore.vendors.map((vendor) => (
    <VendorItem vendor={vendor} key={vendor.id} navigation={navigation} />
  ));

  return (
    <Content>
      <List>{vendorList}</List>
    </Content>
  );
};

export default observer(VendorList);
