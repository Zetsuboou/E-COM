import { Link } from 'react-router-dom';

function NavBar({ cartItems }) {
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0); // Calculate total items in the cart

    return (
        <div id="navbar" className="bg-lightgray-500 py-4 px-6 font-[Instrument_Serif]">
            <div className="flex justify-center items-center">
                <hr className="flex-2 h-1 w-full mx-auto bg-gray-100 rounded-sm dark:bg-gray-700" />
                <Link to="/home" className="flex flex-1 justify-center items-center text-[36px] tracking-[3.6px] no-underline text-black">
                    KOL O DOR
                </Link>
                <hr className="flex-2 h-1 w-full mx-auto bg-gray-100 rounded-sm dark:bg-gray-700" />
            </div>

            <div className="flex justify-between items-center text-xl">
                <ul className="flex space-x-16 underline underline-offset-4 decoration-2 px-9">
                    <li><Link to="/home" className="text-black no-underline hover:text-amber-600">Home</Link></li>
                    <li><Link to="/about" className="text-black no-underline hover:text-amber-600">About</Link></li>
                    <li><Link to="/shop" className="text-black no-underline hover:text-amber-600">Shop</Link></li>
                    <li><Link to="/contact" className="text-black no-underline hover:text-amber-600">Contact</Link></li>
                </ul>

                <ul className="flex space-x-12 underline underline-offset-4 decoration-2 px-9">
                    <li><Link to="/login" className="text-black no-underline hover:text-amber-600">Log in</Link></li>
                    <li className="relative">
                        <Link to="/cart" className="text-black no-underline hover:text-amber-600">Cart</Link>
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-sm rounded-full px-2 py-1">
                                {cartCount}
                            </span>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;