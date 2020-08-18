import { decorate, observable } from "mobx";

class CartStore {
  items = [];

  // items = [
  //   {
  //     coffeeId: 1,
  //     quantity: 5,
  //   },
  //   {
  //     coffeeId: 2,
  //     quantity: 3,
  //   },
  // ];

  addItem = (newItem) => {
    const foundItem = this.items.find(
      (item) => item.coffeId === newItem.coffeId
    );
    if (foundItem) {
      foundItem.quantity += newItem.quantity;
    } else {
      this.items.push(newItem);
    }
  };
}

decorate(CartStore, {});

const cartStore = new CartStore();
export default cartStore;
