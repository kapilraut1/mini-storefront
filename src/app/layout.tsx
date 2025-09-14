import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
    title: "Mini mart",
    description: "Mini Mart",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <ClerkProvider>
        <html lang="en">
            <body className={`${outfit.className} antialiased`}>
                    <Toaster />
                    {children}
            </body>
        </html>
        </ClerkProvider>
    );
}
