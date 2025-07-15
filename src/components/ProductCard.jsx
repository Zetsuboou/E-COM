import { Link } from 'react-router-dom';

function ProductCard({ id, image, title, description, price }) {
    return (
        <Link to={`/product/${id}`} className="block hover:shadow-lg transition">
            <div className="bg-amber-100 p-4 w-full border rounded-lg flex flex-col justify-center items-center">
                <div className="bg-white p-2 rounded-lg shadow-md">
                    <img src={image} alt={title} className="rounded-lg w-48 h-48 object-cover" />
                </div>
                <div className="flex flex-col justify-center items-center mt-4">
                    <h1 className="text-xl font-bold mb-2">{title}</h1>
                    <p className="text-sm text-gray-600 text-center mb-2">{description}</p>
                    <h4 className="text-lg font-semibold text-amber-600">{price}</h4>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;