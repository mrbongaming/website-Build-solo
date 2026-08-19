function Navbar() {
    return (
        <nav className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">
                    MedCare
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-8">

                    <a href="#" className="text-gray-700 hover:text-blue-600">
                        Cơ sở y tế
                    </a>

                    <a href="#" className="text-gray-700 hover:text-blue-600">
                        Dịch vụ y tế
                    </a>

                    <a href="#" className="text-gray-700 hover:text-blue-600">
                        Tin tức
                    </a>

                    <a href="#" className="text-gray-700 hover:text-blue-600">
                        Hướng dẫn
                    </a>

                </div>

                {/* Right side */}
                <div className="flex items-center gap-4">

                    <div className="text-sm">
                        <p className="text-gray-500">
                            Tư vấn / Đặt khám
                        </p>

                        <p className="font-bold text-blue-600">
                            1900 2115
                        </p>
                    </div>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;