import HospitalCard from "./HospitalCard";

function HospitalSection() {

    const hospitals = [
        {
            id: 1,
            name: "Bệnh viện Đa khoa Thành phố",
            address: "123 Nguyễn Trãi, TP. Hồ Chí Minh",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
        },
        {
            id: 2,
            name: "Phòng khám MedCare",
            address: "456 Lê Lợi, TP. Hồ Chí Minh",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
        },
        {
            id: 3,
            name: "Bệnh viện Quốc tế",
            address: "789 Điện Biên Phủ, TP. Hồ Chí Minh",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1512678080530-7760d81f95da"
        }
    ];

    return (
        <section className="bg-gray-50 py-16">

            <div className="mx-auto max-w-7xl px-6">

                <div className="flex items-center justify-between">

                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">
                            Cơ sở y tế nổi bật
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Khám phá các cơ sở y tế được nhiều người lựa chọn
                        </p>
                    </div>

                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                        Xem tất cả →
                    </button>

                </div>


                {/* Hospital cards */}

                <div className="mt-8 grid grid-cols-3 gap-6">

                    {hospitals.map((hospital) => (
                        <HospitalCard
                            key={hospital.id}
                            image={hospital.image}
                            name={hospital.name}
                            address={hospital.address}
                            rating={hospital.rating}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default HospitalSection;