import DoctorCard from "./DoctorCard";

function DoctorSection() {

    const doctors = [
        {
            id: 1,
            name: "Nguyễn Văn An",
            specialty: "Tim mạch",
            hospital: "Bệnh viện Đa khoa Thành phố",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
        },
        {
            id: 2,
            name: "Trần Minh Anh",
            specialty: "Nhi khoa",
            hospital: "Bệnh viện Quốc tế",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
        },
        {
            id: 3,
            name: "Lê Hoàng Nam",
            specialty: "Da liễu",
            hospital: "Phòng khám MedCare",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7"
        }
    ];

    return (
        <section className="bg-white py-16">

            <div className="mx-auto max-w-7xl px-6">

                <div className="flex items-center justify-between">

                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">
                            Bác sĩ nổi bật
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Đội ngũ bác sĩ được nhiều người tin tưởng
                        </p>
                    </div>

                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                        Xem tất cả →
                    </button>

                </div>


                <div className="mt-8 grid grid-cols-3 gap-6">

                    {doctors.map((doctor) => (
                        <DoctorCard
                            key={doctor.id}
                            image={doctor.image}
                            name={doctor.name}
                            specialty={doctor.specialty}
                            hospital={doctor.hospital}
                            rating={doctor.rating}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}

export default DoctorSection;