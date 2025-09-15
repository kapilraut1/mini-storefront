// Displays individual products and recommendations

'use client'

import ProductDescription from "@/src/components/ProductDescription";
import ProductDetails from "@/src/components/ProductDetails";
import ProductCard from "@/src/components/ProductCard"; // ✅ import your ProductCard
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

  // ✅ Get recommendations from same category
  const recommendations = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    //upto 4 products
    .slice(0, 4); 

  return (
    <div className="m-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-gray-600 text-sm mt-8 mb-5">
          Home / Products / {product.category}
        </div>

        {/* Product details */}
        <ProductDetails product={product} />
        <ProductDescription product={product} />

        {/* similar products */}
        {recommendations.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-semibold mb-6 text-slate-800">
              Special Recommendations
            </h2>
            <div className="flex justify-around sm:flex flex-wrap gap-6 xl:gap-12">
              {recommendations.map((p) => (
                <ProductCard
                  key={p.id}
                  product={{
                    ...p,
                    images: p.images.map((img) =>
                      typeof img === "string" ? img : img.src ?? ""
                    ),
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
