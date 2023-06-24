import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { DELETE_TO_CART, INCREMENT, DECREMENT } from "../types/types";
import { productItem } from "../types/types";


interface ICartItemProps {
  item: productItem;
}

const CartItem = ({ item }: ICartItemProps) => {
  const dispatch = useDispatch();

  const [price, setPrice] = useState(item.price);

  const handleDelete = () => {
    dispatch({ type: DELETE_TO_CART, payload: item.id });
  };

  const handleIncrement = () => {
    const updatedItem = { ...item, count: item.count + 1 };
    dispatch({ type: INCREMENT, payload: { item: updatedItem } });
  };
  
  const handleDecrement = () => {
    if (item.count > 0) {
      const updatedItem = { ...item, count: item.count - 1 };
      dispatch({ type: DECREMENT, payload: { item: updatedItem } });
    }
  };

  useEffect(() => {
    setPrice(item.price * item.count);
  }, [item.count]);

  return (
    <li className="cart-item" key={item.id}>
      <span>{item.name}</span>
      <img src={item.img} alt={item.img} />
      <button onClick={handleDecrement}>-</button>
      <span>{item.count}</span>
      <button onClick={handleIncrement}>+</button>
      <span>{price} 000$</span>
      <button onClick={handleDelete}>x</button>
    </li>
  );
};

export default CartItem;