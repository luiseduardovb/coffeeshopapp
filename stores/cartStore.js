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

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }

  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
  };

  addItemToCart = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.coffeeId === newItem.coffeeId
    );
    if (foundItem) {
      foundItem.quantity += newItem.quantity;
    } else {
      this.items.push(newItem);
      await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
    }
  };

  removeItemFromCart = async (itemId) => {
    this.items = this.items.filter((item) => item.coffeeId !== itemId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };
}

decorate(CartStore, {
  items: observable,
  totalQuantity: computed,
});

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
