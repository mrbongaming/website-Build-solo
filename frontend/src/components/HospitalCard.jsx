function HospitalCard({ image, name, address, rating }) {
    return (
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            {/* Image */}
            <img
                src={image}
                alt={name}
                className="h-48 w-full object-cover"
            />

            {/* Information */}
            <div className="p-5">

                <h3 className="text-lg font-bold text-gray-800">
                    {name}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                    {address}
                </p>

                <div className="mt-4 flex items-center justify-between">

                    <span className="text-sm font-medium text-yellow-500">
                        ⭐ {rating}
                    </span>

                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                        Đặt khám
                    </button>

                </div>

            </div>

        </div>
    );
}

export default HospitalCard;