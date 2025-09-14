'use client'
import Hero from "@/src/components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Product from "../components/Product"
// import Newsletter from "@/components/Newsletter";
// import OurSpecs from "@/components/OurSpec";
// import LatestProducts from "@/components/LatestProducts";

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