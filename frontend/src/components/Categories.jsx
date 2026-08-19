import { useState } from "react";

import Information from "../components/InformationPage";
import Specifications from "./Hero";
import Reviews from "./ServiceSection";

function Categories() {

    const [activeTab, setActiveTab] = useState("information");

    return (
        <div className="p-8">

            <h1 className="text-4xl font-bold">
                Laptop
            </h1>

            <div className="mt-6 flex gap-4">

                <button className="rounded-lg px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => setActiveTab("information")}
                >
                    Information
                </button>

                <button className="rounded-lg px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => setActiveTab("specifications")}
                >
                    Specifications
                </button>

                <button className="rounded-lg px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => setActiveTab("reviews")}
                >
                    Reviews
                </button> 

            </div>

            <div className="mt-8">

                {activeTab === "information" && (
                    <Information />
                )}

                {activeTab === "specifications" && (
                    <Specifications />
                )}

                {activeTab === "reviews" && (
                    <Reviews />
                )}

            </div>

        </div>
    );
}

export default Categories;