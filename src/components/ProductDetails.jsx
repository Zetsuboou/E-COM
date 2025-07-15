import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            setError('Invalid product ID');
            setLoading(false);
            return;
        }

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch product');
                return res.json();
            })
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center py-12">Loading...</div>;
    if (error) return <div className="text-center text-red-500 py-12">{error}</div>;
    if (!product) return null;

    return (
        <main className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
            <article className="flex flex-col md:flex-row gap-10 h-full">
                {/* Left: Product Image */}
                <div className="md:w-1/2">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full max-h-[600px] object-cover rounded-xl shadow-md"
                    />
                </div>

                {/* Right: Product Info */}
                <div className="md:w-1/2 flex flex-col justify-between space-y-6">
                    <div className="space-y-6">
                        <header>
                            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                            <p className="text-sm text-gray-500">Category: {product.category}</p>
                        </header>

                        <section>
                            <p className="text-gray-700">{product.description}</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-800">Price</h2>
                            <p className="text-lg text-green-600 font-bold">${product.price}</p>
                        </section>
                    </div>

                    <footer className="flex gap-4">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                            Add to Cart
                        </button>
                        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                            Buy Now
                        </button>
                    </footer>
                </div>
            </article>
        </main>
    );
}

export default ProductDetails;