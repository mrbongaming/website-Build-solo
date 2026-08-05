import {useState, useEffect} from "react";
import { getProducts } from "../services/productService";


import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";


function Home() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        async function loadProducts(){
            const data = await getProducts();
            setProducts(data);
        }
        loadProducts();


    },[]);

    return (
        <>

            <Navbar />

            <div className="p-8">

                <h1 className="text-4xl font-bold">
                    Products
                </h1>
                
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </div>

        </>
    );

}
export default Home;