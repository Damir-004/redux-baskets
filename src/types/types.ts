import { shopState } from "../store/shopReducer";

export interface productItem {
  id: number;
  img: string;
  title: string;
  price: number;
  count: number; 
  name: string;
}

export interface productsState {
  img: string;
  price: number;
  name: string;
  id: number;
  count: number;
}


export interface defaultState {
  shop: shopState;
}

export const DELETE_TO_CART = "deleteToCart";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
