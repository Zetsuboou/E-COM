function SignUp() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h1 className="text-4xl font-[Instrument_Serif] text-center text-gray-800 mb-2">Welcome To KOL O DOR</h1>
                    <p className="text-center font-[Lora] text-gray-600">Create your KOL O DOR account</p>
                </div>
                
                <form className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-md">
                    <div>
                        <label className="block font-[Lora] font-bold mb-2 text-gray-700">Full Name</label>
                        <input 
                            type="text" 
                            required 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label className="block font-[Lora] font-bold mb-2 text-gray-700">Email</label>
                        <input 
                            type="email" 
                            required 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="JohnDoe@example.com"
                        />
                    </div>

                    <div>
                        <label className="block font-[Lora] font-bold mb-2 text-gray-700">Password</label>
                        <input 
                            type="password" 
                            required 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="***********"
                        />
                    </div>

                    <div>
                        <label className="block font-[Lora] font-bold mb-2 text-gray-700">Confirm Password</label>
                        <input 
                            type="password" 
                            required 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            placeholder="***********"
                        />
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="link-checkbox" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-amber-600 hover:text-amber-500 hover:underline">terms and conditions</a>.</label>
                        </div>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-amber-500 text-white py-3 px-4 rounded-lg font-[Lora] font-bold hover:bg-amber-600 transition-colors duration-300 cursor-pointer">
                        Sign Up
                    </button>

                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-amber-500"></div>
                            <span className="mx-4 text-gray-700">or</span>
                        <div className="flex-grow border-t border-amber-500"></div>
                    </div>

                    
                    <div className="flex items-center justify-center">
                        <button className="flex items-center gap-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition">
                            <img
                              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                              alt="Google logo"
                              className="w-5 h-5"
                            />
                            <span className="text-sm text-gray-700 font-medium">Sign up with Google</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp