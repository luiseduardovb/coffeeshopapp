import React from "react";
import { observer } from "mobx-react";
import { Content, List, Spinner } from "native-base";

//Stores
import vendorStore from "../../stores/vendorStore";

const VendorList = () => {
  if (vendorStore.loading) return <Spinner />;

  const vendorList = vendorStore.vendors.map((vendor) => (
    <VendorItem vendor={vendor} key={vendor.id} />
  ));

  return (
    <Content>
      <List>{vendorList}</List>
    </Content>
  );
};

export default observer(VendorList);
