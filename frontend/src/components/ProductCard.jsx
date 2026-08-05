function ProductCard({ product }) {
    return (
        <div className="rounded-lg border p-4 shadow">

            <h2 className="text-xl font-bold">
                {product.name}
            </h2>

            <p className="mt-2 text-gray-600">
                ${product.price}
            </p>

            <button className="mt-4 rounded bg-blue-600 px-4 py-2 text-white">
                View
            </button>

        </div>
    );
}

export default ProductCard;