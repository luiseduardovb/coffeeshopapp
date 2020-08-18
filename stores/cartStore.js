import { decorate, observable, computed } from "mobx";
import AsyncStorage from "@react-native-community/async-storage";

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

  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = JSON.parse(items);
  };

  addItem = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.coffeId === newItem.coffeId
    );
    if (foundItem) {
      foundItem.quantity += newItem.quantity;
    } else {
      this.items.push(newItem);
      await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
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
cartStore.fetchCart();
export default cartStore;
