'use client'
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

import { ReactNode } from "react";

interface PublicLayoutProps {
    children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
