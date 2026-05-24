"use client";

export default function MarketMovers({ darkMode }) {

    const gainers = [
        { stock: "Reliance", change: "+14.5%" },
        { stock: "TCS", change: "+11.2%" },
        { stock: "INFY", change: "+4.8%" },
    ];

    const losers = [
        { stock: "HDFC Bank", change: "-1.2%" },
        { stock: "ITC", change: "-2.1%" },
        { stock: "Wipro", change: "-3.4%" },
    ];

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

            {/* Top Gainers */}
            <div
                className={`rounded-3xl border p-6 ${darkMode
                        ? "bg-[#0f172a] border-slate-800"
                        : "bg-white border-slate-200"
                    }`}
            >

                <div className="flex items-center justify-between">

                    <div>

                        <h2 className="text-2xl font-bold text-slate-900">
                            Top Gainers
                        </h2>

                        <p
                            className={`mt-1 ${darkMode
                                    ? "text-slate-400"
                                    : "text-slate-500"
                                }`}
                        >
                            Best performing holdings
                        </p>

                    </div>

                </div>

                <div className="mt-6 space-y-4">

                    {gainers.map((item, index) => (

                        <div
                            key={index}
                            className={`flex items-center justify-between p-4 rounded-2xl transition ${darkMode
                                    ? "bg-slate-900 hover:bg-slate-800"
                                    : "bg-slate-50 hover:bg-slate-100"
                                }`}
                        >

                            <div>

                                <h3 className="font-semibold text-lg text-slate-900">
                                    {item.stock}
                                </h3>

                                <p
                                    className={`text-sm ${darkMode
                                            ? "text-slate-400"
                                            : "text-slate-500"
                                        }`}
                                >
                                    Portfolio Holding
                                </p>

                            </div>

                            <div className="text-green-500 font-bold text-lg">
                                {item.change}
                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {/* Top Losers */}
            <div
                className={`rounded-3xl border p-6 ${darkMode
                        ? "bg-[#0f172a] border-slate-800"
                        : "bg-white border-slate-200"
                    }`}
            >

                <div className="flex items-center justify-between">

                    <div>

                        <h2 className="text-2xl font-bold text-slate-900">
                            Top Losers
                        </h2>

                        <p
                            className={`mt-1 ${darkMode
                                    ? "text-slate-400"
                                    : "text-slate-500"
                                }`}
                        >
                            Weak performing holdings
                        </p>

                    </div>

                </div>

                <div className="mt-6 space-y-4">

                    {losers.map((item, index) => (

                        <div
                            key={index}
                            className={`flex items-center justify-between p-4 rounded-2xl transition ${darkMode
                                    ? "bg-slate-900 hover:bg-slate-800"
                                    : "bg-slate-50 hover:bg-slate-100"
                                }`}
                        >

                            <div>

                                <h3 className="font-semibold text-lg text-slate-900">
                                    {item.stock}
                                </h3>

                                <p
                                    className={`text-sm ${darkMode
                                            ? "text-slate-400"
                                            : "text-slate-500"
                                        }`}
                                >
                                    Portfolio Holding
                                </p>

                            </div>

                            <div className="text-red-500 font-bold text-lg">
                                {item.change}
                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}