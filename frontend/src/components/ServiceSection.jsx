import ServiceCard from "./ServiceCard";

function ServiceSection() {
    return (
        <section className="bg-gray-50 py-16">

            <div className="mx-auto max-w-7xl px-6">

                <h2 className="text-3xl font-bold text-gray-800">
                    Dịch vụ y tế
                </h2>

                <p className="mt-2 text-gray-500">
                    Các dịch vụ được nhiều người sử dụng
                </p>

                <div className="mt-8 grid grid-cols-4 gap-6">

                    <ServiceCard
                        icon="🏥"
                        title="Đặt khám"
                        description="Đặt lịch khám tại cơ sở y tế"
                    />

                    <ServiceCard
                        icon="👨‍⚕️"
                        title="Tìm bác sĩ"
                        description="Tìm kiếm bác sĩ phù hợp"
                    />

                    <ServiceCard
                        icon="📹"
                        title="Tư vấn từ xa"
                        description="Tư vấn sức khỏe trực tuyến"
                    />

                    <ServiceCard
                        icon="🧪"
                        title="Xét nghiệm"
                        description="Đặt lịch xét nghiệm"
                    />

                </div>

            </div>

        </section>
    );
}

export default ServiceSection;