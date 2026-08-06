import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import SearchBar from "../components/Searchbar";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        {/* Search Bar */}
        <section>
          <SearchBar />
        </section>

        <section>Categories</section>

        <section>Products</section>
      </main>

      <Footer />
    </>
  );
}
export default Home;
