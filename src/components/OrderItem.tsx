'use client'
import Image from "next/image"
import { DotIcon } from "lucide-react"

interface OrderItemProps {
  order: {
    orderItems: {
      product: {
        images: string[];
        name: string;
      };
      price: number;
      quantity: number;
    }[];
    createdAt: string | Date;
    total: number;
    address: {
      name: string;
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
      phone: string;
    };
    status: string;
  };
}

const OrderItem = ({ order }: OrderItemProps) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$"

  const getStatusStyles = (status: string) => {
    const normalized = status.toLowerCase()
    if (normalized === "confirmed") return "text-yellow-500 bg-yellow-100"
    if (normalized === "delivered") return "text-green-500 bg-green-100"
    return "text-slate-500 bg-slate-100"
  }

  const formatStatus = (status: string) =>
    status.replace(/_/g, " ").toLowerCase()

  return (
    <>
      <tr className="text-sm">
        <td className="text-left">
          <div className="flex flex-col gap-6">
            {order.orderItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-20 aspect-square bg-slate-100 flex items-center justify-center rounded-md">
                  <Image
                    className="h-14 w-auto"
                    src={item.product.images[0]}
                    alt="product_img"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex flex-col justify-center text-sm">
                  <p className="font-medium text-slate-600 text-base">
                    {item.product.name}
                  </p>
                  <p>
                    {currency}
                    {item.price} Qty : {item.quantity}
                  </p>
                  <p className="mb-1">
                    {new Date(order.createdAt).toDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </td>

        <td className="text-center max-md:hidden">
          {currency}
          {order.total}
        </td>

        <td className="text-left max-md:hidden">
          <p>
            {order.address.name}, {order.address.street},
          </p>
          <p>
            {order.address.city}, {order.address.state}, {order.address.zip},{" "}
            {order.address.country},
          </p>
          <p>{order.address.phone}</p>
        </td>

        <td className="text-left space-y-2 text-sm max-md:hidden">
          <div
            className={`flex items-center justify-center gap-1 rounded-full p-1 ${getStatusStyles(
              order.status
            )}`}
          >
            <DotIcon size={10} className="scale-250" />
            {formatStatus(order.status)}
          </div>
        </td>
      </tr>

      {/* Mobile */}
      <tr className="md:hidden">
        <td colSpan={5}>
          <p>
            {order.address.name}, {order.address.street}
          </p>
          <p>
            {order.address.city}, {order.address.state}, {order.address.zip},{" "}
            {order.address.country}
          </p>
          <p>{order.address.phone}</p>
          <br />
          <div className="flex items-center">
            <span className="text-center mx-auto px-6 py-1.5 rounded bg-green-100 text-green-700">
              {formatStatus(order.status)}
            </span>
          </div>
        </td>
      </tr>

      <tr>
        <td colSpan={4}>
          <div className="border-b border-slate-300 w-6/7 mx-auto" />
        </td>
      </tr>
    </>
  )
}

export default OrderItem
