'use client'
import { Search } from "lucide-react";
import { useState, useMemo } from 'react'
import { useProductStore } from '@/src/store/useProductStore'
import ProductCard from './ProductCard'
import Title from './Title'

const Products = () => {
  const products = useProductStore((s) => s.list)

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [min, setMin] = useState<number | ''>('')
  const [max, setMax] = useState<number | ''>('')
  const [sort, setSort] = useState<'asc' | 'desc' | ''>('')

  const categories = [...new Set(products.map((p) => p.category))]

  const filtered = useMemo(() => {
    const list = products.filter(
      (p) =>
        (!search || p.name.toLowerCase().includes(search.toLowerCase())) &&
        (!category || p.category === category) &&
        (min === '' || p.price >= min) &&
        (max === '' || p.price <= max)
    )
    if (sort === 'asc') list.sort((a, b) => a.price - b.price)
    if (sort === 'desc') list.sort((a, b) => b.price - a.price)
    return list
  }, [products, search, category, min, max, sort])

  if (!products) return <p className="text-center py-20 text-red-500">❌ Failed to load</p>
  if (!products.length) return <p className="text-center py-20">No products available</p>


  return (
    <div className="px-6 my-20 max-w-6xl mx-auto">
      <Title
        title="Products"
        description={`Showing ${filtered.length} of ${products.length}`}
        href="/"
      />

      {/* Controls */}
      <div className="flex flex-wrap gap-3 mb-6 text-sm">
                 <div
                            className="hidden xl:flex items-center w-xs text-sm gap-2 bg-slate-100 px-4 py-3 rounded-full"
                        >
                            <Search size={18} className="text-slate-600" />
                            <input
                                className="w-full bg-transparent outline-none placeholder-slate-600"
                                type="text"
                                placeholder="Search products with keywords"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                required
                            />
</div>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border px-2 py-1 rounded">
          <option value="">All Categories</option>
          {categories.map((c) => <option key={c}>{c}</option>)}
        </select>
        <input type="number" placeholder="Min" value={min} onChange={(e) => setMin(e.target.value ? +e.target.value : '')} className="border px-2 py-1 w-20" />
        <input type="number" placeholder="Max" value={max} onChange={(e) => setMax(e.target.value ? +e.target.value : '')} className="border px-2 py-1 w-20" />
        <select value={sort} onChange={(e) => setSort(e.target.value as 'asc' | 'desc' | '')} className="border px-2 py-1 rounded">
          <option value="">Sort</option>
          <option value="asc">Low → High</option>
          <option value="desc">High → Low</option>
        </select>
      </div>

      {/* Products */}
      {filtered.length ? (
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={{ ...p, images: p.images.map((i) => (typeof i === 'string' ? i : i.src ?? '')) }} />
          ))}
        </div>
      ) : (
        <p className="text-center py-20">No results found</p>
      )}
    </div>
  )
}

export default Products
