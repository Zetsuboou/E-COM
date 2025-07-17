import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h1 className="text-4xl font-[Instrument_Serif] text-center text-gray-800 mb-2">Welcome Back</h1>
                    <p className="text-center font-[Lora] text-gray-600">Sign in to your KOL O DOR account</p>
                </div>
                
                <form className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-md">
                    <div>
                        <label className="block font-[Lora] font-bold mb-2 text-gray-700">Email Address</label>
                        <input 
                            type="email" 
                            required 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    
                    <div>
                        <label className="block font-[Lora] font-bold mb-2 text-gray-700">Password</label>
                        <input 
                            type="password" 
                            required 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input type="checkbox" className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded" />
                            <label className="ml-2 block text-sm font-[Lora] text-gray-700">Remember me</label>
                        </div>
                        <a href="#" className="text-sm font-[Lora] text-amber-600 hover:text-amber-500">Forgot password?</a>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-amber-500 text-white py-3 px-4 rounded-lg font-[Lora] font-bold hover:bg-amber-600 transition-colors duration-300"
                    >
                        Sign In
                    </button>
                    
                    <div className="text-center">
                        <p className="font-[Lora] text-gray-600">
                            Don't have an account? 
                            <Link to="/SignUp" className="text-amber-600 hover:text-amber-500 ml-1">Sign up here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login