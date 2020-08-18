import { decorate, observable } from "mobx";

class CartStore {
  items = [
    {
      coffeeId: 1,
      quantity: 5,
    },
    {
      coffeeId: 2,
      quantity: 3,
    },
  ];
}

decorate(CartStore, {
  items: observable,
});

const cartStore = new CartStore();
export default cartStore;
