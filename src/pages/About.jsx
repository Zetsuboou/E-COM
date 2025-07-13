function About() {
    return (
        <div className="min-h-screen bg-white py-16 px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-[Instrument_Serif] text-center mb-12 text-gray-800">About KOL O DOR</h1>
                
                <div className="space-y-8">
                    <section>
                        <h2 className="text-3xl font-[Instrument_Serif] mb-6 text-gray-800">Our Story</h2>
                        <p className="text-lg font-[Lora] text-gray-600 leading-relaxed mb-6">
                            Founded in 2020, KOL O DOR was born from a simple belief: that everyone deserves to feel 
                            confident and fearless in their own skin. We started as a small team of fitness enthusiasts 
                            who were frustrated with the lack of truly comfortable, stylish, and functional athletic wear.
                        </p>
                        <p className="text-lg font-[Lora] text-gray-600 leading-relaxed">
                            Today, we're proud to serve thousands of customers who share our passion for fitness, 
                            style, and living life without limits.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-[Instrument_Serif] mb-6 text-gray-800">Our Mission</h2>
                        <p className="text-lg font-[Lora] text-gray-600 leading-relaxed">
                            To empower individuals to push their boundaries, embrace their strength, and live fearlessly. 
                            We create premium athletic wear that moves with you, supports your goals, and helps you 
                            look and feel your absolute best.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-[Instrument_Serif] mb-6 text-gray-800">Our Values</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <h3 className="text-xl font-[Lora] font-bold mb-4 text-gray-800">Quality</h3>
                                <p className="font-[Lora] text-gray-600">Premium materials and construction in every piece</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-[Lora] font-bold mb-4 text-gray-800">Inclusivity</h3>
                                <p className="font-[Lora] text-gray-600">Fitness is for everyone, regardless of size or ability</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-[Lora] font-bold mb-4 text-gray-800">Sustainability</h3>
                                <p className="font-[Lora] text-gray-600">Environmentally conscious materials and practices</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About