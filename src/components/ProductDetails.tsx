'use client'

import { useCartStore } from "../store/useCartStore";
import { TagIcon, EarthIcon, CreditCardIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Counter from "./Counter";
import toast from "react-hot-toast";

// ✅ Define Product type
type ProductType = {
  id: string;
  name: string;
  category: string;
  price: number;
  mrp: number;
  images: string[];
  description?: string;
};

type ProductDetailsProps = {
  product: ProductType;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { cartItems, addToCart } = useCartStore();
  const productId = product.id;
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$";

  const router = useRouter();
  const [mainImage, setMainImage] = useState(product.images[0]);

  const addToCartHandler = () => {
    addToCart(productId);
        toast.success("Successfully added from cart")

  };

  return (
    <div className="flex max-lg:flex-col gap-12">
      {/* Product Images */}
      <div className="flex max-sm:flex-col-reverse gap-3">
        <div className="flex sm:flex-col gap-3">
          {product.images.map((image, index) => (
            <div
              key={index}
              onClick={() => setMainImage(image)}
              className="bg-slate-100 flex items-center justify-center size-26 rounded-lg group cursor-pointer"
            >
              <Image
                src={typeof image === "string" ? image : ""}
                className="group-hover:scale-103 group-active:scale-95 transition"
                alt={product.name}
                width={45}
                height={45}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center h-100 sm:size-113 bg-slate-100 rounded-lg">
          <Image src={mainImage} alt={product.name} width={250} height={250} />
        </div>
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h1 className="text-3xl font-semibold text-slate-800">{product.name}</h1>

        {/* Price */}
        <div className="flex items-start my-6 gap-3 text-2xl font-semibold text-slate-800">
          <p>
            {currency}
            {product.price}
          </p>
          <p className="text-xl text-slate-500 line-through">
            {currency}
            {product.mrp}
          </p>
        </div>

        {/* Discount */}
        <div className="flex items-center gap-2 text-slate-500">
          <TagIcon size={14} />
          <p>
            Save {(((product.mrp - product.price) / product.mrp) * 100).toFixed(0)}%
            right now
          </p>
        </div>

        {/* Cart Actions */}
        <div className="flex items-end gap-5 mt-10">
          {cartItems[productId] && (
            <div className="flex flex-col gap-3">
              <p className="text-lg text-slate-800 font-semibold">Quantity</p>
              <Counter productId={productId} />
            </div>
          )}
          <button
            onClick={() =>
              !cartItems[productId] ? addToCartHandler() : router.push("/cart")
            }
            className="bg-slate-800 text-white px-10 py-3 text-sm font-medium rounded hover:bg-slate-900 active:scale-95 transition"
          >
            {!cartItems[productId] ? "Add to Cart" : "View Cart"}
          </button>
        </div>

        <hr className="border-gray-300 my-5" />

        {/* Extra Info */}
        <div className="flex flex-col gap-4 text-slate-500">
          <p className="flex gap-3">
            <EarthIcon className="text-slate-400" /> Free shipping worldwide
          </p>
          <p className="flex gap-3">
            <CreditCardIcon className="text-slate-400" /> 100% Secured Payment
          </p>
          <p className="flex gap-3">
            <UserIcon className="text-slate-400" /> Trusted by top brands
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
