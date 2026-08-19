import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";


import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceSection from "../components/ServiceSection";
import Categories from "../components/Categories";
import Footer from "../components/Footer";


function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <ServiceSection />
            <main>
                <h1>
                    Welcome to MedCare
                </h1>
            </main>
        </>
    );
}

export default Home;