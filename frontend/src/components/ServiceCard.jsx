function ServiceCard({ icon, title, description }) {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <div className="text-4xl">
                {icon}
            </div>

            <h3 className="mt-4 text-lg font-bold text-gray-800">
                {title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
                {description}
            </p>

        </div>
    );
}

export default ServiceCard;