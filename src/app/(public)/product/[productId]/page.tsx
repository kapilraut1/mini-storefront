'use client'

import ProductDescription from "@/src/components/ProductDescription";
import ProductDetails from "@/src/components/ProductDetails";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useProductStore } from "@/src/store/useProductStore";

type ProductType = {
  id: string;
  name: string;
  category: string;
  price: number;
  images: string[];
  description?: string;
  mrp: number;
};

export default function Product() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const products = useProductStore((state) => state.list);

  useEffect(() => {
    const found = products.find((p) => p.id === productId);
    if (found) {
      setProduct({
        ...found,
        images: found.images.map((img: string | { src: string }) =>
          typeof img === "string" ? img : img.src
        ),
      });
    } else {
      setProduct(null);
    }
    scrollTo(0, 0);
  }, [productId, products]);

  if (!product) {
    return null; // or a loading/empty state
  }

  return (
    <div className="mx-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-gray-600 text-sm mt-8 mb-5">
          Home / Products / {product.category}
        </div>
        <ProductDetails product={product} />
        <ProductDescription product={product} />
      </div>
    </div>
  );
}
