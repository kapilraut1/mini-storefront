"use client";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";
import { useProductStore } from "@/src/store/useProductStore";
import ProductCard from "./ProductCard";
// import Title from "./Title";

const Products = () => {
  const products = useProductStore((s) => s.list);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [min, setMin] = useState<number | "">("");
  const [sort, setSort] = useState<"asc" | "desc" | "">("");
  const [page, setPage] = useState(1);
  const perPage = 5; // items per page

  const categories = [...new Set(products.map((p) => p.category))];

  const filtered = useMemo(() => {
    const list = products.filter(
      (p) =>
        (!search || p.name.toLowerCase().includes(search.toLowerCase())) &&
        (!category || p.category === category) &&
        (min === "" || p.price >= min)
    );
    if (sort === "asc") list.sort((a, b) => a.price - b.price);
    if (sort === "desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [products, search, category, min, sort]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  if (!products)
    return <p className="text-center py-20 text-red-500">❌ Failed to load</p>;
  if (!products.length)
    return <p className="text-center py-20">No products available</p>;

  return (
    <div className="px-6 my-20 max-w-6xl mx-auto">
    <div className='flex flex-col items-center'>
            <h2 className='py-10 text-2xl font-semibold text-slate-800'>Products</h2>
</div>
      {/* Controls */}
      <div className="flex flex-wrap gap-3 mb-6 text-sm justify-around">
        <div className="hidden xl:flex items-center w-xs text-sm gap-2 bg-slate-100 px-4 py-3 rounded-full">
          <Search size={18} className="text-slate-600" />
          <input
            className="w-full bg-transparent outline-none placeholder-slate-600"
            type="text"
            placeholder="Search products with keywords"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1); // reset page on search
            }}
          />
        </div>
        <div className="flex flex-wrap gap-4 items-center bg-slate-100 shadow-md p-4 rounded-xl">
          {/* Category Filter */}
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
            className="border border-slate-300 px-3 py-2 rounded-lg text-slate-600 focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* Price Range */}
          <div className="flex flex-col">
            <label className="text-sm text-slate-500 mb-1">Price</label>
            <input
              type="range"
              min={9}
              max={299}
              value={min === "" ? 9 : min}
              onChange={(e) => {
                setMin(Number(e.target.value));
                setPage(1);
              }}
              className="w-60 accent-indigo-500"
            />
            <div className="text-sm text-slate-600 mt-1">${min || 9}</div>
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "asc" | "desc" | "")}
            className="border border-slate-300 px-3 py-2 rounded-lg text-slate-600 focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Sort by</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products */}
      {paginated.length ? (
        <>
          <div className="grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12">
            {paginated.map((p) => (
              <ProductCard
                key={p.id}
                product={{
                  ...p,
                  images: p.images.map((i) =>
                    typeof i === "string" ? i : i.src ?? ""
                  ),
                }}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-2 mt-10 text-sm">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-3 py-1 rounded border disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              Page {page}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-3 py-1 rounded border disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p className="text-center py-20">No results found</p>
      )}
    </div>
  );
};

export default Products;
