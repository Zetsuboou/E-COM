function ProductCard({title, price, image}){
    return <div className="bg-amber-100 p-2 w-70 border-1 flex flex-col items-center">
        <div className="bg-amber-50 p-2 rounded-2xl">
            <img src={image} alt={title} className="rounded-2xl w-48 h-48 object-cover"/>
        </div>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <h4>{price}</h4>
        </div>
        <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 font-medium rounded-lg text-s px-5 py-2.5">Add to Cart</button>
    </div>
}

export default ProductCard