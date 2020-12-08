import { toast } from "react-toastify";
import { ShopCartItem } from "../store/shopCart/reducer";
import { setLocalStorage, removeLocalStorage } from "./auth";

const PREFIX = "SE_";
const name = "basket";
export const basketLS = PREFIX + name;

export const addItemToLS = (item: ShopCartItem) => {
  if (!item) {
    toast.dark("Something went wrong, please try again");
  } else {
    const getItems = localStorage.getItem(basketLS);
    let basket = getItems ? JSON.parse(getItems) : [];
    const alreadyAdded = basket.filter((basketItem: ShopCartItem) =>
      basketItem.product._id === item.product._id
        ? basketItem.size === item.size
          ? basketItem
          : undefined
        : undefined
    );
    if (alreadyAdded.length !== 0) {
      toast.dark("This item already is in the basket");
    } else {
      basket.push(item);
      setLocalStorage(name, basket);
      toast.dark("Product added successfully");
    }
  }
};

export const removeItemFromLS = (item: ShopCartItem) => {
  console.log("test");
  if (!item) {
    toast.dark("Something went wrong, please try again");
  } else {
    const getItems = localStorage.getItem(basketLS);
    if (!getItems?.includes(JSON.stringify(item.key)))
      toast.dark("Item has not been added to the basket");
    else if (getItems?.includes(JSON.stringify(item))) {
      let basket = getItems ? JSON.parse(getItems) : [];
      const newBasket = basket.filter(
        (basketItem: ShopCartItem) => basketItem.key !== item.key
      );
      setLocalStorage(name, newBasket);
      toast.dark("Product removed successfully");
    }
  }
};

export const setQuantityInLS = (key: number, quantity: number) => {
  if (!key && !quantity) {
    toast.dark("Something went wrong, please try again");
  } else {
    const getItems = localStorage.getItem(basketLS);
    let basket = getItems ? JSON.parse(getItems) : [];
    const newBasket = basket.filter((basketItem: ShopCartItem) =>
      basketItem.key === key ? (basketItem.quantity = quantity) : basketItem
    );
    setLocalStorage(name, newBasket);
  }
};

export const clearBasket = () => {
  removeLocalStorage(name);
};
