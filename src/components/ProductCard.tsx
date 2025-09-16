'use client'

import Image from 'next/image'
import Link from 'next/link'
type ProductType = {
  id: string
  name: string
  price: number
  images: string[]
}

type ProductCardProps = {
  product: ProductType
}

const ProductCard = ({ product }: ProductCardProps) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

  return (
    <Link
      href={`/product/${product.id}`}
      className="group max-xl:mx-auto"
    >
      {/* Image container */}
      <div className="bg-[#F5F5F5] h-40 sm:w-60 sm:h-68 rounded-lg flex items-center justify-center">
        {/* Image */}
        <Image
          width={500}
          height={500}
          className="max-h-30 sm:max-h-40 w-auto group-hover:scale-115 transition duration-300"
          src={product.images[0]}
          alt={product.name}
        />
      </div>
      <div className="flex justify-between gap-3 text-sm text-slate-800 pt-2 max-w-60">
        <p className="truncate">{product.name}</p>
        <p>
          {currency}
          {product.price}
        </p>
      </div>
    </Link>

  )
}

export default ProductCard
