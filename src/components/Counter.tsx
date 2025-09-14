'use client'
import { useCartStore } from "../store/useCartStore";
import toast from "react-hot-toast";
type CounterProps = {
  productId: string;
};

const Counter = ({ productId }: CounterProps) => {
  const { cartItems, addToCart, removeFromCart } = useCartStore();

  const addToCartHandler = () => {
    addToCart(productId);
    toast.success("Successfully added from cart");

  };

  const removeFromCartHandler = () => {
    removeFromCart(productId);
        toast.success("Successfully removed from cart")

  };

  return (
    <div className="inline-flex items-center gap-1 sm:gap-3 px-3 py-1 rounded border border-slate-200 max-sm:text-sm text-slate-600">
      <button onClick={removeFromCartHandler} className="p-1 select-none">-</button>
      <p className="p-1">{cartItems[productId] || 0}</p>
      <button onClick={addToCartHandler} className="p-1 select-none">+</button>
    </div>
  );
};

export default Counter;
