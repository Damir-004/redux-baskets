import React from "react";
import { addToCart } from "../store/shopReducer";
import { useAppDispatch } from "../store/store";
import { productsState } from "../types/types";
interface IProductItemProps {
  item: productsState;
}
const ProductItem: React.FC<IProductItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  return (  
    <li>
      <img src={item.img} alt={item.img} />
      <span className="span">{item.name}</span>
      <button onClick={() => dispatch(addToCart(item))}>Add Cart</button>
    </li>
  );
};

export default ProductItem;