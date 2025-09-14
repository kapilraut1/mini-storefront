'use client'
import Banner from "@/src/components/Banner";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

import { ReactNode } from "react";

interface PublicLayoutProps {
    children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {

    return (
        <>
            <Banner />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
