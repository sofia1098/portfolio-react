
export default function ModalText({ isOpen, onClose, data }) {
    if (!isOpen || !data) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-6">

            {/* Overlay */}
            <div
                className="absolute inset-0"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-black p-8 text-white">

                <button
                    onClick={onClose}
                    className="absolute right-5 top-5 text-sm text-white/60 transition hover:text-white"
                >
                    ✕
                </button>

                <img
                    src={data.image}
                    alt={data.title}
                    className="mx-auto mb-8 w-40 sm:w-52 object-contain"
                />

                <h2 className="text-3xl font-semibold text-center">
                    {data.title}
                </h2>

                <p className="mt-2 text-center text-sm text-white/60">
                    {data.subtitle}
                </p>

                <div className="mt-8 space-y-5">
                    {data.paragraphs.map((paragraph, index) => (
                        <p
                            key={index}
                            className="text-sm sm:text-base leading-relaxed text-white/80"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>

            </div>
        </div>
    );
}
