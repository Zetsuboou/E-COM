function Contact() {
    return (
        <div className="min-h-screen bg-white py-16 px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-[Instrument_Serif] text-center mb-12 text-gray-800">Contact Us</h1>
                
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-[Instrument_Serif] mb-6 text-gray-800">Get in Touch</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-[Lora] font-bold text-lg mb-2 text-gray-800">Email</h3>
                                <p className="font-[Lora] text-gray-600">support@kolodor.com</p>
                            </div>
                            <div>
                                <h3 className="font-[Lora] font-bold text-lg mb-2 text-gray-800">Phone</h3>
                                <p className="font-[Lora] text-gray-600">1-800-KOL-ODOR</p>
                            </div>
                            <div>
                                <h3 className="font-[Lora] font-bold text-lg mb-2 text-gray-800">Address</h3>
                                <p className="font-[Lora] text-gray-600">
                                    123 Fitness Street<br/>
                                    Athletic City, AC 12345<br/>
                                    United States
                                </p>
                            </div>
                            <div>
                                <h3 className="font-[Lora] font-bold text-lg mb-2 text-gray-800">Hours</h3>
                                <p className="font-[Lora] text-gray-600">
                                    Monday - Friday: 9AM - 6PM<br/>
                                    Saturday: 10AM - 4PM<br/>
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-[Instrument_Serif] mb-6 text-gray-800">Send Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block font-[Lora] font-bold mb-2 text-gray-700">Name</label>
                                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
                            </div>
                            <div>
                                <label className="block font-[Lora] font-bold mb-2 text-gray-700">Email</label>
                                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
                            </div>
                            <div>
                                <label className="block font-[Lora] font-bold mb-2 text-gray-700">Subject</label>
                                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
                            </div>
                            <div>
                                <label className="block font-[Lora] font-bold mb-2 text-gray-700">Message</label>
                                <textarea rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
                            </div>
                            <button type="submit" className="bg-amber-500 text-white px-8 py-3 rounded-lg font-[Lora] hover:bg-amber-600 transition-colors duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact