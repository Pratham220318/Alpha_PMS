export default function StatsCard({
    title,
    value,
    change,
    darkMode,
}) {

    return (
        <div
            className={`rounded-3xl border p-6 transition ${darkMode
                ? "bg-slate-900 border-slate-800 text-white"
                : "bg-white border-slate-200 text-slate-900"
                }`}
        >

            <p
                className={
                    darkMode
                        ? "text-slate-400"
                        : "text-slate-500"
                }
            >
                {title}
            </p>

            <h3 className="text-4xl font-bold mt-4">
                {value}
            </h3>

            {change && (
                <p
                    className={`mt-3 font-medium ${change.includes("+")
                        ? "text-green-500"
                        : "text-red-500"
                        }`}
                >
                    {change}
                </p>
            )}

        </div>
    );
}