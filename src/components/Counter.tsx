
"use client";
import { useCartStore } from "../store/useCartStore";
import { useProductStore } from "../store/useProductStore";
import toast from "react-hot-toast";

type CounterProps = {
  productId: string;
};

const Counter = ({ productId }: CounterProps) => {
  const { cartItems, addToCart, removeFromCart } = useCartStore();
  const products = useProductStore((state) => state.list);

  const product = products.find((p) => p.id === productId);
  const stock = product?.Stock || 0;

  const quantity = cartItems[productId] || 0;

  const addToCartHandler = () => {
    if (quantity >= stock) {
      toast.error(`Only ${stock} in stock`);
      return;
    }
    addToCart(productId);
    toast.success("Added to cart");
  };

  const removeFromCartHandler = () => {
    if (quantity <= 0) return;
    removeFromCart(productId);
    toast.success("Removed from cart");
  };

  return (
    <div className="inline-flex items-center gap-1 sm:gap-3 px-3 py-1 rounded border border-slate-200 max-sm:text-sm text-slate-600">
      <button
        onClick={removeFromCartHandler}
        disabled={quantity <= 0}
        className={`p-1 select-none ${
          quantity <= 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        -
      </button>

      <p className="p-1">{quantity}</p>

      <button
        onClick={addToCartHandler}
        disabled={quantity >= stock}
        className={`p-1 select-none ${
          quantity >= stock ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        +
      </button>
    </div>
  );
};

export default Counter;

