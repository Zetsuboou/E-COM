import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ProductCard from "../components/ProductCard"
import landingPage1 from "../assets/LandingPage1.jpg"
import landingPage2 from "../assets/LandingPage2.jpg"
import landingPage3 from "../assets/LandingPage3.jpg"
import Banner from "../assets/banner.jpg"


function Home(){
    const [topRatedProduct, setTopRatedProduct] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          // Filter out products that have no rating or rate
          const validProducts = data.filter(
            (item) => item.rating && typeof item.rating.rate === 'number'
          );

          const top3Products = validProducts
            .sort((a, b) => b.rating.rate - a.rating.rate)
            .slice(0, 3);

          setTopRatedProduct(top3Products);
        })
        .catch((err) => {
          console.error('Error fetching products:', err);
          setError(err.message);
        });
    }, []);


    return (
        <div>
            {/* Hero Section with Banner Background */}
            <section className="relative h-screen overflow-hidden">
                {/* Banner Background Image */}
                <img 
                    src={Banner} 
                    alt="Hero Banner" 
                    className="w-full h-full object-cover"
                />
                
                {/* Main Content Overlay with Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-30 z-10">
                    <h1 className="text-white text-7xl font-[Lora] font-bold text-center mb-6 drop-shadow-lg">
                        Where Fit Meets<br/>Fearless
                    </h1>
                    <Link to="/shop">
                        <button className="border-white border-3 px-8 py-3 font-[Lora] tracking-[3px] text-white hover:bg-white hover:text-black transition-all duration-300 mt-4">
                            Shop Now
                        </button>
                    </Link>
                </div>
            </section>

            {/* Floating Images Section */}
            <section className="relative py-24 px-8 bg-gradient-to-br from-amber-50 to-gray-100 overflow-hidden">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h2 className="text-5xl font-[Instrument_Serif] mb-8 text-gray-800">
                        Experience the Journey
                    </h2>
                    <p className="text-xl font-[Lora] text-gray-600 mb-12 max-w-3xl mx-auto">
                        From the first step to the finish line, our gear moves with you through every challenge
                    </p>
                </div>
                
                {/* Floating Images Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-12 left-1/4 w-24 h-24 animate-float">
                        <img 
                            src={landingPage1} 
                            alt="Float 1" 
                            className="w-full h-full object-cover rounded-lg opacity-30 hover:opacity-50 transition-opacity duration-300"
                        />
                    </div>
                    <div className="absolute top-24 right-1/3 w-32 h-32 animate-float-delayed">
                        <img 
                            src={landingPage2} 
                            alt="Float 2" 
                            className="w-full h-full object-cover rounded-lg opacity-25 hover:opacity-50 transition-opacity duration-300"
                        />
                    </div>
                    <div className="absolute bottom-16 left-1/3 w-28 h-28 animate-float-slow">
                        <img 
                            src={landingPage3} 
                            alt="Float 3" 
                            className="w-full h-full object-cover rounded-lg opacity-20 hover:opacity-50 transition-opacity duration-300"
                        />
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-16 px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-[Instrument_Serif] text-center mb-12 text-gray-800">
                        Featured Products
                    </h2>
                    {error ? (
                        <p className="text-center text-red-500">Error: {error}</p>
                    ) : topRatedProduct.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {topRatedProduct.map((product) => (
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
                    ) : (
                        <p className="text-center text-gray-500">No products available</p>
                    )}
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-[Instrument_Serif] mb-8 text-gray-800">
                        About KOL O DOR
                    </h2>
                    <p className="text-lg font-[Lora] text-gray-600 leading-relaxed mb-8">
                        We believe that fitness is not just about physical strength, but about building confidence 
                        and fearlessness in every aspect of life. Our premium athletic wear is designed to move 
                        with you, whether you're crushing your workout goals or conquering your daily challenges.
                    </p>
                    <Link to="/about">
                        <button className="border-gray-800 border-2 px-8 py-3 font-[Lora] tracking-[2px] text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300">
                            Learn More
                        </button>
                    </Link>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 px-8 bg-amber-100">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-[Instrument_Serif] mb-6 text-gray-800">
                        Stay Connected
                    </h2>
                    <p className="text-lg font-[Lora] text-gray-600 mb-8">
                        Get the latest updates on new arrivals, exclusive offers, and fitness tips.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                        <button className="bg-amber-500 text-white px-6 py-3 rounded-lg font-[Lora] hover:bg-amber-600 transition-colors duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home