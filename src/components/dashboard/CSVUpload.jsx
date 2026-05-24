"use client";

import Papa from "papaparse";

export default function CSVUpload({
    setPortfolioData,
    darkMode,
}) {

    const handleFileUpload = (event) => {

        const file = event.target.files[0];

        if (!file) return;

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,

            complete: (results) => {
                console.log("data", results);

                const formattedData = results.data.map((item) => ({
                    stock: item.stock || item.Stock,
                    quantity: item.quantity || item.Quantity,
                    avgPrice: item.avgPrice || item["Avg Price"],
                    currentPrice:
                        item.currentPrice || item["Current Price"],
                    returns: item.returns || item.Returns,
                }));

                setPortfolioData(formattedData);
            },
        });
    };

    return (
        <div
            className={`rounded-3xl border p-6 ${darkMode
                ? "bg-[#0f172a] border-slate-800"
                : "bg-white border-slate-200"
                }`}
        >

            <div className="flex items-center justify-between flex-wrap gap-4">

                <div>

                    <h2 className="text-2xl font-bold">
                        Upload Portfolio CSV
                    </h2>

                    <p
                        className={`mt-1 ${darkMode
                            ? "text-slate-400"
                            : "text-slate-500"
                            }`}
                    >
                        Import portfolio holdings dynamically.
                    </p>

                </div>

                <label className="cursor-pointer">

                    <input
                        type="file"
                        accept=".csv"
                        onChange={handleFileUpload}
                        className="hidden"
                    />

                    <div className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-3 rounded-2xl font-medium shadow-lg">
                        Upload CSV
                    </div>

                </label>

            </div>

        </div>
    );
}