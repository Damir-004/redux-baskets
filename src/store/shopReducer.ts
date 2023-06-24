
interface productItem {
  img: string;
  price: number;
  name: string;
  id: number;
  count: number;
}
export interface shopState {
  shop: productItem[];
  products: productItem[];
}
const initialState: shopState = {
  shop: [],
  products: [
    {
      img: "./img/img1.jpg",
      price: 270,
      name: "BMW XM 'NEW' ",
      id: 1,
      count: 1,
    },
    {
      img: "./img/img2.jpg",
      price: 300,
      name: "Mercedes Benz G63",
      id: 2,
      count: 1,
    },
  ],
};


const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (!state.shop.includes(action.payload)) {
        return {
          ...state,
          shop: [...state.shop, action.payload],
        };
      } else {
        return state;
      }
    case DELETE_TO_CART:
      const deleteState = state.shop.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        shop: deleteState,
      };
    case INCREMENT:
      const incrementState = state.shop.map((item) =>
        item.id === action.payload.item.id ? action.payload.item : item
      );
      return {
        ...state,
        shop: incrementState,
      };
    case DECREMENT:
      const decrementState = state.shop.map((item) =>
        item.id === action.payload.item.id ? action.payload.item : item
      );
      return {
        ...state,
        shop: decrementState,
      };
    default:
      return state;
  }
};
const ADD_TO_CART = "addToCart";
const DELETE_TO_CART = "deleteToCart";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const addToCart = (payload: any) => ({ type: ADD_TO_CART, payload });
export const deleteToCart = (payload: number) => ({
  type: DELETE_TO_CART,
  payload,
});
export default reducer;