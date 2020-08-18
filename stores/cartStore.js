import { decorate, observable, computed } from "mobx";

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

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }
}

decorate(CartStore, {
  items: observable,
  totalQuantity: computed,
});

const cartStore = new CartStore();
export default cartStore;
