'use client'

import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

type OrderSummaryProps = {
  totalPrice: number
  items: unknown[] // TODO: Replace with a specific item type
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ totalPrice }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'
  const router = useRouter()

  const [paymentMethod, setPaymentMethod] = useState<'COD' | 'STRIPE'>('COD')

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/orders')
  }

  return (
    <div className="w-full max-w-lg lg:max-w-[340px] bg-slate-50/30 border border-slate-200 text-slate-500 text-sm rounded-xl p-7">
      <h2 className="text-xl font-medium text-slate-600">Payment Summary</h2>

      {/* Payment Method */}
      <p className="text-slate-400 text-xs my-4">Payment Method</p>
      <div className="flex gap-2 items-center">
        <input
          type="radio"
          id="COD"
          name="payment"
          onChange={() => setPaymentMethod('COD')}
          checked={paymentMethod === 'COD'}
          className="accent-gray-500"
        />
        <label htmlFor="COD" className="cursor-pointer">
          Cash on Delivery
        </label>
      </div>
      <div className="flex gap-2 items-center mt-1">
        <input
          type="radio"
          id="STRIPE"
          name="payment"
          onChange={() => setPaymentMethod('STRIPE')}
          checked={paymentMethod === 'STRIPE'}
          className="accent-gray-500"
        />
        <label htmlFor="STRIPE" className="cursor-pointer">
          Stripe Payment
        </label>
      </div>

      {/* Price Details */}
      <div className="pb-4 mt-4 border-b border-slate-200">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1 text-slate-400">
            <p>Subtotal:</p>
            <p>Shipping:</p>
          </div>
          <div className="flex flex-col gap-1 font-medium text-right">
            <p>
              {currency}
              {totalPrice.toLocaleString()}
            </p>
            <p>Free</p>
          </div>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between py-4">
        <p>Total:</p>
        <p className="font-medium text-right">
          {currency}
          {totalPrice.toLocaleString()}
        </p>
      </div>

      {/* Place Order Button */}
      <button
        onClick={(e) =>
          toast.promise(handlePlaceOrder(e), { loading: 'Placing Order...' })
        }
        className="w-full bg-slate-700 text-white py-2.5 rounded hover:bg-slate-900 active:scale-95 transition-all"
      >
        Place Order
      </button>
    </div>
  )
}

export default OrderSummary
