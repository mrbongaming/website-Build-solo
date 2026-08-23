import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";


import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceSection from "../components/ServiceSection";
import HospitalSection from "../components/HospitalSection";
import DoctorSection from "../components/DoctorSection";
import Footer from "../components/Footer";


function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <ServiceSection />
            <HospitalSection />
            <DoctorSection />
            <main>
                <h1>
                    Welcome to MedCare
                </h1>
            </main>
        </>
    );
}

export default Home;