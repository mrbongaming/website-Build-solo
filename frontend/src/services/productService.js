const API_URL = "http://localhost:8080";

export async function getProducts() {
    const response = await fetch(`${API_URL}/products`);

    if (!response.ok) {
        throw new Error(`Error fetching products: ${response.status}`);
    }

    return response.json();
}