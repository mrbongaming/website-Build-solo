import { useParams } from "react-router-dom";

function ProductDetail() {

    const { id } = useParams();

    return (
        <div>
            Product ID: {id}
        </div>
    );
}

export default ProductDetail;