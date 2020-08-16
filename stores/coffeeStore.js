import { decorate, observable } from "mobx";
import instance from "./instance";

class CoffeeStore {
  coffees = [];
  loading = true;

  fetchCoffees = async () => {
    try {
      const res = await instance.get("/coffees");
      this.coffees = res.data;
      this.loading = false;
    } catch (error) {
      console.error("CoffeeStore -> fetchCoffees-> error", error);
    }
  };
}

decorate(CoffeeStore, {
  coffees: observable,
  loading: observable,
});

const coffeeStore = new CoffeeStore();
coffeeStore.fetchCoffees();

export default coffeeStore;
