function Hero() {
    return (
        <section className="bg-blue-50">
            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid grid-cols-2 items-center gap-12">

                    {/* Left side */}
                    <div>

                        <h1 className="text-5xl font-bold leading-tight text-gray-800">
                            Kết nối người dân với
                            <span className="block text-blue-600">
                                dịch vụ y tế hàng đầu
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-600">
                            Tìm kiếm bệnh viện, phòng khám và bác sĩ
                            một cách nhanh chóng và dễ dàng.
                        </p>

                        {/* Search */}
                        <div className="mt-8">

                            <div className="flex items-center rounded-xl bg-white p-2 shadow-lg">

                                <input
                                    type="text"
                                    placeholder="Tìm kiếm bệnh viện, phòng khám, bác sĩ..."
                                    className="flex-1 px-4 py-3 outline-none"
                                />

                                <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                                    Tìm kiếm
                                </button>

                            </div>

                        </div>

                    </div>


                    {/* Right side */}
                    <div className="flex justify-center">

                        <div className="h-80 w-80 rounded-full bg-blue-200">
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;