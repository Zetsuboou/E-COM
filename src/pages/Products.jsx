import {useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'


export default function Products(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) =>{
            if(!res.ok) throw new Error("Failed to fetch");
            return res.json();
        })
        .then((data) =>{
            setProducts(data);
            setLoading(false)
        })
        .catch((err) =>{
            setError(err.message);
            setLoading(false)
        })
    }, [])


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={`$${product.price}`}
                />
            ))}
        </div>
    )
}


