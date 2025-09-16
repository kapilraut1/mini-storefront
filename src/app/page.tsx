'use client'
import Hero from "@/src/components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Product from "../components/Product"


export default function Home() {
    return (
        <div>
           <Navbar />
            <Hero />
            <Product />
            <Footer />
           
        </div>
    );
}