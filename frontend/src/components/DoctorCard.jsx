function DoctorCard({ image, name, specialty, hospital, rating }) {
    return (
        <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <div className="flex items-center gap-4">

                <img
                    src={image}
                    alt={name}
                    className="h-20 w-20 rounded-full object-cover"
                />

                <div>
                    <h3 className="font-bold text-gray-800">
                        {name}
                    </h3>

                    <p className="mt-1 text-sm text-blue-600">
                        {specialty}
                    </p>
                </div>

            </div>

            <div className="mt-5 border-t pt-4">

                <p className="text-sm text-gray-500">
                    {hospital}
                </p>

                <div className="mt-3 flex items-center justify-between">

                    <span className="text-sm text-yellow-500">
                        ⭐ {rating}
                    </span>

                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
                        Tư vấn
                    </button>

                </div>

            </div>

        </div>
    );
}

export default DoctorCard;