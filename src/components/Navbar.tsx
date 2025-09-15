'use client'

import { PackageIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useCartStore } from "../store/useCartStore";
import { useClerk, useUser, UserButton } from "@clerk/nextjs";

const Navbar = () => {
    const { isLoaded, user } = useUser();
    const { openSignIn } = useClerk();
    const router = useRouter();
    const cartCount = useCartStore((state) => state.total);



    return (
        <nav className="relative bg-white">
            <div className="mx-6">
                <div className="flex items-center justify-between max-w-7xl mx-auto py-4 transition-all">

                    <Link href="/" className="relative text-4xl font-semibold text-slate-700">
                        <span className="text-red-600">Mini</span>-mart<span className="text-red-600 text-5xl leading-0">.</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-slate-600">
                        <Link href="/">Home</Link>
                        <Link href="/shop">Shop</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>


                        <Link href="/cart" className="relative flex items-center gap-2 text-slate-600">
                            <ShoppingCart size={17} />
                            Cart
                            <button className="absolute -top-1 left-3 text-[8px] text-white bg-slate-600 size-3.5 rounded-full">
                                {cartCount}
                            </button>
                        </Link>

                        {isLoaded && user ? (
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Action
                                        labelIcon={<PackageIcon size={16} />}
                                        label="My Orders"
                                        onClick={() => router.push('/orders')}
                                    />
                                </UserButton.MenuItems>
                            </UserButton>
                        ) : (
                            <button
                                onClick={()=>openSignIn()}
                                className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full"
                            >
                                Login
                            </button>
                        )}
                    </div>

                    {/* Mobile User Button */}
                    <div className="sm:hidden">
                        {isLoaded && user ? (
                            <div>
                                <UserButton>
                                    <UserButton.MenuItems>
                                        <UserButton.Action
                                            labelIcon={<ShoppingCart size={16} />}
                                            label="Cart"
                                            onClick={() => router.push('/cart')}
                                        />
                                    </UserButton.MenuItems>
                                </UserButton>

                                <UserButton>
                                    <UserButton.MenuItems>
                                        <UserButton.Action
                                            labelIcon={<PackageIcon size={16} />}
                                            label="My Orders"
                                            onClick={() => router.push('/orders')}
                                        />
                                    </UserButton.MenuItems>
                                </UserButton>
                            </div>
                        ) : (
                            <button
                                onClick={() => openSignIn()}
                                className="px-7 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-sm transition text-white rounded-full"
                            >
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <hr className="border-gray-300" />
        </nav>
    );
};

export default Navbar;
