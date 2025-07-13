function Cart() {
    
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 75 ? 0 : 9.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-[Instrument_Serif] text-center mb-12 text-gray-800">Shopping Cart</h1>
                
                {cartItems.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-xl font-[Lora] text-gray-600 mb-8">Your cart is empty</p>
                        <button className="bg-amber-500 text-white px-8 py-3 rounded-lg font-[Lora] hover:bg-amber-600 transition-colors duration-300">
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between border-b py-6 last:border-b-0">
                                        <div className="flex items-center space-x-4">
                                            <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-lg"/>
                                            <div>
                                                <h3 className="font-[Lora] font-bold text-lg text-gray-800">{item.name}</h3>
                                                <p className="font-[Lora] text-gray-600">Size: {item.size} | Color: {item.color}</p>
                                                <p className="font-[Lora] font-bold text-amber-600">${item.price}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center border rounded-lg">
                                                <button className="px-3 py-1 hover:bg-gray-100">-</button>
                                                <span className="px-4 py-1 font-[Lora]">{item.quantity}</span>
                                                <button className="px-3 py-1 hover:bg-gray-100">+</button>
                                            </div>
                                            <button className="text-red-500 hover:text-red-700">Remove</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-2xl font-[Instrument_Serif] mb-6 text-gray-800">Order Summary</h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between font-[Lora]">
                                        <span>Subtotal:</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between font-[Lora]">
                                        <span>Shipping:</span>
                                        <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                                    </div>
                                    <div className="flex justify-between font-[Lora]">
                                        <span>Tax:</span>
                                        <span>${tax.toFixed(2)}</span>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between font-[Lora] font-bold text-lg">
                                        <span>Total:</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>
                                <button className="w-full bg-amber-500 text-white py-3 px-4 rounded-lg font-[Lora] font-bold hover:bg-amber-600 transition-colors duration-300 mt-6">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart