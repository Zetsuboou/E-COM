import Products from "./Products";

function Shop() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-[Instrument_Serif] text-center mb-4 text-gray-800">Shop</h1>
                <p className="text-lg font-[Lora] text-center text-gray-600 mb-12">Discover our premium athletic wear collection</p>
                <Products />
            </div>
        </div>
    );
}

export default Shop;