'use client'

import { useState } from "react";

//Defining Product type
type ProductType = {
  id: string;
  name: string;
  description?: string;
};

type ProductDescriptionProps = {
  product: ProductType;
};

const ProductDescription = ({ product }: ProductDescriptionProps) => {
  const [selectedTab, setSelectedTab] = useState("Description");

  return (
    <div className="my-18 text-sm text-slate-600">
      {/* Container */}
      <div className="flex border-b border-slate-200 mb-6 max-w-2xl">
        <button
          className={`${
            selectedTab === "Description"
              ? "border-b-[1.5px] font-semibold"
              : "text-slate-400"
          } px-3 py-2 font-medium`}
          onClick={() => setSelectedTab("Description")}
        >
          Description
        </button>
      </div>

      {/* Description */}
      {selectedTab === "Description" && (
        <p className="max-w-xl">{product.description}</p>
      )}
    </div>
  );
};

export default ProductDescription;
